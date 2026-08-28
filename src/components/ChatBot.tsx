import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { buildSearchIndex, isConfident, search, type SearchIndex } from '@/lib/chat/search';
import type { KnowledgeEntry } from '@/lib/chat/types';

/**
 * Asistente del sitio. Responde unicamente con contenido oficial publicado en
 * ProGuatemala (ver `src/lib/chat/knowledgeBase.ts`): busca el tema mas
 * parecido a la consulta y, si no encuentra nada con suficiente confianza,
 * lo dice y deriva con un asesor en lugar de improvisar una respuesta.
 */

interface Suggestion {
  id: string;
  title: string;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  /** Ruta interna para ampliar la informacion de la respuesta. */
  link?: string;
  /** Temas relacionados que el usuario puede abrir con un clic. */
  suggestions?: Suggestion[];
}

const UI_TEXT = {
  es: {
    assistant: 'Asistente Virtual',
    tagline: 'Responde con información del sitio',
    welcome:
      '¡Hola! Soy el asistente de ProGuatemala. Respondo con la información oficial publicada en este sitio: sectores, incentivos, parques, cifras del país y nuestros servicios.\n\n¿Sobre qué tema quieres saber?',
    disclaimer:
      'Si necesitas un dato que no esté en el sitio, con gusto te conecto con un asesor.',
    placeholder: 'Escribe tu pregunta...',
    loading: 'Preparando la información del sitio...',
    seeMore: 'Ver más en el sitio',
    related: 'Temas relacionados:',
    greeting:
      '¡Hola! Puedo darte información sobre los sectores estratégicos, los incentivos fiscales, los parques industriales, las cifras de Guatemala y los servicios de ProGuatemala. ¿Qué te interesa?',
    thanks: '¡Con gusto! Si necesitas algo más, aquí estoy.',
    human:
      'Con gusto te conecto con nuestro equipo:\n\n• Correo: proguatemala@mineco.gob.gt\n• Teléfono: +502 2412-0200 ext 3500\n• Horario: lunes a viernes de 8:00 a 17:00\n\nTambién puedes dejarnos tus datos en el formulario de contacto y te respondemos en 24 horas hábiles.',
    notFound:
      'No encontré esa información en el sitio, así que prefiero no darte un dato equivocado.\n\nUn asesor de ProGuatemala puede resolverlo directamente: proguatemala@mineco.gob.gt o +502 2412-0200 ext 3500.\n\nMientras tanto, quizá te sirva alguno de estos temas:',
    call: 'Llamar',
    email: 'Email',
    contact: 'Contacto',
  },
  en: {
    assistant: 'Virtual Assistant',
    tagline: 'Answers using site content',
    welcome:
      "Hello! I'm the ProGuatemala assistant. I answer using the official information published on this site: sectors, incentives, industrial parks, country figures and our services.\n\nWhat would you like to know about?",
    disclaimer: "If you need something that isn't on the site, I can connect you with an advisor.",
    placeholder: 'Type your question...',
    loading: 'Loading site information...',
    seeMore: 'See more on the site',
    related: 'Related topics:',
    greeting:
      'Hello! I can tell you about the strategic sectors, tax incentives, industrial parks, Guatemala figures and ProGuatemala services. What are you interested in?',
    thanks: "You're welcome! I'm here if you need anything else.",
    human:
      'Happy to connect you with our team:\n\n• Email: proguatemala@mineco.gob.gt\n• Phone: +502 2412-0200 ext. 3500\n• Hours: Monday to Friday, 8:00 AM to 5:00 PM\n\nYou can also leave your details in the contact form and we will reply within 24 business hours.',
    notFound:
      "I couldn't find that on the site, and I'd rather not give you an inaccurate answer.\n\nA ProGuatemala advisor can help you directly: proguatemala@mineco.gob.gt or +502 2412-0200 ext. 3500.\n\nIn the meantime, one of these topics may help:",
    call: 'Call',
    email: 'Email',
    contact: 'Contact',
  },
} as const;

/** Temas de arranque; sus ids son estables en la base de conocimiento. */
const STARTER_TOPICS = [
  'sectors-overview',
  'why-guatemala',
  'application-process',
  'parks-overview',
  'country-figures',
  'services-overview',
  'contact',
];

