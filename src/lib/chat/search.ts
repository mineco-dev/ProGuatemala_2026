import type { KnowledgeEntry, SearchResult } from './types';

/**
 * Buscador BM25 que corre en el navegador sobre el contenido del sitio.
 * No hay servidor ni API: el indice se arma en memoria la primera vez que se
 * abre el chat y se reutiliza mientras dure la visita.
 */

/** Palabras sin valor discriminante; se descartan de consultas y documentos. */
const STOPWORDS = new Set([
  // espanol
  'a', 'acerca', 'al', 'algo', 'algunas', 'algunos', 'ante', 'antes', 'como', 'con', 'cual',
  'cuales', 'cuando', 'cuanto', 'cuantos', 'de', 'del', 'desde', 'donde', 'dos', 'el', 'ella',
  'ellos', 'en', 'entre', 'era', 'es', 'esa', 'ese', 'eso', 'esta', 'estas', 'este', 'esto',
  'estos', 'favor', 'gustaria', 'hay', 'hasta', 'la', 'las', 'le', 'les', 'lo', 'los', 'mas',
  'me', 'mi', 'muy', 'nada', 'necesito', 'ni', 'no', 'nos', 'o', 'otra', 'otras', 'otro',
  'otros', 'para', 'pero', 'poder', 'podria', 'por', 'porque', 'pueden', 'puedo', 'que',
  'quien', 'quienes', 'quiero', 'saber', 'se', 'ser', 'si', 'sin', 'sobre', 'solo', 'son',
  'su', 'sus', 'tambien', 'tiene', 'tienen', 'todo', 'todos', 'un', 'una', 'unas', 'uno',
  'unos', 'y', 'ya',
  // ingles
  'about', 'all', 'am', 'an', 'and', 'any', 'are', 'as', 'at', 'be', 'but', 'by', 'can',
  'could', 'do', 'does', 'for', 'from', 'get', 'give', 'has', 'have', 'how', 'i', 'if', 'in',
  'into', 'is', 'it', 'its', 'like', 'many', 'me', 'much', 'my', 'need', 'not', 'of', 'on',
  'or', 'our', 'please', 'said', 'she', 'should', 'so', 'some', 'tell', 'than', 'that', 'the',
  'their', 'them', 'there', 'these', 'they', 'this', 'to', 'want', 'was', 'we', 'were', 'what',
  'when', 'where', 'which', 'who', 'why', 'will', 'with', 'would', 'you', 'your',
]);

/** Pesos por campo: un termino en el titulo vale mas que uno en el cuerpo. */
const FIELD_WEIGHTS = { title: 3, keywords: 4, related: 2, body: 1 } as const;

const K1 = 1.2;
const B = 0.5;

/**
 * Minimos para considerar que la respuesta es confiable. Por debajo de esto el
 * chat prefiere admitir que no sabe y derivar a un asesor, en vez de contestar
 * cualquier cosa que se le parezca.
 */
const MIN_SCORE = 1.2;
/** Sin coincidencia fuerte hace falta que coincida la mayoria de la consulta. */
const MIN_COVERAGE = 0.5;
/**
 * Peso informativo minimo de un termino para que valga como coincidencia
 * fuerte. Filtra palabras que estan en todo el sitio ("guatemala", "inversion")
 * y deja pasar las especificas ("textiles", "maquila", "oficinas").
 */
const MIN_STRONG_IDF = 1.2;

/** Minusculas, sin acentos y sin puntuacion. La "n" y la "n con tilde" se unifican. */
export const normalize = (text: string): string =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9\s]/g, ' ');

/** Plural simple es/en, para que "incentivos" y "incentivo" sean el mismo termino. */
const stem = (token: string): string => {
  if (token.length > 5 && token.endsWith('es')) return token.slice(0, -2);
  if (token.length > 4 && token.endsWith('s')) return token.slice(0, -1);
  return token;
};

export const tokenize = (text: string): string[] =>
  normalize(text)
    .split(/\s+/)
    .filter((token) => token.length > 2 && !STOPWORDS.has(token))
    .map(stem);

