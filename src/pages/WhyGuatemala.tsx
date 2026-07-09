import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Users, TrendingUp, Shield, Globe, 
  Download, ArrowRight, BarChart3, Clock, CheckCircle, ChevronLeft, ChevronRight 
} from 'lucide-react';
import interoceanicaImg from '../assets/images/centros_productivos_empresariales/Interoceanica.jpg';
import michatoyaImg from '../assets/images/centros_productivos_empresariales/Michatoya Pacífico.jpg';
import zonaLibreQuetzalImg from '../assets/images/centros_productivos_empresariales/Zona Libre Quetzal.jpg';
import puertasItsmoImg from '../assets/images/centros_productivos_empresariales/Puertas del Istmo.png';
import synergyIndustrialImg from '../assets/images/centros_productivos_empresariales/Synergy Industrial Park.jpg';

import FactSheetEs from '../assets/files/FACT SHEET EN ESPAÑOL.pdf';

const WhyGuatemala: React.FC = () => {
  const [activeModalId, setActiveModalId] = React.useState<string | null>(null);
  const [slideIndexes, setSlideIndexes] = React.useState<Record<string, number>>({});
  const tableauContainerRef = useRef(null);

  const parks = [
    {
      id: 'interoceanica',
      title: 'Interoceánica',
      description: 'Parque industrial con conectividad logística clave entre océanos.',
      highlights: ['Ubicación estratégica', 'Infraestructura moderna', 'Acceso a rutas principales'],
      images: [interoceanicaImg, interoceanicaImg, interoceanicaImg]
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Centro productivo con acceso a corredores del Pacífico.',
      highlights: ['Cercanía a puertos', 'Servicios integrados', 'Zonas de carga'],
      images: [michatoyaImg, michatoyaImg, michatoyaImg]
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description: 'Hub empresarial con servicios para manufactura y distribución.',
      highlights: ['Conectividad regional', 'Espacios flexibles', 'Seguridad 24/7'],
      images: [puertasItsmoImg, puertasItsmoImg, puertasItsmoImg]
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Parque industrial con ecosistema empresarial consolidado.',
      highlights: ['Servicios corporativos', 'Energía confiable', 'Accesos controlados'],
      images: [synergyIndustrialImg, synergyIndustrialImg, synergyIndustrialImg]
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description: 'Zona con incentivos y enfoque en comercio exterior.',
      highlights: ['Régimen especial', 'Logística integrada', 'Proximidad a puerto'],
      images: [zonaLibreQuetzalImg, zonaLibreQuetzalImg, zonaLibreQuetzalImg]
    }
  ];

  const getSlideIndex = (id: string) => slideIndexes[id] || 0;
  const setSlideIndex = (id: string, nextIndex: number) => {
    setSlideIndexes((prev) => ({ ...prev, [id]: nextIndex }));
  };

  const advantages = [
    {
      icon: Users,
      title: 'Talento joven y calificado',
      description: 'Guatemala destaca por su fuerza laboral y por un entorno propicio para la continua capacitación del talento joven.',
      details: [],
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    {
      icon: TrendingUp,
      title: 'Macroeconomía estable',
      description: 'El entorno macroeconómico del país permite una planificación de largo plazo.',
      details: [],
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50'
    },
    {
      icon: Globe,
      title: 'Ubicación estratégica',
      description: 'Aliado estratégico global, ubicado en el corazón logístico de América que conecta con los principales mercados internacionales.',
      details: [],
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50'
    },
    {
      icon: Shield,
      title: 'Regímenes Especiales e Incentivos Fiscales',
      description: 'Guatemala presenta un marco de incentivos atractivo y sólido para la inversión, así como certeza jurídica al inversionista mediante leyes y mecanismos claros.',
      details: [],
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50'
    },
    {
      icon: TrendingUp,
      title: 'Energía renovable y confiable con costos competitivos',
      description: 'Suministro de energía estable y seguro a un costo accesible.',
      details: [],
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    }
  ];

  const statistics = [
    {
      label: 'PIB',
      value: 'US$ 123,310',
      suffix: 'millones',
      badge: '+4.3% Crecimiento 2025',
      subtitle: 'PIB Nominal'
    },
    {
      label: 'POBLACIÓN',
      value: '18',
      suffix: 'millones',
      badge: 'de habitantes',
      subtitle: 'Población total'
    },
    {
      label: 'EXPORTACIÓN DE BIENES',
      value: 'US$ 15,595',
      suffix: 'millones',
      badge: '+7.1% vs año anterior',
      subtitle: '2025'
    },
    {
      label: 'EXPORTACIÓN DE SERVICIOS',
      value: 'US$ 4,888.3',
      suffix: 'millones',
      badge: '+4.8% vs año anterior',
      subtitle: '2025'
    },
    {
      label: 'IED',
      value: 'US$ 1,881.7',
      suffix: 'millones',
      badge: '2025',
      subtitle: 'Inversión Extranjera Directa'
    }
  ];

  useEffect(() => {
    const divElement = tableauContainerRef.current;
    if (!divElement) return;

    const vizElement = divElement.getElementsByTagName('object')[0];
    
    if (vizElement && divElement.offsetWidth) {
      // Ajuste dinámico de dimensiones según el contenedor actual
      vizElement.style.width = '100%';
      vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
    }

    // Carga e inyección del script de Tableau
    const scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    scriptElement.async = true;
    
    if (vizElement && vizElement.parentNode) {
      vizElement.parentNode.insertBefore(scriptElement, vizElement);
    }

    // Limpieza al desmontar para evitar duplicados en el DOM
    return () => {
      if (scriptElement && scriptElement.parentNode) {
        scriptElement.parentNode.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        {/* Hero Slider */}
        <div className="relative h-full">
          {/* Slide 1 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  ¿Por qué <span className="text-yellow-500">Guatemala</span>?
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
                  Descubre las ventajas competitivas que posicionan a Guatemala como 
                  el destino de inversión más atractivo de Centroamérica
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  {/* Botón con el scroll behavior configurado */}
                  <button 
                    onClick={() => document.getElementById('advantages-grid')?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 bg-blue-600 hover:bg-blue-700"
                  >
                    Explorar ventajas
                  </button>
                  <button 
                    onClick={() => document.getElementById('stats-grid')?.scrollIntoView({ behavior: 'smooth' })}
                    className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Ver estadísticas
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="section-premium bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow-premium">
              Guatemala en Números
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Datos clave que demuestran el potencial económico del país
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 p-4 bg-gray-50/50">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6 flex flex-col items-center text-center justify-between min-h-[340px] hover:shadow-md transition-shadow duration-300"
              >
                {/* Icono Contenedor */}
                <div className="bg-[#2563eb] w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm shadow-blue-200">
                  <BarChart3 className="w-7 h-7 text-white" />
                </div>

                {/* Contenido de Texto Principal */}
                <div className="flex-1 flex flex-col justify-center w-full">
                  {/* Etiqueta / Título superior */}
                  <h4 className="text-xs font-extrabold text-gray-900 uppercase tracking-wider mb-3 px-2">
                    {stat.label}
                  </h4>

                  {/* Valor Numérico Grande */}
                  <div className="text-3xl font-bold text-gray-900 tracking-tight leading-tight whitespace-pre-line">
                    {stat.value}
                  </div>
                  
                  {/* Sufijo Dorado ("millones") */}
                  <div className="text-3xl font-bold text-[#b5944a] tracking-tight mt-0.5 mb-4">
                    {stat.suffix}
                  </div>
                </div>

                {/* Badge e Info Inferior */}
                <div className="w-full mt-auto flex flex-col items-center gap-2">
                  {stat.badge && (
                    <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50/80 border border-emerald-100/50 px-3 py-1 rounded-full inline-block">
                      {stat.badge}
                    </span>
                  )}
                  
                  <p className="text-[11px] text-gray-400 font-medium tracking-normal min-h-[16px]">
                    {stat.subtitle || '\u00A0'}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">Fuente: Banco de Guatemala</p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section id="advantages-grid" className="section-premium bg-white scroll-mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-shadow-premium">
              Ventajas Competitivas
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Las razones por las que las empresas globales eligen Guatemala
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="card-premium p-10 hover-lift"
                >
                  <div className="flex items-start space-x-6">
                    <div className={`bg-gradient-to-br ${advantage.color} w-20 h-20 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{advantage.title}</h3>
                      <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                      {advantage.details.length > 0 && (
                        <ul className="space-y-3">
                          {advantage.details.map((detail, detailIndex) => (
                            <li key={detailIndex} className="flex items-center text-gray-700">
                              <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 flex-shrink-0" />
                              {detail}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section id="stats-grid" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado de la Sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ubicación Estratégica
            </h2>
            <p className="text-xl text-gray-600">
              Guatemala: El corazón logístico de las Américas
            </p>
          </motion.div>
          
          {/* Grid Asimétrico (3 columnas en desktop) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            
            {/* Columna Izquierda: Tableau (Ocupa 2 columnas de 3) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hiddenZone border border-gray-100">
                <div className="p-4 bg-support-50 border-b border-gray-100">
                  <h3 className="text-lg font-semibold">Mapa Interactivo de Conectividad</h3>
                  <p className="text-sm text-gray-600">Explora el potencial productivo regional y comercial de Guatemala</p>
                </div>
                <div className="p-4">
                  
                  {/* Bloque de Tableau */}
                  <div 
                    className="tableauPlaceholder" 
                    id="viz1781555972072" 
                    ref={tableauContainerRef} 
                    style={{ position: 'relative' }}
                  >
                    <noscript>
                      <a href="#">
                        <img 
                          alt="Polos de Desarrollo Económico: Potencial Productivo Regional" 
                          src="https://public.tableau.com/static/images/Es/EstadsticasdepartamentosatractivosFinalizado/PolosdeDesarrolloEconmicoPotencialProductivoRegional/1_rss.png" 
                          style={{ border: 'none' }} 
                        />
                      </a>
                    </noscript>
                    
                    <object className="tableauViz" style={{ display: 'none' }}>
                      <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                      <param name="embed_code_version" value="3" />
                      <param name="site_root" value="" />
                      <param name="name" value="EstadsticasdepartamentosatractivosFinalizado/PolosdeDesarrolloEconmicoPotencialProductivoRegional" />
                      <param name="tabs" value="no" />
                      <param name="toolbar" value="yes" />
                      <param name="static_image" value="https://public.tableau.com/static/images/Es/EstadsticasdepartamentosatractivosFinalizado/PolosdeDesarrolloEconmicoPotencialProductivoRegional/1.png" />
                      <param name="animate_transition" value="yes" />
                      <param name="display_static_image" value="yes" />
                      <param name="display_spinner" value="yes" />
                      <param name="display_overlay" value="yes" />
                      <param name="display_count" value="yes" />
                      <param name="language" value="en-US" />
                      <param name="filter" value="publish=yes" />
                    </object>
                  </div>

                </div>
              </div>
            </motion.div>
            
            {/* Columna Derecha: Conectividad Marítima (Ocupa 1 columna de 3) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="lg:col-span-1"
            >
              <div className="bg-support-50 border border-gray-100 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  Conectividad Marítima
                </h3>
                
                <ul className="space-y-6">
                  {/* Puerto Quetzal */}
                  <li className="text-gray-700 bg-white p-4 rounded-xl border border-gray-150/50 shadow-sm">
                    <div className="flex items-center mb-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Puerto Quetzal (Pacífico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 font-medium">
                      Carga: <span className="text-emerald-600 font-bold">17.3 Millones TM</span>
                    </p>
                  </li>
                  
                  {/* Puerto Santo Tomás */}
                  <li className="text-gray-700 bg-white p-4 rounded-xl border border-gray-150/50 shadow-sm">
                    <div className="flex items-center mb-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Puerto Santo Tomás (Atlántico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 font-medium">
                      Carga: <span className="text-emerald-600 font-bold">8.7 Millones TM</span>
                    </p>
                  </li>
                  
                  {/* Puerto Barrios */}
                  <li className="text-gray-700 bg-white p-4 rounded-xl border border-gray-150/50 shadow-sm">
                    <div className="flex items-center mb-1.5">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2 flex-shrink-0" />
                      <span className="font-semibold text-gray-900">Puerto Barrios (Atlántico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6 font-medium">
                      Carga: <span className="text-emerald-600 font-bold">5.6 Millones TM</span>
                    </p>
                  </li>
                </ul>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Centros Productivos y Empresariales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Centros Productivos y Empresariales
            </h2>
            <p className="text-xl text-gray-600">
              Parques industriales con infraestructura y servicios para inversión
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {parks.map((park) => {
              const currentIndex = getSlideIndex(park.id);
              const total = park.images.length;
              return (
                <motion.div
                  key={park.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveModalId(park.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveModalId(park.id); } }}
                  className="text-left bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                >
                  <div className="relative aspect-[4/3] bg-gray-100">
                    <img
                      src={park.images[currentIndex]}
                      alt={park.title}
                      className="w-full h-full object-cover"
                    />
                    {total > 1 && (
                      <>
                        <button
                          type="button"
                          className="absolute top-3 left-3 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            const next = (currentIndex - 1 + total) % total;
                            setSlideIndex(park.id, next);
                          }}
                        >
                          <ChevronLeft className="w-4 h-4" />
                        </button>
                        <button
                          type="button"
                          className="absolute top-3 left-12 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2"
                          onClick={(e) => {
                            e.stopPropagation();
                            const next = (currentIndex + 1) % total;
                            setSlideIndex(park.id, next);
                          }}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{park.title}</h3>
                    <p className="text-sm text-gray-600">{park.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {activeModalId && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4"
          onClick={() => setActiveModalId(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {(() => {
              const park = parks.find((p) => p.id === activeModalId);
              if (!park) return null;
              return (
                <>
                  <div className="relative aspect-[16/9] bg-gray-100">
                    <img
                      src={park.images[0]}
                      alt={park.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{park.title}</h3>
                    <p className="text-gray-700 mb-4">{park.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {park.highlights.map((item) => (
                        <span
                          key={item}
                          className="bg-support-50 text-gray-800 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="p-4 border-t bg-gray-50 flex justify-end">
                    <button
                      className="px-4 py-2 rounded-lg bg-gray-900 text-white hover:bg-gray-800"
                      onClick={() => setActiveModalId(null)}
                    >
                      Cerrar
                    </button>
                  </div>
                </>
              );
            })()}
          </div>
        </div>
      )}

      {/* Comparison Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado de la sección */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Guatemala vs. Región
            </h2>
            <p className="text-xl text-gray-600">
              Comparación de indicadores clave de competitividad (Actualizado 2025)
            </p>
          </motion.div>
          
          {/* Contenedor de la Tabla */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
            <div className="overflow-x-auto">
              {/* Se añade un min-w para asegurar que en móviles se pueda scrollear horizontalmente sin colapsar el texto */}
              <table className="w-full min-w-[900px]">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold tracking-wide">Indicador</th>
                    <th className="px-6 py-4 text-center font-bold bg-blue-700/30">Guatemala</th>
                    <th className="px-6 py-4 text-center font-semibold tracking-wide">Costa Rica</th>
                    <th className="px-6 py-4 text-center font-semibold tracking-wide">El Salvador</th>
                    <th className="px-6 py-4 text-center font-semibold tracking-wide">Honduras</th>
                    <th className="px-6 py-4 text-center font-semibold tracking-wide">Nicaragua</th>
                    <th className="px-6 py-4 text-center font-semibold tracking-wide">República Dominicana</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  
                  {/* FILA: PIB */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/30">
                      PIB 2025 (USD miles de millones)
                    </td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-extrabold bg-emerald-50/20 text-base">
                      $ 123.31
                    </td>
                    <td className="px-6 py-4 text-center">$ 102.90</td>
                    <td className="px-6 py-4 text-center">$ 36.71</td>
                    <td className="px-6 py-4 text-center">$ 39.62</td>
                    <td className="px-6 py-4 text-center">$ 22.24</td>
                    <td className="px-6 py-4 text-center">$ 123.50</td>
                  </tr>

                  {/* FILA: Población */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/30">
                      Población a 2025 (millones)
                    </td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-emerald-50/20">
                      18.0
                    </td>
                    <td className="px-6 py-4 text-center">5.13</td>
                    <td className="px-6 py-4 text-center">6.338</td>
                    <td className="px-6 py-4 text-center">10.83</td>
                    <td className="px-6 py-4 text-center">7.15</td>
                    <td className="px-6 py-4 text-center">11.43</td>
                  </tr>

                  {/* FILA: Salario Mínimo */}
                  <tr className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 font-semibold text-gray-900 bg-gray-50/30">
                      Salario mínimo 2025 (USD/mes)*
                    </td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold bg-emerald-50/20">
                      $518.00
                    </td>
                    <td className="px-6 py-4 text-center">$726.00</td>
                    <td className="px-6 py-4 text-center">$408.80</td>
                    <td className="px-6 py-4 text-center">$357.00</td>
                    <td className="px-6 py-4 text-center">$228.50</td>
                    <td className="px-6 py-4 text-center">$480.51</td>
                  </tr>

                </tbody>
              </table>
            </div>

            {/* Notas al pie de la tabla */}
            <div className="p-5 bg-gray-50 border-t border-gray-100 text-center space-y-1">
              <p className="text-xs text-gray-500">
                *Los salarios indicados son referenciales y pueden variar según el sector económico, el tamaño de la empresa y otros factores.
              </p>
              <p className="text-xs text-gray-400 font-medium">
                Fuente: Banco de Guatemala y Consejos de Salarios Mínimos Regionales
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1464df] to-[#058490] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Título en blanco puro con tracking ajustado */}
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Descarga el Fact Sheet de Guatemala
            </h2>
            
            {/* Párrafo descriptivo legible */}
            <p className="text-lg md:text-xl mb-10 text-white/90 max-w-3xl mx-auto leading-relaxed font-normal">
              Obtén datos detallados, indicadores económicos y toda la información 
              que necesitas para tomar la mejor decisión de inversión.
            </p>
            
            {/* Contenedor de Botones */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Botón Principal: Descarga */}
              <a
                href="https://mineco.gob.gt/files/proguatemala/es/TRIFOLIAR%20PROGUATE%202026.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-white text-[#1464df] hover:bg-gray-50 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center shadow-md text-base"
              >
                <Download className="w-5 h-5 mr-2.5 stroke-[2.5]" />
                Descargar Fact Sheet
              </a>
              
              {/* Botón Secundario: Contacto */}
              <button className="w-full sm:w-auto border border-white/70 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 flex items-center justify-center text-base">
                Habla con un asesor
                <ArrowRight className="w-5 h-5 ml-2.5 stroke-[2]" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      </div>
  );
};

export default WhyGuatemala;