const GREETING_PATTERN = /^(hola|buenas|buenos dias|buenas tardes|buenas noches|hi|hey|hello|good morning|good afternoon)\b/i;
const THANKS_PATTERN = /\b(gracias|muchas gracias|thank you|thanks)\b/i;
const HUMAN_PATTERN =
  /\b(asesor|asesora|humano|persona|agente|ejecutivo|hablar con|comunicarme|advisor|human|agent|someone|talk to)\b/i;

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [index, setIndex] = useState<SearchIndex | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messageCounter = useRef(0);
  const { language } = useLanguage();
  const text = UI_TEXT[language];

  const nextId = () => {
    messageCounter.current += 1;
    return `m${messageCounter.current}`;
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  /**
   * El indice se arma la primera vez que se abre el chat, no al cargar la
   * pagina: la base de conocimiento se descarga en un chunk aparte para no
   * pesar en la carga inicial del sitio.
   */
  useEffect(() => {
    if (!isOpen) return;
    let cancelled = false;

    import('@/lib/chat/knowledgeBase')
      .then(({ buildKnowledgeBase }) => {
        if (cancelled) return;
        setIndex(buildSearchIndex(buildKnowledgeBase(language)));
      })
      .catch(() => {
        if (!cancelled) setIndex(null);
      });

    return () => {
      cancelled = true;
    };
  }, [isOpen, language]);

  /** Al cambiar de idioma se reinicia la conversacion para no mezclar idiomas. */
  useEffect(() => {
    setMessages([]);
    setIndex(null);
  }, [language]);

  const starterSuggestions = useCallback(
    (currentIndex: SearchIndex | null): Suggestion[] => {
      if (!currentIndex) return [];
      return STARTER_TOPICS.map((id) => currentIndex.entries.find((entry) => entry.id === id))
        .filter((entry): entry is KnowledgeEntry => Boolean(entry))
        .map((entry) => ({ id: entry.id, title: entry.title }));
    },
    [],
  );

  useEffect(() => {
    if (!isOpen) return;
    setMessages((prev) => {
      if (prev.length === 0) {
        return [
          {
            id: nextId(),
            text: text.welcome,
            sender: 'bot',
            timestamp: new Date(),
            suggestions: starterSuggestions(index),
          },
        ];
      }
      // El indice puede llegar despues de abrir el chat: en ese momento se
      // completan los temas sugeridos del mensaje de bienvenida.
      if (prev.length === 1 && index && !prev[0].suggestions?.length) {
        return [{ ...prev[0], suggestions: starterSuggestions(index) }];
      }
      return prev;
    });
  }, [isOpen, index, text.welcome, starterSuggestions]);

  const pushBotMessage = (message: Omit<Message, 'id' | 'sender' | 'timestamp'>) => {
    setIsTyping(true);
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { ...message, id: nextId(), sender: 'bot', timestamp: new Date() },
      ]);
      setIsTyping(false);
    }, 450);
  };

  const answerFromEntry = (entry: KnowledgeEntry, related: Suggestion[] = []) => {
    pushBotMessage({
      text: `${entry.title}\n\n${entry.body}`,
      link: entry.link,
      suggestions: related,
    });
  };

  const answerQuestion = (query: string) => {
    if (GREETING_PATTERN.test(query.trim())) {
      pushBotMessage({ text: text.greeting, suggestions: starterSuggestions(index) });
      return;
    }
    if (HUMAN_PATTERN.test(query)) {
      pushBotMessage({ text: text.human, link: '/contact' });
      return;
    }
    if (THANKS_PATTERN.test(query) && query.trim().split(/\s+/).length <= 3) {
      pushBotMessage({ text: text.thanks });
      return;
    }

    if (!index) {
      pushBotMessage({ text: text.human, link: '/contact' });
      return;
    }

    const results = search(query, index);
    if (!isConfident(results[0])) {
      pushBotMessage({
        text: text.notFound,
        link: '/contact',
        suggestions: starterSuggestions(index).slice(0, 4),
      });
      return;
    }

    const related = results
      .slice(1, 4)
      .filter((result) => result.score > results[0].score * 0.35)
      .map((result) => ({ id: result.entry.id, title: result.entry.title }));

    answerFromEntry(results[0].entry, related);
  };

  const handleSendMessage = (rawText?: string) => {
    const query = (rawText ?? inputText).trim();
    if (!query) return;

    setMessages((prev) => [
      ...prev,
      { id: nextId(), text: query, sender: 'user', timestamp: new Date() },
    ]);
    setInputText('');
    answerQuestion(query);
  };

  /** Un tema elegido con un clic se responde directo, sin volver a buscarlo. */
  const handleSuggestion = (suggestion: Suggestion) => {
    setMessages((prev) => [
      ...prev,
      { id: nextId(), text: suggestion.title, sender: 'user', timestamp: new Date() },
    ]);

    const entry = index?.entries.find((item) => item.id === suggestion.id);
    if (entry) {
      answerFromEntry(entry);
      return;
    }
    answerQuestion(suggestion.title);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        aria-label={text.assistant}
        className={`fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-[26rem] lg:w-[32rem] h-[40rem] max-h-[calc(100vh-3rem)] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img
                    src="https://www.pronacom.org/wp-content/uploads/2025/01/LOGO_PROGUATEMALA_VA1-e1737253818887-300x120.png"
                    alt="ProGuatemala"
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">ProGuatemala</h3>
                  <p className="text-xs text-blue-100">{text.tagline}</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Cerrar"
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 ${message.sender === 'user' ? 'max-w-[85%] flex-row-reverse space-x-reverse' : 'max-w-[92%]'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>

                      {message.link && (
                        <Link
                          to={message.link}
                          onClick={() => setIsOpen(false)}
                          className="mt-2 inline-flex items-center space-x-1 text-xs font-semibold text-blue-700 hover:text-blue-900"
                        >
                          <span>{text.seeMore}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      )}

                      {message.suggestions && message.suggestions.length > 0 && (
                        <div className="mt-3 pt-2 border-t border-gray-200">
                          <p className="text-xs text-gray-500 mb-2">{text.related}</p>
                          <div className="flex flex-wrap gap-2">
                            {message.suggestions.map((suggestion) => (
                              <button
                                key={suggestion.id}
                                onClick={() => handleSuggestion(suggestion)}
                                className="text-xs bg-blue-50 text-blue-800 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200 text-left"
                              >
                                {suggestion.title}
                              </button>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder={index ? text.placeholder : text.loading}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={() => handleSendMessage()}
                  disabled={!inputText.trim()}
                  aria-label="Enviar"
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {/* Contact Options */}
              <div className="flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:+50224120200"
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Phone className="w-3 h-3" />
                  <span>{text.call}</span>
                </a>
                <a
                  href="mailto:proguatemala@mineco.gob.gt"
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-3 h-3" />
                  <span>{text.email}</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>{text.contact}</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;
