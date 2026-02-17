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
import AgroindustriaImg from '../assets/images/agroindustria.jpg';
import ManufacturaImg from '../assets/images/manufactura.jpg';
import ServiciosGlobalesImg from '../assets/images/serviciosglobales.jpg';
import EnergiasLimpiasImg from '../assets/images/energiaslimpias.jpg';
import TurismoSostenibleImg from '../assets/images/turismo.jpg';
import FactSheetEs from '../assets/files/FACT SHEET EN ESPAÑOL.pdf';

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
          vizElement.style.height = (divElement.offsetWidth * 0.75) + 'px';
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
      icon: MapPin,
      title: 'Ubicación Estratégica',
      description: 'Puerta de entrada natural entre Norte y Sudamérica, con acceso privilegiado a mercados globales',
      details: [
        'Acceso preferencial a 44 países sin aranceles',
        'DR-CAFTA y Acuerdo de Asociación UE-CA',
        'A solo 2 horas de vuelo de Miami',
        'Conexión directa con puertos del Pacífico y Atlántico'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: '44 países'
    },
    {
      icon: Users,
      title: 'Capital Humano Joven',
      description: 'Población joven y dinámica con creciente nivel educativo y habilidades técnicas especializadas',
      details: [
        '60% de la población menor de 30 años',
        '16.8 millones de habitantes',
        'Fuerza laboral bilingüe en crecimiento',
        'Programas de capacitación técnica especializados'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: '60% <30 años'
    },
    {
      icon: TrendingUp,
      title: 'Estabilidad Macroeconómica',
      description: 'Economía sólida con crecimiento sostenido, baja inflación y marco fiscal responsable',
      details: [
        'Crecimiento promedio del PIB: 3.5% anual',
        'PIB de $87.6 mil millones (2023)',
        'Inflación controlada y predecible',
        'Sistema financiero sólido y regulado'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: '3.5% crecimiento'
    },
    {
      icon: Shield,
      title: 'Marco Legal Sólido',
      description: 'Protección jurídica robusta para inversionistas con tratados internacionales y garantías constitucionales',
      details: [
        'Más de 25 tratados de protección de inversiones',
        'Ley de Inversión Extranjera actualizada',
        'Acceso a arbitraje internacional',
        'Garantías constitucionales para inversionistas'
      ],
      color: 'bg-support-600',
      bgColor: 'bg-support-50',
      stats: '25+ tratados'
    },
    {
      icon: Award,
      title: 'Incentivos Competitivos',
      description: 'Régimen de incentivos fiscales y facilidades para maximizar el retorno de inversión',
      details: [
        'Exención del ISR hasta por 10 años',
        'Zonas Francas con beneficios especiales',
        'ZDEEP para energías renovables',
        'Depreciación acelerada de activos'
      ],
      color: 'bg-support-700',
      bgColor: 'bg-support-50',
      stats: '0% ISR 10 años'
    }
  ];

  const sectors = [
    {
      name: 'Agroindustria',
      image: AgroindustriaImg,
      description: 'Aprovecha el clima tropical y la tradición agrícola'
    },
    {
      name: 'Manufactura Liviana',
      image: ManufacturaImg,
      description: 'Textiles, confección y productos especializados'
    },
    {
      name: 'Servicios Globales',
      image: ServiciosGlobalesImg,
      description: 'Call centers, BPO y servicios digitales'
    },
    {
      name: 'Energías Limpias',
      image: EnergiasLimpiasImg,
      description: 'Hidroeléctrica, solar y geotérmica'
    },
    {
      name: 'Turismo Sostenible',
      image: TurismoSostenibleImg,
      description: 'Patrimonio cultural y natural excepcional'
    }
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative text-white py-20 lg:py-32" style={{ background: 'rgb(2, 16, 73)' }}>
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
                <span style={{ color: '#FFDB60' }}>{t('home.hero.highlight')}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                {t('home.hero.subtitle')}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center" style={{ background: '#FFDB60' }} onMouseEnter={(e) => e.currentTarget.style.background = '#FFE68A'} onMouseLeave={(e) => e.currentTarget.style.background = '#FFDB60'}>
                  <Download className="w-5 h-5 mr-2" />
                  {t('home.hero.download')}
                </button>
                <Link
                  to="/contact"
                  className="border border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
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
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                ¿Quieres conocer más detalles?
              </h3>
              <p className="text-gray-600 mb-6">
                Descarga nuestro fact sheet completo con datos actualizados y análisis detallado
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/why-guatemala"
                  className="text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ background: '#021049' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#010D3A'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#021049'}
                >
                  <TrendingUp className="w-5 h-5 mr-2" />
                  Ver análisis completo
                </Link>
                <a
                  href={FactSheetEs}
                  download="FACT SHEET EN ESPAÑOL.pdf"
                  className="text-gray-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center border-2"
                  style={{ background: '#FFDB60', borderColor: '#FFDB60' }}
                  onMouseEnter={(e) => e.currentTarget.style.background = '#FFE68A'}
                  onMouseLeave={(e) => e.currentTarget.style.background = '#FFDB60'}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Descargar fact sheet
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategic Sectors Carousel */}
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
              {t('home.sectors.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('home.sectors.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-support-50 to-support-50 rounded-2xl p-8 md:p-12 mb-16 shadow-xl border border-blue-100"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              <div className="lg:col-span-1 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-support-400 to-support-400 rounded-full blur-2xl opacity-30"></div>
                  <img
                    src="https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg"
                    alt="Presidente de Guatemala"
                    className="relative w-64 h-64 object-cover rounded-full border-8 border-white shadow-2xl"
                  />
                </div>
              </div>
              <div className="lg:col-span-2">
                <div className="mb-6">
                  <div className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                    Mensaje del Presidente
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    Bernardo Arévalo de León
                  </h3>
                  <p className="text-blue-600 font-semibold mb-6">Presidente de la República de Guatemala</p>
                </div>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    "Guatemala es una tierra de oportunidades sin precedentes. Nuestro compromiso es crear un ambiente propicio para la inversión extranjera, basado en la transparencia, el estado de derecho y la seguridad jurídica."
                  </p>
                  <p className="text-lg">
                    "Los invito a descubrir las ventajas competitivas de nuestro país: una ubicación estratégica, una fuerza laboral talentosa y joven, y un mercado dinámico con acceso preferencial a las economías más importantes del mundo."
                  </p>
                  <p className="text-lg font-semibold text-blue-900">
                    "Guatemala les da la bienvenida. Juntos construiremos un futuro de prosperidad compartida."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sectors.map((sector, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={sector.image}
                    alt={sector.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
                  <p className="text-sm text-gray-200 mb-4">{sector.description}</p>
                  <Link
                    to={`/strategic-sectors/${sector.name.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-flex items-center font-semibold"
                    style={{ color: '#FFDB60' }}
                  >
                    {t('home.sectors.learn-more')}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/strategic-sectors"
              className="inline-flex items-center text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
              style={{ background: '#021049' }}
              onMouseEnter={(e) => e.currentTarget.style.background = '#010D3A'}
              onMouseLeave={(e) => e.currentTarget.style.background = '#021049'}
            >
              {t('home.sectors.view-all')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Access Links */}
      <section className="py-16 bg-gray-50">
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
      </section>

      {/* Legal Requirements Checklist */}
      <section id="legal-requirements" className="py-16 bg-gray-50">
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
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
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
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
          >
            <div className="p-4 text-white" style={{ background: '#021049' }}>
              <h3 className="text-lg font-semibold">Dashboard de Inversión Extranjera Directa</h3>
              <p className="text-blue-100 text-sm">Explora datos actualizados sobre IED y oportunidades de inversión en Guatemala</p>
            </div>
            <div className="p-4">
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
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
