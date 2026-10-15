# Reporte de verificación — «ProGuatemala-textos-ES-EN.docx» vs. código actual

**Fecha:** 2026-09-18
**Documento revisado:** `Copia de ProGuatemala-textos-ES-EN.docx` (1835 textos, 29 secciones)
**Alcance:** comparación automática de cada texto ES/EN del documento contra el contenido real del código (i18n + archivos de `src/data`, extraídos del runtime real).

---

## 1. Resumen ejecutivo

**El documento fue generado desde una versión *anterior* del sitio, no desde el código actual.** Por eso **no funciona como una lista de correcciones a aplicar**: al comparar, prácticamente todas las diferencias son *deriva de versión* (el código ya cambió después de generar el documento) o **erratas que están en el documento y que el código actual NO tiene**.

Cifras de la comparación:

| Resultado | Cantidad |
|---|---|
| Textos de contenido que **coinciden** (ES y EN) con el código | **1,076** |
| Textos i18n que coinciden por clave | **356** |
| Diferencias reales en i18n (textos que sí existen hoy) | 8 |
| Claves i18n del documento que **ya no existen** en el código | 10 |
| Diferencias en contenido = solo campos de "potencial"/unidades/nombres propios | 83 |
| Contenido del documento **ausente** del código (versión vieja) | 13 |

**Conclusión:** no hay correcciones de inglés en el documento que deban aplicarse al código actual. En los pocos casos donde difieren, **el código suele estar igual o mejor**, y el documento incluye varias erratas. Forzar que el código coincida con el documento sería un **retroceso**.

Aparte, la verificación destapó **un error real de código** (no relacionado con el documento): ver §6.

---

## 2. Evidencia de que el documento está desactualizado

1. **Botones "Agendar reunión / Schedule a meeting":** aparecen en el documento (`home.cta.meeting`, `services.cta.meeting`, `contact.hero.meeting`, `contact.actions.meeting`) pero fueron **eliminados/reformulados en el commit `7c77ad4`**. Hoy el código usa "Habla con un asesor" y botones de correo. La palabra "Agendar" ya no existe en el código.
2. **Preguntas frecuentes:** el documento trae las **4 FAQ genéricas antiguas**; el código actual ya tiene las **10 FAQ oficiales** (reemplazadas en la sesión anterior).
3. **Equipo:** el documento incluye a "Daniela Hurtarte" con su bio; el roster actual (`src/data/about/team.ts`) es distinto (Evelyn Córdova, Beatriz Sánchez, Ingrid Chea, …) y no la incluye.
4. **Etiquetas de "potencial":** el documento las trae escritas a mano en inglés y con erratas; el código las refactorizó a claves i18n (§5).

---

## 3. Diferencias en la sección i18n (textos que SÍ existen hoy)

| Clave | Código actual (EN) | Documento (EN) | Valoración |
|---|---|---|---|
| `nav.contact` | Contact | Contact Us | Estilístico. El código se acortó a "Contact" después del documento. |
| `common.contact` | Contact | Contact Us | Igual que arriba. |
| `why.stats.title` | Guatemala by the Numbers | Guatemala by Numbers | **El código es mejor inglés.** "by the Numbers" es la expresión correcta. |
| `why.comparison.title` | Guatemala vs. the Region | Guatemala **vrs.** the Region | **El documento tiene error:** "vrs." no es una abreviatura válida; lo correcto es "vs." |
| `sectorModal.revenue` | 2024 Revenue | 2024 Income | Criterio de traducción. "Revenue" (ingresos por ventas) suele ser más preciso que "Income". |
| `why.map.infra.hint` | Select one or more icons to overlay layers… / Selecciona uno o más iconos… | Choose a layer to view… / Elige una capa… | El texto del código refleja el **mapa multicapa nuevo**; el del documento describe el comportamiento viejo (una sola capa). |
| `sectors.hero.title` | Strategic | *(celda EN del doc dice "Sectores")* | Fila **descuadrada** en el documento; ignorar. El sitio renderiza "Strategic Sectors" correctamente. |
| `sectors.hero.highlight` | Sectors | *(celda EN del doc dice "Strategic")* | Igual que arriba; ignorar. |

> Ninguna de estas requiere cambio. En 3 casos el código es mejor o correcto; en 2 es estilístico/criterio; en 2 es deriva de versión; 2 son ruido del documento.

---

