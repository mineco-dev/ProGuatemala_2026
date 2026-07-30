import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Target, Plane, TrendingUp, HeartHandshake, 
  CheckCircle, Clock, ArrowRight, Phone,
  FileText, Globe, Zap, Shield, Award, Lightbulb
} from 'lucide-react';
import promoInvImage from '../assets/images/promoinv.png';
import serviciosImg from '../assets/images/portadas/2. SERVICIOS.jpg';

const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

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
            <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url(${serviciosImg})` }}></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
                >
                  Te acompañamos <span className="text-yellow-500">antes, durante y después</span> de tu inversión
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
                  Servicios especializados diseñados para maximizar el éxito de tu inversión en Guatemala
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-support-500 hover:bg-suppport-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                    Explorar servicios
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Solicitar consultoría
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="section-premium bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-16 bg-white rounded-2xl p-2 shadow-lg">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center space-x-3 px-6 py-4 font-semibold transition-all duration-300 rounded-xl transform hover:scale-105 ${
                    activeTab === index
                      ? `bg-support-500 text-white shadow-lg scale-105`
                      : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50 hover:shadow-md'
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="hidden sm:inline">{service.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Service Header with Image */}
            {services[activeTab].image && (
              <div className="card-premium overflow-hidden mb-8 bg-white">
                <img
                  src={services[activeTab].image}
                  alt={services[activeTab].title}
                  className="w-full h-64 md:h-96 object-contain"
                />
              </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              <div className="card-premium p-10">
                <div className="flex items-center space-x-6 mb-8">
                  {React.createElement(services[activeTab].icon, {
                    className: `w-16 h-16 text-white bg-support-500 p-4 rounded-2xl shadow-lg`
                  })}
                  <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{services[activeTab].title}</h2>
                  </div>
                </div>

                <div className="space-y-6 mb-10">
                  <p className="text-gray-700 leading-relaxed text-lg">{services[activeTab].description}</p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="btn-premium inline-flex items-center">
                    {services[activeTab].cta}
                    <ArrowRight className="w-5 h-5 ml-3" />
                  </button> */}
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors duration-200"
                  >
                    Contactar a un asesor
                  </Link>
                </div>
              </div>

              <div className={`card-premium p-10 bg-gradient-to-br ${services[activeTab].bgColor}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                  <div className={`bg-gradient-to-br ${services[activeTab].color} w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg`}>
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  ¿Qué incluye?
                </h3>
                <div className="space-y-4">
                  {services[activeTab].features.map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <CheckCircle className="w-6 h-6 text-support-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 font-medium leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
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
                color: 'text-white',
                bgColor: 'bg-emerald-100'
              },
              {
                icon: Globe,
                title: 'Multilingüe',
                description: 'Atención en español, inglés y otros idiomas según la necesidad',
                color: 'text-white',
                bgColor: 'bg-blue-100'
              },
              {
                icon: Lightbulb,
                title: 'Especializado',
                description: 'Conocimiento profundo de sectores y regulaciones locales',
                color: 'text-white',
                bgColor: 'bg-purple-100'
              },
              {
                icon: Shield,
                title: 'Institucional',
                description: 'Respaldo oficial del Gobierno de Guatemala en todo momento',
                color: 'text-white',
                bgColor: 'bg-orange-100'
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
                  className="text-center p-6"
                >
                  <div className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                    <Icon className={`w-8 h-8 ${benefit.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              ¿Listo para comenzar?
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Nuestro equipo de expertos está disponible para acompañarte desde el primer día. 
              Contacta con nosotros para una consultoría personalizada gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" />
                Solicitar consultoría
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
                Agendar reunión
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;
