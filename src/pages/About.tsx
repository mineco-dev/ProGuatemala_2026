import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { 
  Target, Eye, Users, Award,
  Mail, User, Lightbulb, Shield,
  Compass,
  ShieldCheck,
  Sparkles,
  Handshake,
  LineChart,
  RefreshCw,
  CheckCircle,
  HeartHandshake,
  Plane,
  TrendingUp,
  Globe
} from 'lucide-react';
import aboutImg from '../assets/images/portadas/4. ACERCA DE PROGUATEMALA.jpg';
import promoInvImage from '../assets/images/promoinv.png';
import ministraImg from '../assets/images/autoridades/Ministra.jpeg';

const About: React.FC = () => {

  const [activeTab, setActiveTab] = useState(0);

  const VALUE_THEMES = [
  {
    // 1. EXCELENCIA - NARANJA / ÁMBAR
    cardBg: 'bg-amber-50/90 border-amber-200/70',
    iconBg: 'bg-gradient-to-br from-amber-400 to-orange-500',
    shadowColor: 'hover:shadow-amber-100',
    styleCard: { backgroundColor: '#fffdf2', borderColor: '#fef3c7' },
    styleIcon: { background: 'linear-gradient(135deg, #fbbf24, #f97316)' }
  },
  {
    // 2. TRANSPARENCIA - VERDE PRONUNCIADO
    cardBg: 'bg-emerald-50/90 border-emerald-200/70',
    iconBg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
    shadowColor: 'hover:shadow-emerald-100',
    styleCard: { backgroundColor: '#f0fdf4', borderColor: '#a7f3d0' },
    styleIcon: { background: 'linear-gradient(135deg, #10b981, #0d785f)' }
  },
  {
    // 3. COLABORACIÓN - AZUL
    cardBg: 'bg-blue-50/90 border-blue-200/70',
    iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    shadowColor: 'hover:shadow-blue-100',
    styleCard: { backgroundColor: '#eff6ff', borderColor: '#bfdbfe' },
    styleIcon: { background: 'linear-gradient(135deg, #3b82f6, #4f46e5)' }
  },
  {
    // 4. INNOVACIÓN - MORADO
    cardBg: 'bg-purple-50/90 border-purple-200/70',
    iconBg: 'bg-gradient-to-br from-purple-500 to-violet-600',
    shadowColor: 'hover:shadow-purple-100',
    styleCard: { backgroundColor: '#faf5ff', borderColor: '#e9d5ff' },
    styleIcon: { background: 'linear-gradient(135deg, #a855f7, #7c3aed)' }
  }
];

  const services = [
    {
      id: 'promocion',
      title: 'PROMOCIÓN DE INVERSIONES',
      icon: Target,
      description: 'Se brinda orientación personalizada en cada etapa del proceso de inversión, incluyendo la organización de reuniones con actores clave del sector público y privado para avanzar en los proyectos de inversión. Se brinda apoyo a las empresas extranjeras en el establecimiento de operaciones, acompañamiento en procedimientos regulatorios, legales y administrativos.',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'from-blue-50 to-cyan-50',
      image: promoInvImage,
      features: [
        'Asesoría profesional y gratuita.',
        'Información estratégica para la toma de decisiones según requerimiento del inversionista.',
        'Elaboración y acompañamiento de agendas de negocios con actores clave del sector público y privado.',
        'Servicios especializados de softlanding para facilitar procesos legales y administrativos de establecimiento de empresas extranjeras en el país.',
        'Atención uno a uno, a requerimientos específicos de cada empresa y sector.'
      ],
      cta: 'Explorar oportunidades'
    },
    {
      id: 'softlanding',
      title: 'Softlanding',
      icon: Plane,
      description: 'Acompañamos a inversionistas extranjeros durante su proceso de establecimiento en Guatemala, facilitando el cumplimiento de trámites, permisos y licencias necesarios para la operación de sus empresas. Nuestro servicio especializado brinda atención integral, asegurando un proceso ágil y transparente.',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50',
      features: [
        'Asesoría especializada durante el proceso de radicación en el país',
        'Acompañamiento en trámites legales, permisos y licencias',
        'Orientación para el establecimiento y operación de empresas extranjeras',
        'Facilitación de contactos institucionales clave'
      ],
      cta: 'Solicitar acompañamiento'
    },
    {
      id: 'inteligencia',
      title: 'Inteligencia de Inversión',
      icon: TrendingUp,
      description: 'Identificamos oportunidades de inversión a partir del análisis de datos clave como tendencias de mercado, sectores estratégicos, flujos de inversión extranjera y dinámicas macroeconómicas. Nuestro equipo juega un papel esencial en la detección de empresas con alto potencial de inversión, generando materiales y herramientas informativas que respaldan la toma de decisiones de los inversionistas y fortalecen las gestiones de promoción.',
      color: 'from-indigo-500 to-blue-600',
      bgColor: 'from-indigo-50 to-blue-50',
      features: [
        'Análisis de tendencias de mercado y dinámicas macroeconómicas',
        'Perfiles sectoriales con oportunidades de inversión en industrias estratégicas',
        'Infografías y material visual que resumen datos clave de manera ágil',
        'Información estratégica de país y a nivel departamental que muestran ventajas competitivas',
        'Información especializada a solicitud del inversionista, adaptada a sus necesidades'
      ],
      cta: 'Solicitar análisis'
    },
    {
      id: 'aftercare',
      title: 'Aftercare',
      icon: HeartHandshake,
      description: 'En ProGuatemala acompañamos a las empresas ya establecidas en el país, brindando asesoría personalizada y gratuita para que su operación sea eficiente y sostenible en el tiempo. Conectamos a las compañías con actores clave del sector público y privado, actualizamos información sobre regulaciones y facilitamos procesos de expansión y reinversión en Guatemala.',
      color: 'from-orange-500 to-amber-600',
      bgColor: 'from-orange-50 to-amber-50',
      features: [
        'Asesoría y acompañamiento continuo para empresas ya establecidas',
        'Vinculación con actores estratégicos del sector público y privado, para resolución de problemas',
        'Actualización en regulaciones y normativas relevantes',
        'Identificación y resolución de retos operativos',
        'Apoyo en procesos administrativos y de expansión',
        'Facilitación de contactos para reinversión y crecimiento en Guatemala'
      ],
      cta: 'Solicitar apoyo'
    }
  ];

  const currentService = services[activeTab];
  const CurrentIcon = currentService?.icon;

  const values = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso con los más altos estándares de calidad en todos nuestros servicios',
      color: 'from-amber-400 to-orange-500',
      bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
      iconColor: 'text-amber-600',
      shadowColor: 'shadow-amber-200'
    },
    {
      icon: Shield,
      title: 'Transparencia',
      description: 'Actuamos con honestidad e integridad en cada interacción con inversionistas',
      color: 'from-emerald-400 to-teal-500',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
      iconColor: 'text-emerald-600',
      shadowColor: 'shadow-emerald-200'
    },
    {
      icon: Users,
      title: 'Colaboración',
      description: 'Trabajamos en equipo con instituciones públicas y privadas para el éxito común',
      color: 'from-blue-400 to-indigo-500',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconColor: 'text-blue-600',
      shadowColor: 'shadow-blue-200'
    },
    {
      icon: Lightbulb,
      title: 'Innovación',
      description: 'Buscamos continuamente mejores formas de servir a los inversionistas',
      color: 'from-violet-400 to-purple-500',
      bgColor: 'bg-gradient-to-br from-violet-50 to-purple-50',
      iconColor: 'text-violet-600',
      shadowColor: 'shadow-violet-200'
    }
  ];

  const authorities = [
    {
      name: 'Gabriela García',
      position: 'Ministra de Economía',
      bio: 'Experta con más de 25 años de experiencia en desarrollo económico a nivel local y regional. Posee una Maestría en Administración de Proyectos de Desarrollo y una Licenciatura en Relaciones Internacionales de la American University en Washington D.C. Su trayectoria incluye liderazgo en la formulación de programas para fomentar el comercio y atraer inversión extranjera directa, así como roles destacados en organizaciones como USAID.',
      email: 'ministra@mineco.gob.gt',
      image: ministraImg
    }
  ];

  const team = [
    {
      name: 'Evelyn Córdova',
      position: 'Asesora Atracción de Inversión Extranjera - Temas estratégicos',
      bio: 'Arquitecta con Maestría en Gestión para la Reducción de Riesgo, egresada de la Universidad de San Carlos de Guatemala. Estudios de posgrado en Ambiente y Sostenibilidad, Ciencia Política, Planificación Estratégica y especialización en Dirección de Proyectos Complejos de Cambridge/Judge Business School. Coordinó el Diseño de las Estrategias Territoriales de Competitividad, Planificación de Corredores Económicos y fue asesora de Inteligencia de Inversión para proyecto de cooperación de USAID.',
      email: 'elcordoval@mineco.gob.gt'
    },
    {
      name: 'Beatriz Sánchez',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Relaciones Internacionales, con especialización en Organizaciones Internacionales y Comercio Exterior, con un Máster en Comercio Exterior por la Universidad de Valladolid en España. Cuenta con más de 10 años de experiencia en la promoción de inversiones y exportaciones. Ha organizado eventos internacionales, participación en ferias, gestión de misiones empresariales y ruedas de negocios B2B con compradores e inversionistas extranjeros.',
      email: 'mbsanchezp@mineco.gob.gt'
    },
    {
      name: 'Ingrid Chea',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Relaciones Internacionales con Maestría en Administración de Empresas de la Universidad Rafael Landívar. Cuenta con más de 10 años de experiencia en la atracción de comercio e inversiones trabajando en agencias internacionales de promoción en Guatemala para el Gobierno de México, Gobierno de Guatemala y cooperación internacional USAID. Ha trabajado de manera cercana con instituciones gubernamentales, cámaras de comercio y empresas multinacionales.',
      email: 'ilcheam@mineco.gob.gt'
    },
    {
      name: 'Daniela Hurtarte',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Relaciones Internacionales, con Maestría en Comunicación Política y Empresarial, especializada en Comunicación Digital, por la Universidad Camilo José Cela en Madrid. Experiencia profesional en el ámbito de asuntos públicos en Madrid, con un enfoque en investigación política y legislativa española, así como en la atracción de inversión extranjera en Guatemala, particularmente en los sectores de turismo, vestuario y textil.',
      email: 'dmhurtarter@mineco.gob.gt'
    },
    {
      name: 'Nicté Chicas Callen',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Relaciones y Comercio Internacional con especialización en Internacionalización de Negocios por la Universidad Francisco Marroquín. Posee experiencia en logística, con un enfoque particular en la cadena logística de commodities alimenticios, como café y azúcar, así como en la exportación de metales reciclables en Guatemala. Ha participado en la realización de análisis de mercado, competencia y tendencias para clientes extranjeros.',
      email: 'nchicasc@mineco.gob.gt'
    },
    {
      name: 'Julissa Aquino',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Relaciones Internacionales con Posgrado en Asuntos Globales, Políticos y Económicos por la Universidad del Valle de Guatemala. Cuenta con experiencia en el ámbito del comercio internacional y logística, destacándose en procesos de fortalecimiento institucional y en la gestión de alianzas estratégicas que promueven el comercio y competitividad del país.',
      email: 'mjaquinop@mineco.gob.gt'
    },
    {
      name: 'Gabriela Maldonado',
      position: 'Asesora de Atracción de Inversión Extranjera',
      bio: 'Licenciada en Ciencia Política y Relaciones Internacionales, con una Maestría en Políticas Públicas con especialización en Gobernanza y Desarrollo por la Universidad Erasmo de Róterdam y la Universidad de York. Cuenta con trayectoria multisectorial, en los ámbitos público, privado y de cooperación internacional, con experiencia en planificación estratégica, gestión de proyectos, coordinación interinstitucional, investigación, prospección e inteligencia corporativa.',
      email: 'agmaldonadop@mineco.gob.gt'
    },
    {
      name: 'Alejandro Moscoso',
      position: 'Asesor de Atracción de Inversión Extranjera - Aftercare',
      bio: 'Licenciado en Comercio Exterior y Negocios Internacionales por la Universidad Ming Chuan de Taipéi, Taiwán. Posee amplia experiencia en atracción de inversión extranjera directa (IED) y promoción comercial, participando activamente en la formulación de políticas públicas y en la coordinación de agendas con inversionistas internacionales, organismos multilaterales, y actores clave del sector público y privado. Domina tres idiomas: español, inglés y mandarín.',
      email: 'ajmoscosos@mineco.gob.gt'
    },
    {
      name: 'Otto García',
      position: 'Asesor de Atracción de Inversión Extranjera - Aftercare',
      bio: 'Licenciado en Relaciones Internacionales, con estudios de posgrado en Negocios Internacionales y Comercio Exterior. Su trayectoria combina experiencia en organismos multilaterales, cámaras binacionales y entidades públicas, especialmente en el acompañamiento en materia de atracción y reinversión de inversión extranjera directa. Ha apoyado procesos de articulación interinstitucional, gestión de relaciones B2B y B2C, y posicionamiento de Guatemala como destino atractivo para la IED.',
      email: 'olgarcias@mineco.gob.gt'
    },
    {
      name: 'Rodrigo Matute',
      position: 'Asesor de Inteligencia de inversión',
      bio: 'Licenciado en Economía, con una sólida orientación hacia la resolución de desafíos y un enfoque colaborativo en equipos multidisciplinarios. Cuenta con amplia experiencia en análisis de mercados, recopilación de datos macroeconómicos y análisis de datos clave para la toma de decisiones estratégicas en el ámbito de la atracción de inversión extranjera directa y la exportación. Cuenta con un MBA en Business Intelligence de la escuela de negocios española Formato Educativo.',
      email: 'jrmatutes@mineco.gob.gt'
    },
    {
      name: 'Mayté Milián',
      position: 'Asesora de Inteligencia de inversión',
      bio: 'Licenciada en Economía con especialidad en Finanzas, con más de una década de experiencia. Cuenta con una Maestría en Finanzas de la Universidad Francisco Marroquín. Ha desempeñado asesorías en entidades gubernamentales, así como en organizaciones de investigación y educación. Cuenta con experiencia en el diseño de políticas públicas y en la generación de información estratégica para la toma de decisiones, especializada en información de interés para las empresas que buscan invertir en diferentes países.',
      email: 'emilian@mineco.gob.gt'
    }
  ];

  const pillars = [
    {
      icon: Handshake,
      title: "Atención al Inversionista",
      description: "Asesoría gratuita y orientación integral sobre las mejores oportunidades de negocio en el país.",
      color: "from-blue-500/10 to-blue-600/5",
      iconColor: "text-blue-600",
      borderColor: "hover:border-blue-300"
    },
    {
      icon: LineChart,
      title: "Inteligencia de Inversión",
      description: "Información estratégica, datos actualizados y análisis especializados para la toma de decisiones.",
      color: "from-amber-500/10 to-amber-600/5",
      iconColor: "text-amber-600",
      borderColor: "hover:border-amber-300"
    },
    {
      icon: RefreshCw,
      title: "Aftercare",
      description: "Acompañamiento continuo para el fortalecimiento, consolidación y reinversión de proyectos ya instalados.",
      color: "from-teal-500/10 to-teal-600/5",
      iconColor: "text-teal-600",
      borderColor: "hover:border-teal-300"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900 py-20 lg:py-28">
        {/* 1. Background Image - Full Opacity / Crisp Visibility */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-100"
          style={{ backgroundImage: `url(${aboutImg})` }}
        />
        
        {/* 2. Very Light Blue/Teal Tint Overlay (Reduced Opacity for Luminosity) */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/35 via-blue-800/25 to-teal-800/25 pointer-events-none" />

        {/* Main Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          {/* Main Heading with Text Shadow */}
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight mb-6 drop-shadow-[0_4px_12px_rgba(0,0,0,0.8)]"
          >
            Acerca de <span className="text-[#fcd34d] drop-shadow-md">ProGuatemala</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-white max-w-3xl mx-auto mb-12 font-normal leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
          >
            Convertimos la complejidad en claridad. Te acompañamos desde la exploración inicial hasta la expansión de tu inversión en Guatemala.
          </motion.p>

          {/* Feature Cards with Glassmorphism */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl mx-auto mb-12 text-left"
          >
            <div className="p-6 rounded-2xl bg-slate-900/35 backdrop-blur-md border border-white/20 shadow-xl hover:bg-slate-900/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center mb-4 text-amber-300">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Acompañamiento 360°</h3>
              <p className="text-slate-100 text-sm leading-relaxed">
                Te guiamos paso a paso en la exploración, instalación y posterior reinversión.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/35 backdrop-blur-md border border-white/20 shadow-xl hover:bg-slate-900/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center mb-4 text-amber-300">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Asesoría Gratuita</h3>
              <p className="text-slate-100 text-sm leading-relaxed">
                Atención 100% personalizada y especializada, articulando con instituciones clave.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/35 backdrop-blur-md border border-white/20 shadow-xl hover:bg-slate-900/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-amber-300/20 border border-amber-300/40 flex items-center justify-center mb-4 text-amber-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-white font-bold text-lg mb-2">Respaldo Técnico</h3>
              <p className="text-slate-100 text-sm leading-relaxed">
                Facilitamos trámites, identificamos aliados y aceleramos tu llegada al país.
              </p>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Primary Button */}
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl shadow-xl transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <Users className="w-5 h-5 text-white" />
              <span>Conoce nuestro equipo</span>
            </button>
            
            {/* Secondary Glass Button */}
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/50 hover:bg-slate-900/70 backdrop-blur-md border border-white/30 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]">
              <Target className="w-5 h-5 text-amber-300" />
              <span>Nuestra misión</span>
            </button>
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
            className="bg-[#f0f8ff] rounded-3xl p-8 md:p-12 shadow-lg border border-blue-100/60 max-w-5xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              
              {/* Columna Izquierda: Fotografía */}
              <div className="md:col-span-4 flex justify-center items-center">
                <div className="relative">
                  {/* Halo azul difuminado detrás */}
                  <div className="absolute inset-0 bg-blue-300 rounded-full blur-2xl opacity-40 transform scale-95"></div>
                  <img
                    src="https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg"
                    alt="Presidente de Guatemala"
                    className="relative w-56 h-56 md:w-64 md:h-64 object-cover object-top rounded-full border-4 border-white shadow-md bg-white"
                  />
                </div>
              </div>

              {/* Columna Derecha: Contenido */}
              <div className="md:col-span-8 space-y-4">
                
                {/* Badge */}
                <div>
                  <span className="inline-block bg-[#2563eb] text-white px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm">
                    Mensaje del Presidente
                  </span>
                </div>

                {/* Nombre y Cargo */}
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    Bernardo Arévalo de León
                  </h3>
                  <p className="text-sm md:text-base font-semibold text-[#2563eb] mt-1">
                    Presidente de la República de Guatemala
                  </p>
                </div>

                {/* Párrafos del texto */}
                <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed pt-1">
                  <p>
                    "Guatemala es una tierra de oportunidades sin precedentes. Nuestro compromiso es crear un ambiente propicio para la inversión extranjera, basado en la transparencia, el estado de derecho y la seguridad jurídica."
                  </p>
                  <p>
                    "Los invito a descubrir las ventajas competitivas de nuestro país: una ubicación estratégica, una fuerza laboral talentosa y joven, y un mercado dinámico con acceso preferencial a las economías más importantes del mundo."
                  </p>
                  <p className="text-[#1e3a8a] font-bold">
                    "Guatemala les da la bienvenida. Juntos construiremos un futuro de prosperidad compartida."
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2 block">
              Nuestra Esencia
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
              Quiénes Somos
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              En <strong className="text-slate-900 font-semibold">ProGuatemala</strong> reconocemos que invertir es un paso estratégico determinante. Acompañamos a cada inversionista a establecer o expandir sus proyectos con asesoría especializada y soluciones a la medida.
            </p>
          </motion.div>

          {/* Core Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className={`bg-white rounded-2xl p-8 border border-slate-200/80 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${pillar.borderColor} flex flex-col justify-between`}
                >
                  <div>
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-6`}>
                      <Icon className={`w-7 h-7 ${pillar.iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Commitment Statement Callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-900 rounded-2xl p-8 sm:p-10 text-white mb-16 shadow-xl relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row items-center gap-6 relative z-10">
              <p className="text-lg sm:text-xl font-medium leading-relaxed text-slate-100 text-center md:text-left">
                "Creemos firmemente que el éxito de cada inversión contribuye al desarrollo económico nacional y a la generación de nuevas oportunidades para Guatemala."
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Misión Card - Azul */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-blue-50/80 rounded-3xl p-8 sm:p-10 border border-blue-100 shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md hover:border-blue-200"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-600 w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md">
                <Target className="w-7 h-7 text-white" size={28} />
              </div>
              <div>
                <span className="text-xs font-bold text-blue-600 tracking-wider uppercase block mb-0.5">
                  Propósito
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Misión</h3>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              Promover y facilitar la inversión extranjera directa en Guatemala mediante servicios especializados, información estratégica y acompañamiento integral, contribuyendo al desarrollo económico sostenible del país y la generación de empleo de calidad.
            </p>
          </motion.div>

          {/* Visión Card - Verde Pronunciado e Inmune a estilos globales */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl p-8 sm:p-10 border shadow-sm relative overflow-hidden group transition-all duration-300 hover:shadow-md"
            style={{ 
              backgroundColor: '#eff9f5', // Verde pastel menta
              borderColor: '#bbf7d0'      // Borde verde suave
            }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div 
                className="w-14 h-14 rounded-2xl shrink-0 flex items-center justify-center shadow-md"
                style={{ backgroundColor: '#0d785f' }} // Verde oscuro pronunciado
              >
                <Eye className="w-7 h-7 !text-white" size={28} style={{ color: '#ffffff' }} />
              </div>
              <div>
                <span 
                  className="text-xs font-bold tracking-wider uppercase block mb-0.5"
                  style={{ color: '#0d785f' }}
                >
                  Aspiración
                </span>
                <h3 className="text-2xl font-bold text-slate-900">Visión</h3>
              </div>
            </div>
            <p className="text-slate-700 leading-relaxed text-base">
              Ser reconocidos como la agencia de promoción de inversiones más efectiva de Centroamérica, posicionando a Guatemala como el destino preferido para la inversión extranjera directa en la región, gracias a nuestro servicio excepcional y resultados medibles.
            </p>
          </motion.div>

        </div>

        </div>
      </section>

      {/* Values Section */}
      <section className="pt-12 pb-2 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Encabezado */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
              Nuestros Valores
            </h2>
            <p className="text-lg text-slate-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>

          {/* Grid de Valores */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              // Asignación explícita del tema según el índice
              const theme = VALUE_THEMES[index % VALUE_THEMES.length];

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${theme.cardBg} ${theme.shadowColor} rounded-3xl p-8 text-center border shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center justify-start group`}
                  style={theme.styleCard} // Respaldo inmune a purga de CSS
                >
                  {/* Cuadro de Icono con Gradiente Saturado */}
                  <div 
                    className={`${theme.iconBg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md shrink-0 transition-transform duration-300 group-hover:scale-105`}
                    style={theme.styleIcon} // Respaldo inmune a purga de CSS
                  >
                    <Icon className="w-8 h-8 text-white" size={32} />
                  </div>

                  {/* Título y Descripción */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-premium bg-gradient-to-b from-white to-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Tab Navigation - Scrollable on mobile, Centered on desktop */}
          <div className="flex items-center pt-4 pb-5 justify-start md:justify-center overflow-x-auto no-scrollbar mb-12 bg-white/80 backdrop-blur-md rounded-2xl p-2 shadow-xl border border-gray-100 gap-1 sm:gap-2">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isActive = activeTab === index;

              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`relative flex items-center space-x-2.5 px-5 py-3.5 font-semibold text-sm sm:text-base rounded-xl transition-all duration-200 whitespace-nowrap select-none shrink-0 ${
                    isActive
                      ? 'text-white'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/70'
                  }`}
                >
                  {/* Sliding Background Indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      className="absolute inset-0 bg-support-500 rounded-xl shadow-md"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}

                  <Icon className={`w-5 h-5 relative z-10 transition-colors duration-200 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  <span className="relative z-10">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content with Smooth AnimatePresence */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.99 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >

              {/* Main Content Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                
                {/* Main Info Card */}
                <div className="card-premium p-8 sm:p-10 bg-white flex flex-col justify-between shadow-lg rounded-2xl border border-gray-100">
                  <div>
                    <div className="flex items-center space-x-5 mb-8">
                      {CurrentIcon && (
                        <div className="bg-support-500 p-4 rounded-2xl shadow-lg shrink-0">
                          <CurrentIcon className="w-10 h-10 text-white" />
                        </div>
                      )}
                      <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                          {currentService.title}
                        </h2>
                      </div>
                    </div>

                    <div className="space-y-6 mb-10">
                      <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                        {currentService.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Features Side Card */}
                <div className="card-premium p-8 sm:p-10 !bg-sky-100/70 border border-sky-200/80 shadow-lg rounded-2xl flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                      <div className={`bg-gradient-to-br ${currentService.color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-md shrink-0`}>
                        <CheckCircle className="w-6 h-6 text-white" />
                      </div>
                      ¿Qué incluye?
                    </h3>

                    <div className="space-y-3.5">
                      {currentService.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start space-x-4 p-4 bg-white/90 hover:bg-white rounded-xl hover:shadow-sm hover:translate-x-1.5 transition-all duration-200 border border-sky-200/50"
                        >
                          <CheckCircle className="w-5 h-5 text-sky-600 mt-0.5 shrink-0" />
                          <span className="text-gray-800 font-medium leading-relaxed text-sm sm:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Benefits Section */}
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
              ¿Por qué elegir nuestros servicios?
            </h2>
            <p className="text-xl text-gray-600">
              Ventajas únicas que ofrecemos a los inversionistas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: 'Gratuito',
                description: 'Todos nuestros servicios son completamente gratuitos para los inversionistas',
                hexColor: '#059669', // Verde Emerald
                hexBg: '#ecfdf5',
                hexBorder: '#a7f3d0'
              },
              {
                icon: Globe,
                title: 'Multilingüe',
                description: 'Atención en español, inglés y otros idiomas según la necesidad',
                hexColor: '#2563eb', // Azul
                hexBg: '#eff6ff',
                hexBorder: '#bfdbfe'
              },
              {
                icon: Lightbulb,
                title: 'Especializado',
                description: 'Conocimiento profundo de sectores y regulaciones locales',
                hexColor: '#9333ea', // Morado
                hexBg: '#faf5ff',
                hexBorder: '#e9d5ff'
              },
              {
                icon: Shield,
                title: 'Institucional',
                description: 'Respaldo oficial del Gobierno de Guatemala en todo momento',
                hexColor: '#ea580c', // Naranja
                hexBg: '#fff7ed',
                hexBorder: '#fed7aa'
              }
            ].map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 flex flex-col items-center"
                >
                  {/* Contenedor del ícono con respaldo de estilos inmune a herencia CSS */}
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5 border shadow-sm shrink-0"
                    style={{ 
                      backgroundColor: benefit.hexBg, 
                      borderColor: benefit.hexBorder 
                    }}
                  >
                    {Icon && (
                      <Icon 
                        size={32}
                        className="w-8 h-8 shrink-0" 
                        style={{ 
                          color: benefit.hexColor, 
                          stroke: benefit.hexColor 
                        }} 
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Authorities Section */}
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
              Nuestras Autoridades
            </h2>
            <p className="text-xl text-gray-600">
              Liderazgo comprometido con la promoción de inversiones en Guatemala
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mb-6 shadow-lg">
                  <img
                    src="https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg"
                    alt="Dr. Bernardo Arévalo de León"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Bernardo Arévalo de León</h3>
                <p className="text-blue-600 font-semibold mb-4">Presidente de la República</p>
                <p className="text-gray-700 leading-relaxed">
                  Lidera la visión del país para posicionar a Guatemala como destino de inversión preferido en Centroamérica, promoviendo el desarrollo económico sostenible y la generación de empleo de calidad.
                </p>
              </div>
            </motion.div>

            {authorities.map((authority, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500"
              >
                <div className="flex flex-col items-center text-center">
                  
                  {/* Contenedor circular con imagen */}
                  <div className="w-32 h-32 rounded-full mx-auto mb-6 shadow-lg overflow-hidden border-1 border-white bg-gradient-to-br from-blue-500 to-teal-500 flex items-center justify-center shrink-0">
                    {authority.image ? (
                      <img
                        src={authority.image}
                        alt={authority.name}
                        className="w-full h-full object-cover object-left"
                      />
                    ) : (
                      <User className="w-16 h-16 text-white" />
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{authority.name}</h3>
                  <p className="text-blue-600 font-semibold mb-4">{authority.position}</p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {authority.bio}
                  </p>

                  {authority.email && (
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Mail className="w-4 h-4" />
                      <a href={`mailto:${authority.email}`} className="hover:text-blue-600">
                        {authority.email}
                      </a>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
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
              Agencia Nacional de Atracción de Inversión Extranjera Directa
            </h2>
            <p className="text-xl text-gray-600">
              La Agencia se dedica proactivamente a la promoción de inversiones, inteligencia de inversión y asesoría técnica a inversionistas, trabajando en tres áreas clave: Inteligencia de Inversión, Promoción de Inversiones y Aftercare.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  {member.email && (
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-blue-600 hover:text-blue-700 text-xs font-medium hover:underline"
                    >
                      {member.email}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
