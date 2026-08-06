import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import {
  MapPin, Users, TrendingUp,
  Download, MessageCircle, Phone, Mail, Globe,
  Award,
  Building,
  Send,
  User,
  X,
} from 'lucide-react';
import FactSheetEs from '../assets/files/FACT SHEET EN ESPAÑOL.pdf';
import GuiaInversionistaEs from '../assets/files/16_07_25 ESPAÑOL-TRIFOLIAR-PaginaWeb (1).pdf';
import PorqueGTImg from '../assets/images/porqueGT.png';
import { supabase } from '../lib/supabase';
import { TableauEmbed } from '../components/layouts/TableauEmbed';

declare global {
  interface Window {
    tableau?: {
      vizManager?: {
        refresh: () => void;
      };
    };
  }
}

const Home: React.FC = () => {
  const { t } = useLanguage();
  const [highlightedAdvantage, setHighlightedAdvantage] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      company: '',
      interest: '',
      message: ''
    });
  const { language } = useLanguage();
  
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

  const competitiveAdvantageHotspots = [
    { id: 'escalabilidad', label: 'Escalabilidad', top: '72%', left: '12%', targetId: 'advantage-macroeconomia-robusta' },
    { id: 'conectividad', label: 'Conectividad', top: '27%', left: '31%', targetId: 'advantage-ubicacion-estrategica' },
    { id: 'talento', label: 'Talento', top: '70%', left: '50%', targetId: 'advantage-talento-joven-y-calificado' },
    { id: 'energia-limpia', label: 'Energía limpia', top: '27%', left: '68%', targetId: 'advantage-energia-renovable-y-confiable' },
    { id: 'incentivos', label: 'Incentivos', top: '70%', left: '87%', targetId: 'advantage-regimenes-especiales-e-incentivos-fiscales' }
  ];

  const handleHotspotClick = (targetId: string) => {
    setHighlightedAdvantage(targetId);
    window.setTimeout(() => {
      setHighlightedAdvantage((current) => current === targetId ? null : current);
    }, 1000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      setIsSubmitting(true);
      setError(null);
  
      try {
        const { error: submitError } = await supabase
          .from('contact_submissions')
          .insert([
            {
              name: formData.name,
              email: formData.email,
              phone: formData.phone || null,
              company: formData.company || null,
              subject: formData.interest,
              message: formData.message,
              language: language,
              status: 'new'
            }
          ]);
  
        if (submitError) {
          throw submitError;
        }
  
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          interest: '',
          message: ''
        });
      } catch (err) {
        console.error('Error submitting form:', err);
        setError('Hubo un error al enviar el formulario. Por favor, intenta de nuevo o contáctanos directamente.');
      } finally {
        setIsSubmitting(false);
      }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
          ...prev,
          [name]: value
        }));
      };

    const interestOptions = [
      'Agroindustria',
      'Manufactura Liviana',
      'Servicios Globales',
      'Energías Renovables',
      'Turismo Sostenible',
      'Otro'
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
                
                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="border border-white text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer"
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
                </button>

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
              <div className="relative w-full max-w-3xl">
                <img
                  src={PorqueGTImg}
                  alt="Por qué elegir Guatemala"
                  className="w-full rounded-2xl shadow-lg"
                />
                {competitiveAdvantageHotspots.map((hotspot) => (
                  <a
                    key={hotspot.id}
                    href={`#${hotspot.targetId}`}
                    aria-label={hotspot.label}
                    title={hotspot.label}
                    className="group absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded-full focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
                    style={{ top: hotspot.top, left: hotspot.left }}
                    onClick={() => handleHotspotClick(hotspot.targetId)}
                  >
                    <span className="block h-20 w-20 rounded-full bg-transparent md:h-24 md:w-24" />
                    <span className="pointer-events-none absolute left-1/2 top-0 w-max max-w-[220px] -translate-x-1/2 -translate-y-[118%] rounded-2xl border border-blue-100 bg-white/95 px-4 py-3 text-center shadow-[0_18px_45px_rgba(2,16,73,0.18)] backdrop-blur-md opacity-0 transition-all duration-300 group-hover:-translate-y-[128%] group-hover:opacity-100 group-focus-visible:-translate-y-[128%] group-focus-visible:opacity-100">
                      <span className="block text-base font-bold text-[#021049] md:text-lg">
                        {hotspot.label}
                      </span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guatemalaAdvantages.map((advantage, index) => {
              const Icon = advantage.icon;
              const normalizedId = `advantage-${advantage.title
                .toLowerCase()
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '')}`;

              return (
                <motion.div
                  key={index}
                  id={normalizedId}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative scroll-mt-24 rounded-2xl p-8 border border-white/50 backdrop-blur-sm group overflow-hidden transform transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                    highlightedAdvantage === normalizedId
                      ? `${advantage.bgColor} shadow-[0_0_0_4px_rgba(15,92,225,0.18),0_0_38px_rgba(15,92,225,0.35)]`
                      : `${advantage.bgColor} shadow-xl hover:shadow-2xl`
                  }`}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-10">
                    <div className={`w-full h-full ${advantage.color} rounded-full blur-2xl transform translate-x-8 -translate-y-8`}></div>
                  </div>
                  
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
                  
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{advantage.title}</h3>
                    <p className="text-gray-700 mb-6 leading-relaxed text-base">{advantage.description}</p>
                    
                    <ul className="space-y-3">
                      {advantage.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-support-500 rounded-full mr-3 mt-2 flex-shrink-0 shadow-sm"></div>
                          <span className="text-gray-700 text-sm font-medium leading-relaxed">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
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
            <div className="rounded-2xl p-8 shadow-xl border border-gray-100 bg-white">
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
                  className="text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center border-2 hover:brightness-110"
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

      {/* Interactive Map Section */}
      <section className="py-16 bg-white">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
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
            className="bg-white rounded-3xl shadow-2xl overflow-hidden w-full"
          >
            <div className="p-6 text-white" style={{ background: '#021049' }}>
              <h3 className="text-xl font-semibold">Dashboard de Inversión Extranjera Directa</h3>
              <p className="text-blue-100">Explora datos actualizados sobre IED y oportunidades de inversión en Guatemala</p>
            </div>
            <div className="p-4 md:p-6 w-full">
              {/* Contenedor fluido sin restricciones flex innecesarias */}
              <div className="bg-gray-100 rounded-xl overflow-hidden min-h-[650px] w-full">
                <TableauEmbed 
                  vizName="Tablero_IED_ProGuatemala/Historia1"
                  aspectRatio={0.65}
                  staticImageUrl="https://public.tableau.com/static/images/Ta/Tablero_IED_ProGuatemala/Historia1/1.png"
                />
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

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm overflow-y-auto">
            {/* Cierre al hacer clic fuera del modal (Backdrop) */}
            <div 
              className="fixed inset-0" 
              onClick={() => setIsModalOpen(false)} 
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl max-w-2xl w-full relative z-10 max-h-[90vh] overflow-y-auto my-auto"
            >
              {/* Botón de cerrar */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-2 rounded-lg hover:bg-gray-100"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6" />
              </button>

              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                Nosotros te contactamos
              </h2>
              <p className="text-gray-600 mb-8">
                Completa el formulario y uno de nuestros especialistas se comunicará contigo 
                para brindarte información personalizada.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <p className="text-red-800 text-sm">{error}</p>
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tu nombre"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Correo electrónico *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="tu@email.com"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+502 XXXX-XXXX"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Nombre de tu empresa"
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sector de interés *
                  </label>
                  <select
                    name="interest"
                    required
                    value={formData.interest}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    disabled={isSubmitting}
                  >
                    <option value="">Selecciona un sector</option>
                    {interestOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                    placeholder="Cuéntanos sobre tu proyecto de inversión, expectativas, timeline, o cualquier pregunta específica que tengas..."
                    disabled={isSubmitting}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-lg transition-colors duration-200 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </button>
                
                <p className="text-sm text-gray-500 text-center">
                  * Campos obligatorios. Nosotros te contactamos en 24 horas hábiles.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;