## 4. Claves i18n del documento que ya no existen en el código (deriva de versión)

Estas 10 aparecen en el documento pero no en el código actual (con esa clave/estructura):

| Clave (documento) | ES | Estado en código actual |
|---|---|---|
| `home.cta.meeting` | Agendar reunión | Botón eliminado (commit 7c77ad4) |
| `services.cta.meeting` | Agendar reunión | Botón eliminado |
| `contact.hero.meeting` | Agendar reunión | Botón eliminado |
| `contact.actions.meeting` | Agendar una reunión | Botón eliminado |
| `about.president.badge` | Mensaje del Presidente | No existe esa clave hoy |
| `why.map.layerAlt` | Mapa de Guatemala: | No existe (mapa reestructurado) |
| `why.comparison.indicator` | Indicador | La comparación regional se maneja en `ComparisionSection.tsx`, con otra estructura |
| `why.comparison.guatemala` | Guatemala | Igual |
| `why.comparison.wageNote` | *Los salarios indicados son referenciales… | Igual (la nota no está como clave i18n) |
| `why.comparison.source` | Fuente: Banco de Guatemala y Consejos de Salarios Mínimos Regionales | Igual |

> Nada que "corregir": son textos de una versión previa. Si se quiere conservar la nota de salarios y la fuente de la tabla de comparación, hay que revisarlo aparte contra `ComparisionSection.tsx`.

---

## 5. Secciones de contenido (`src/data`)

- **1,076 textos coinciden** exactamente (ES y EN) entre documento y código. ✅
- Las **83 diferencias** restantes son **todas** de tres tipos, ninguna es prosa a corregir:
  - **Campos de "potencial"** (la gran mayoría): el documento trae "Very High / High / Medium" o "High Potential", **con erratas** — `High Potencial`, `Hight Potential`, `HIgh`. El código guarda estos valores en español (`'Muy Alto'`, `'Alto'`, `'Medio'`, `'Potencial Muy Alto'`) y los traduce con claves i18n (`sectorDetail.potential.veryHigh` = "Very High Potential", `…high` = "High Potential", `…medium` = "Medium Potential"). Es decir, **la página de detalle de sector ya muestra el inglés correcto y sin erratas.** Aplicar el documento reintroduciría los errores.
  - **Unidades:** `suffix` "millones" → el código usa "million" (correcto como unidad invariable); el documento pone "millions" (incorrecto).
  - **Nombre propio:** "Michatoya Pacífico" (código, con tilde) vs "Michatoya Pacifico" (documento, sin tilde). El código conserva la tilde del nombre.
- **13 textos del documento no existen en el código** (deriva de versión): filas de la tabla de comparación regional (indicadores, "República Dominicana"), la bio de un miembro del equipo que ya no está, y las 4 FAQ antiguas ya reemplazadas.

---

## 6. Hallazgo real de código (independiente del documento)

**`src/components/SectorModal.tsx` (línea ~121) muestra las etiquetas de "potencial" en español incluso en modo inglés.**

- El modal renderiza `{opp.potential}` directamente, y ese valor viene del arreglo compartido `potentials` de `src/data/sectorsData.ts`, que está en español (`'Potencial Muy Alto'`, `'Potencial Alto'`, …).
- La página de detalle (`OpportunitiesSection.tsx`) sí lo traduce vía i18n; **el modal no.**
- Efecto: en inglés, las tarjetas de oportunidades del carrusel de sectores muestran "Potencial Muy Alto" en lugar de "Very High Potential".
- El `SectorModal` está en uso (`src/components/SectorsCarousel.tsx:288`).

> Este sí es un arreglo recomendable. Puedo corregirlo mapeando `opp.potential` a las mismas claves i18n que usa `OpportunitiesSection.tsx`, si lo autorizas.

---

## 7. Recomendación

1. **No aplicar el documento en bloque** — introduciría erratas ("vrs.", "High Potencial", "millions", tildes perdidas) y textos viejos (botones "Agendar reunión", FAQ antiguas).
2. Para una revisión de inglés que sí sea aplicable, **regenerar el documento desde el código actual** y que el revisor marque las correcciones ahí, idealmente con **control de cambios o comentarios** (este documento no traía ninguno, por eso hubo que inferir todo por comparación).
3. Si quieres, **corrijo el error real del §6** (SectorModal en inglés).
4. Si hay secciones puntuales que te preocupen, dime cuáles y las reviso una por una contra el documento.
