import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Heart, Users, Award, Star,
  Download, Mail, Linkedin, User, Lightbulb, Shield, BarChart3
} from 'lucide-react';
import aboutImg from '../assets/images/portadas/4. ACERCA DE PROGUATEMALA.jpg';

const About: React.FC = () => {
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
      email: 'ministra@mineco.gob.gt'
    },
    {
      name: 'Valeria Prado',
      position: 'Viceministra de Inversión y Competencia',
      bio: 'Es abogada y notaria, con especialización en Derecho Corporativo y Comercio Internacional. Cuenta con más de 15 años de experiencia en sostenibilidad, gestión ambiental, desarrollo comunitario y promoción de inversiones. A lo largo de su carrera ha liderado proyectos estratégicos en los sectores energético e hidroeléctrico, impulsando programas sociales, procesos de certificación ambiental y el cumplimiento de normativas nacionales e internacionales.',
      email: ''
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

  const stats = [
    { label: 'Años de experiencia', value: '15+' },
    { label: 'Inversiones facilitadas', value: '$3.2B' },
    { label: 'Empresas atendidas', value: '500+' },
    { label: 'Empleos generados', value: '125K' }
  ];

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
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${aboutImg})` }}></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  Acerca de <span className="text-yellow-500">ProGuatemala</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
                  En ProGuatemala estamos para acompañarte. Somos la Agencia Nacional de
Atracción de Inversión Extranjera Directa. Nuestro equipo te conecta con las
oportunidades, te guía paso a paso, y te ayuda a instalar y hacer crecer tu
inversión en Guatemala. Con autoridad técnica y respaldo institucional,
convertimos la complejidad en claridad.
                </motion.p>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
ProGuatemala brinda asesoría especializada, gratuita y personalizada durante
todo el proceso de inversión.
Acompañamos desde la exploración inicial hasta la expansión y reinversión,
articulando con las instituciones clave.

                </motion.p>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
No estás solo: nuestro equipo técnico te ayuda a navegar trámites, identificar
aliados y acelerar tu instalación.
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-support-500 hover:bg-support-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                    Conoce nuestro equipo
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Nuestra misión
                  </button>
                </motion.div>
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Quiénes Somos
            </h2>
            <div className="max-w-4xl mx-auto text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                En ProGuatemala, reconocemos que la decisión de invertir representa un paso estratégico y de gran importancia. Por ello, nuestro compromiso es acompañar a cada inversionista en el proceso de establecer o expandir sus proyectos en Guatemala, brindando asesoría especializada y soluciones adaptadas a sus necesidades.
              </p>
              <p>
                Nuestra labor se sustenta en herramientas y programas diseñados para garantizar un acompañamiento integral:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Atención al Inversionista, mediante la cual proporcionamos asesoría gratuita y orientación sobre las oportunidades que ofrece el país.
                </li>
                <li>
                  Inteligencia de Inversión, que pone a disposición información estratégica, datos actualizados y análisis especializados para respaldar la toma de decisiones.
                </li>
                <li>
                  Aftercare, que promueve el fortalecimiento, consolidación y crecimiento de las inversiones ya establecidas.
                </li>
              </ul>
              <p>
                En ProGuatemala, creemos firmemente que el éxito de cada inversión contribuye al desarrollo económico nacional y a la generación de nuevas oportunidades para la población. Juntos impulsamos un entorno favorable para el crecimiento y la prosperidad del país.
              </p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-support-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Misión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Promover y facilitar la inversión extranjera directa en Guatemala mediante 
                  servicios especializados, información estratégica y acompañamiento integral, 
                  contribuyendo al desarrollo económico sostenible del país y la generación 
                  de empleo de calidad.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-support-50 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-teal-600 p-3 rounded-xl mr-4">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">Visión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ser reconocidos como la agencia de promoción de inversiones más efectiva 
                  de Centroamérica, posicionando a Guatemala como el destino preferido para 
                  la inversión extranjera directa en la región, gracias a nuestro servicio 
                  excepcional y resultados medibles.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600">
              Los principios que guían nuestro trabajo diario
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`bg-support-50 rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-white/50 backdrop-blur-sm shadow-support-100`}
                >
                  <div className={`bg-support-500 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:rotate-6 transition-transform duration-300`}>
                    <Icon className="w-12 h-12 text-white drop-shadow-lg" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 tracking-tight">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed text-base">{value.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
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
              Nuestro Impacto
            </h2>
            <p className="text-xl text-gray-600">
              Resultados que demuestran nuestro compromiso con el desarrollo de Guatemala
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 border border-gray-100"
              >
                <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent mb-3 tracking-tight">{stat.value}</div>
                <div className="text-gray-700 font-semibold text-lg tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Download Strategy */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Estrategia Nacional de Inversiones
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Descarga nuestra estrategia completa para el desarrollo económico y 
              la atracción de inversión extranjera directa en Guatemala
            </p>
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center mx-auto">
              <Download className="w-5 h-5 mr-2" />
              Descargar Estrategia Nacional (PDF)
            </button>
          </motion.div>
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
                    className="w-full h-full object-cover"
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
                  <div className="bg-gradient-to-br from-blue-500 to-teal-500 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <User className="w-16 h-16 text-white" />
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
