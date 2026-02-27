import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  MapPin, Users, TrendingUp, Shield,
  Download, MessageCircle, ArrowRight,
  Play, FileText, Phone, Mail, Globe,
  Award, Handshake, Target, CheckCircle, Clock
} from 'lucide-react';
import FactSheetEs from '../assets/files/FACT SHEET EN ESPAÑOL.pdf';
import GuiaInversionistaEs from '../assets/files/16_07_25 ESPAÑOL-TRIFOLIAR-PaginaWeb (1).pdf';
import PorqueGTImg from '../assets/images/porqueGT.png';
import SectorsCarousel from '../components/SectorsCarousel';

const Home: React.FC = () => {
  const { t } = useLanguage();

  // Initialize Tableau visualization after component mounts
  React.useEffect(() => {
    const initTableau = () => {
      const divElement = document.getElementById('viz1757690928347');
      if (divElement && !divElement.querySelector('.tableauViz[style*="display: block"]')) {
        const vizElement = divElement.getElementsByTagName('object')[0];
        if (vizElement) {
          vizElement.style.width = '100%';
          const computedHeight = Math.max(1700, Math.round(divElement.offsetWidth * 0.9));
          vizElement.style.height = `${computedHeight}px`;
          vizElement.style.display = 'block';
          
          // Load Tableau API script if not already loaded
          if (!document.querySelector('script[src*="tableau.com/javascripts/api/viz_v1.js"]')) {
            const scriptElement = document.createElement('script');
            scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
            vizElement.parentNode?.insertBefore(scriptElement, vizElement);
          }
        }
      }
    };

    // Delay initialization to ensure DOM is ready
    const timer = setTimeout(initTableau, 1000);
    return () => clearTimeout(timer);
  }, []);
  
  const guatemalaAdvantages = [
    {
      icon: TrendingUp,
      title: 'Macroeconomía Robusta',
      description: 'Fundamentos sólidos, baja inflación y un marco fiscal responsable que favorece la inversión.',
      details: [
        'Crecimiento sostenido del PIB',
        'Inflación controlada y predecible',
        'Sistema financiero sólido y regulado',
        'Estabilidad cambiaria'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: 'Estabilidad'
    },
    {
      icon: MapPin,
      title: 'Ubicación Estratégica',
      description: 'Puerta de entrada natural entre Norte y Sudamérica, con acceso privilegiado a mercados globales.',
      details: [
        'Acceso preferencial a múltiples mercados',
        'Conexión con puertos del Pacífico y Atlántico',
        'Cercanía a mercados clave',
        'Plataforma logística regional'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: 'Conectividad'
    },
    {
      icon: Users,
      title: 'Talento Joven y Calificado',
      description: 'Población joven y dinámica con creciente nivel educativo y habilidades técnicas especializadas.',
      details: [
        'Fuerza laboral en crecimiento',
        'Capacitación técnica especializada',
        'Bilingüismo en expansión',
        'Alta adaptabilidad'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: 'Talento'
    },
    {
      icon: Globe,
      title: 'Energía Renovable y Confiable',
      description: 'Matriz energética diversificada con alta participación de fuentes renovables.',
      details: [
        'Capacidad hidroeléctrica y solar',
        'Suministro confiable',
        'Oportunidades en energías limpias',
        'Costos competitivos'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: 'Energía limpia'
    },
    {
      icon: Award,
      title: 'Regímenes Especiales e Incentivos Fiscales',
      description: 'Herramientas e incentivos para maximizar el retorno de inversión.',
      details: [
        'Zonas Francas con beneficios',
        'ZDEEP y regímenes especiales',
        'Exenciones y facilidades',
        'Depreciación acelerada de activos'
      ],
      color: 'bg-support-700',
      bgColor: 'bg-support-50',
      stats: 'Incentivos'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32" style={{ background: '#0f5ce1' }}>
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                {t('home.hero.title')}{' '}
                <span style={{ color: '#B7FFFF' }}>{t('home.hero.highlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={GuiaInversionistaEs}
                  download="Guia del Inversionista.pdf"
                  className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  style={{ background: '#FFFFFF' }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  {t('home.hero.download')}
                </a>
                <Link
                  to="/contact"
                  className="border border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                  style={{ borderColor: '#FFFFFF', color: '#FFFFFF' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#FFFFFF';
                    e.currentTarget.style.color = '#021049';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  {t('home.hero.contact')}
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-2xl p-8 border border-white border-opacity-20">
                <div className="aspect-video bg-black/20 rounded-2xl mb-6 relative overflow-hidden">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://drive.google.com/file/d/1RDcFVNev2TS-ST8FKWXRl-qmQ9NAHxJd/preview"
                    title="ProGuatemala Video Institucional"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                    className="rounded-2xl"
                  />
                </div>
                <p className="text-sm text-blue-100 text-center">
                  Video institucional: Descubre por qué Guatemala es tu mejor destino de inversión
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Icon Blocks */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center bg-blue-100 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🇬🇹 Ventajas Competitivas
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              ¿Por qué elegir Guatemala?
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Cinco ventajas únicas que posicionan a Guatemala como el destino de inversión 
              más atractivo y estratégico de Centroamérica
            </p>
            <div className="flex justify-center mb-6">
              <img
                src={PorqueGTImg}
                alt="Por qué elegir Guatemala"
                className="w-full max-w-3xl rounded-2xl shadow-lg"
              />
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guatemalaAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative ${advantage.bgColor} rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 backdrop-blur-sm group overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full ${advantage.color} rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  
                  {/* Icon and Stats */}
                  <div className="relative flex items-start justify-between mb-6">
                    <div className={`${advantage.color} w-20 h-20 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white drop-shadow-lg" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-support-700">
                        {advantage.stats}
                      </div>
                      <div className="text-xs text-gray-500 font-medium">Destacado</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{advantage.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">{advantage.description}</p>
                    
                    {/* Details List */}
                    <ul className="space-y-3">
                      {advantage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-support-500 rounded-full mr-3 mt-2 flex-shrink-0 shadow-sm"></div>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-support-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl"></div>
                </motion.div>
              );
            })}
          </div>
          
          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16"
          >
            <div className="rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Quieres conocer más detalles?
              </h3>
              <p className="text-gray-600 mb-6">
                Descarga nuestro fact sheet completo con datos actualizados y análisis detallado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={FactSheetEs}
                  download="FACT SHEET EN ESPAÑOL.pdf"
                  className="text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center border-2"
                  style={{ background: '#0f5ce1', borderColor: '#0f5ce1' }}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar fact sheet
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mensaje del Presidente */}
      <section className="py-24 bg-white">
        <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ background: '#258CFB' }}
            className=" rounded-2xl p-8 md:p-12 shadow-xl border border-blue-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-support-400 to-support-400 rounded-full blur-2xl opacity-30"></div>
                  <img
                    src="https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg"
                    alt="Presidente de Guatemala"
                    className="relative w-64 h-64 object-contain rounded-full border-8 border-white shadow-2xl bg-white"
                  />
                </div>
                <h3 className="text-3xl font-bold text-white mt-4">
                  Bernardo Arévalo de León
                </h3>
                <p className="text-white font-semibold">Presidente de la República de Guatemala</p>
              </div>
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="inline-block bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Mensaje del Presidente
                  </div>
                </div>
                <div className="space-y-4 text-white leading-relaxed">
                  <p className="text-lg">
                    Estimados inversores, en nombre del pueblo de Guatemala, me complace darles una cálida bienvenida durante su proceso de explorar las oportunidades de inversión en nuestro país. Guatemala se presenta como un faro de oportunidades en Centroamérica, con una economía estable, una ubicación estratégica y un entorno empresarial favorable. A medida que navegan por el panorama de posibilidades de inversión, deseamos mostrarles las innumerables razones por las que Guatemala debería estar al frente de sus consideraciones.
                  </p>
                  <p className="text-lg">
                    El compromiso de nuestra nación con la estabilidad económica y el crecimiento es inquebrantable. Con un marco legal sólido, regulaciones transparentes y un enfoque proactivo para la facilitación de inversiones, Guatemala ofrece un entorno seguro y propicio para que las empresas prosperen.
                  </p>
                  <p className="text-lg">
                    Nuestra ubicación estratégica, la cual une América del Norte y América del Sur, presenta un acceso privilegiado a mercados clave, lo cual facilita el comercio y la conectividad, ya sea que busquen establecer instalaciones de manufactura, explorar sectores como alimentos y bebidas, energía renovable, o aprovechar nuestro ecosistema de turismo y servicios de salud. Guatemala ofrece una gran cantidad de oportunidades.
                  </p>
                  <p className="text-lg">
                    Más allá del panorama empresarial, el rico patrimonio cultural, los impresionantes paisajes y la cálida hospitalidad, el país ofrece una experiencia de vida única. Nuestra nación se está moviendo rápidamente hacia una sociedad moderna, diversa y más inclusiva, donde los inversionistas y sus familias puedan prosperar.
                  </p>
                  <p className="text-lg">
                    Al embarcarse en este viaje, tengan la seguridad de que nuestra Agencia de Atracción de Inversión Nacional y Extranjera está aquí para apoyarlos y guiarlos en cada paso del camino. Nuestro dedicado equipo de expertos está listo para brindar asistencia personalizada, facilitar las conexiones y sortear cualquier desafío que pueda surgir, asegurando que su recorrido de inversión sea lo más fluido y exitoso posible.
                  </p>
                  <p className="text-lg">
                    Finalmente, extiendo mi más sincero agradecimiento por considerar a Guatemala como su destino de inversión. Estamos deseosos de asociarnos con ustedes para lograr sus objetivos y contribuir a la prosperidad mutua de nuestras naciones.
                  </p>
                  <p className="text-lg font-semibold text-blue-900">
                    Dr. Bernardo Arévalo
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <SectorsCarousel showAllLink allLinkLabel={t('home.sectors.view-all')} />

      {/* Quick Access Links */}
      {/* <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {t('home.access.title')}
            </h2>
            <p className="text-xl text-gray-600">
              {t('home.access.subtitle')}
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.access.resources.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.access.resources.desc')}
              </p>
              <Link
                to="/resources"
                className="inline-flex items-center text-support-500 hover:text-teal-700 font-semibold"
              >
                {t('home.access.resources.action')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Requisitos Legales</h3>
              <p className="text-gray-600 mb-6">
                Conoce los pasos y tiempos para establecer operaciones en Guatemala
              </p>
              <a
                href="#legal-requirements"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
              >
                Ver requisitos
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{t('home.access.contact.title')}</h3>
              <p className="text-gray-600 mb-6">
                {t('home.access.contact.desc')}
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center text-yellow-600 hover:text-yellow-700 font-semibold"
              >
                {t('home.access.contact.action')}
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Legal Requirements Checklist */}
      {/* <section id="legal-requirements" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Requisitos Legales: Establecimiento de Operaciones
            </h2>
            <p className="text-xl text-gray-600">
              Pasos necesarios y tiempos estimados para iniciar operaciones en Guatemala
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="bg-blue-600 text-white p-6">
                <h3 className="text-xl font-bold">Tiempo total estimado: 60-90 días</h3>
                <p className="text-blue-100">Muchos procesos pueden realizarse en paralelo para acelerar los tiempos</p>
              </div>

              <div className="p-6 space-y-4">
                {[
                  { title: 'Registro de empresa', time: '15-20 días', status: 'required' },
                  { title: 'Permisos municipales', time: '10-15 días', status: 'required' },
                  { title: 'Inscripción tributaria', time: '5-7 días', status: 'required' },
                  { title: 'Permisos sectoriales', time: '30-45 días', status: 'conditional' },
                  { title: 'Registro laboral', time: '7-10 días', status: 'required' },
                  { title: 'Inicio de operaciones', time: '60-90 días total', status: 'complete' }
                ].map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white bg-support-500`}>
                        {step.status === 'complete' ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <span className="font-bold text-sm">{index + 1}</span>
                        )}
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{step.title}</div>
                        <div className="text-sm text-gray-600">
                          {step.status === 'required' ? 'Obligatorio' :
                           step.status === 'conditional' ? 'Según el sector' : 'Listo para operar'}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-medium text-gray-900">{step.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Guatemala: Conectividad Global
            </h2>
            <p className="text-xl text-gray-600">
              Dashboard interactivo de inversión extranjera directa en Guatemala
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="p-6 text-white" style={{ background: '#021049' }}>
              <h3 className="text-xl font-semibold">Dashboard de Inversión Extranjera Directa</h3>
              <p className="text-blue-100">Explora datos actualizados sobre IED y oportunidades de inversión en Guatemala</p>
            </div>
            <div className="p-6">
              <div className="bg-gray-100 rounded-xl overflow-hidden min-h-[900px]">
                <div 
                  className="tableauPlaceholder w-full h-full" 
                  id="viz1757690928347" 
                  style={{ position: 'relative' }}
                >
                  <noscript>
                    <a href="#">
                      <img 
                        alt="Dashboard IED ProGuatemala" 
                        src="https://public.tableau.com/static/images/Ta/Tablero_IED_ProGuatemala/Historia1/1_rss.png" 
                        style={{ border: 'none' }} 
                      />
                    </a>
                  </noscript>
                  <object className="tableauViz" style={{ display: 'none' }}>
                    <param name="host_url" value="https%3A%2F%2Fpublic.tableau.com%2F" />
                    <param name="embed_code_version" value="3" />
                    <param name="site_root" value="" />
                    <param name="name" value="Tablero_IED_ProGuatemala&#47;Historia1" />
                    <param name="tabs" value="no" />
                    <param name="toolbar" value="yes" />
                    <param name="static_image" value="https://public.tableau.com/static/images/Ta/Tablero_IED_ProGuatemala/Historia1/1.png" />
                    <param name="animate_transition" value="yes" />
                    <param name="display_static_image" value="yes" />
                    <param name="display_spinner" value="yes" />
                    <param name="display_overlay" value="yes" />
                    <param name="display_count" value="yes" />
                    <param name="language" value="es-ES" />
                  </object>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white" style={{ background: '#021049' }}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.cta.title')}
            </h2>
            <p className="text-xl mb-8 text-white">
              {t('home.cta.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                style={{ background: '#FFDB60' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#FFE68A'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#FFDB60'}
              >
                <Mail className="w-5 h-5 mr-2" />
                {t('home.cta.info')}
              </button>
              <Link
                to="/contact"
                className="border text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
                style={{ borderColor: '#FFDB60', color: '#FFDB60' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#FFDB60';
                  e.currentTarget.style.color = '#021049';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#FFDB60';
                }}
              >
                <Phone className="w-5 h-5 mr-2" />
                {t('home.cta.meeting')}
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