interface DocumentVector {
  entryIndex: number;
  freqs: Map<string, number>;
  /** Terminos del titulo y las keywords: la senal fuerte de pertinencia. */
  strong: Set<string>;
  titleTokens: Set<string>;
  length: number;
}

export interface SearchIndex {
  entries: KnowledgeEntry[];
  documents: DocumentVector[];
  idf: Map<string, number>;
  averageLength: number;
}

const addTokens = (freqs: Map<string, number>, text: string, weight: number): number => {
  let added = 0;
  for (const token of tokenize(text)) {
    freqs.set(token, (freqs.get(token) ?? 0) + weight);
    added += weight;
  }
  return added;
};

export const buildSearchIndex = (entries: KnowledgeEntry[]): SearchIndex => {
  const documents: DocumentVector[] = entries.map((entry, entryIndex) => {
    const freqs = new Map<string, number>();
    let length = 0;
    length += addTokens(freqs, entry.title, FIELD_WEIGHTS.title);
    length += addTokens(freqs, entry.keywords.join(' '), FIELD_WEIGHTS.keywords);
    length += addTokens(freqs, (entry.related ?? []).join(' '), FIELD_WEIGHTS.related);
    length += addTokens(freqs, entry.body, FIELD_WEIGHTS.body);

    const titleTokens = new Set(tokenize(entry.title));
    const strong = new Set([...titleTokens, ...tokenize(entry.keywords.join(' '))]);

    return { entryIndex, freqs, strong, titleTokens, length };
  });

  const documentFrequency = new Map<string, number>();
  for (const document of documents) {
    for (const token of document.freqs.keys()) {
      documentFrequency.set(token, (documentFrequency.get(token) ?? 0) + 1);
    }
  }

  const total = documents.length || 1;
  const idf = new Map<string, number>();
  for (const [token, frequency] of documentFrequency) {
    idf.set(token, Math.log(1 + (total - frequency + 0.5) / (frequency + 0.5)));
  }

  const averageLength =
    documents.reduce((sum, document) => sum + document.length, 0) / total || 1;

  return { entries, documents, idf, averageLength };
};

/** Resultados ordenados de mayor a menor relevancia. */
export const search = (query: string, index: SearchIndex, limit = 4): SearchResult[] => {
  const queryTokens = [...new Set(tokenize(query))];
  if (queryTokens.length === 0) return [];

  const results: SearchResult[] = [];

  for (const document of index.documents) {
    let score = 0;
    let matched = 0;
    let strongIdf = 0;

    for (const token of queryTokens) {
      const frequency = document.freqs.get(token);
      if (!frequency) continue;
      matched += 1;
      const idf = index.idf.get(token) ?? 0;
      const normalization =
        frequency + K1 * (1 - B + (B * document.length) / index.averageLength);
      score += idf * ((frequency * (K1 + 1)) / normalization);
      if (document.strong.has(token)) strongIdf = Math.max(strongIdf, idf);
    }

    if (matched === 0) continue;
    results.push({
      entry: index.entries[document.entryIndex],
      score,
      coverage: matched / queryTokens.length,
      strongIdf,
      titleMatch: queryTokens.every((token) => document.titleTokens.has(token)),
    });
  }

  return results.sort((a, b) => b.score - a.score).slice(0, limit);
};

/**
 * `true` cuando el mejor resultado es lo bastante solido como para presentarlo
 * como respuesta oficial.
 */
export const isConfident = (result: SearchResult | undefined): boolean => {
  if (!result || result.score < MIN_SCORE) return false;

  // La consulta es el nombre de un tema del sitio ("zonas francas", "puertos").
  if (result.titleMatch) return true;

  // Un termino especifico en el titulo o las keywords basta ("textiles").
  if (result.strongIdf >= MIN_STRONG_IDF) return true;

  // Sin coincidencia fuerte, la mayoria de la consulta debe estar en la entrada.
  return result.coverage > MIN_COVERAGE;
};
