import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, FileText, Building, Globe, 
  Download, CheckCircle, ArrowRight, Award,
  Scale, DollarSign, Clock, Users, Factory
} from 'lucide-react';

const LegalIncentives: React.FC = () => {
  const [activeIncentive, setActiveIncentive] = useState(0);

  const legalFramework = [
    {
      icon: Shield,
      title: 'Ley de Inversión Extranjera',
      description: 'Marco legal que garantiza la protección y promoción de la inversión extranjera',
      benefits: [
        'Trato nacional para inversionistas extranjeros',
        'Libre transferencia de capitales y utilidades',
        'Protección contra expropiación',
        'Acceso a arbitraje internacional'
      ]
    },
    {
      icon: Building,
      title: 'Zonas Francas',
      description: 'Régimen especial para empresas orientadas a la exportación',
      benefits: [
        'Exención del ISR por 10 años',
        'Exención de aranceles de importación',
        'Exención del IVA en compras locales',
        'Facilidades administrativas'
      ]
    },
    {
      icon: Factory,
      title: 'Régimen de Maquila',
      description: 'Incentivos para industrias de manufactura y ensamblaje',
      benefits: [
        'Suspensión de derechos arancelarios',
        'Exención del IVA en importaciones',
        'Facilidades para exportación',
        'Simplificación de trámites'
      ]
    },
    {
      icon: Globe,
      title: 'Acuerdos Comerciales',
      description: 'Red de tratados que facilitan el comercio internacional',
      benefits: [
        'DR-CAFTA con Estados Unidos',
        'Acuerdo de Asociación con la UE',
        'Tratados bilaterales en América',
        'OMC y otros organismos multilaterales'
      ]
    }
  ];

  const incentivePrograms = [
    {
      name: 'Zonas de Desarrollo Económico Especial (ZDEEP)',
      description: 'Régimen integral para grandes proyectos de inversión',
      requirements: ['Inversión mínima de $5M', 'Generación de 100 empleos', 'Compromiso de 10 años'],
      benefits: [
        'Exención del ISR por 10 años, renovable por 10 años más',
        'Exención de aranceles e IVA en importaciones',
        'Procedimientos administrativos simplificados',
        'Estabilidad jurídica garantizada'
      ],
      sectors: ['Manufactura', 'Agroindustria', 'Servicios', 'Energía', 'Turismo']
    },
    {
      name: 'Ley de Energías Renovables',
      description: 'Incentivos específicos para proyectos de energía limpia',
      requirements: ['Proyecto de energía renovable', 'Capacidad mínima según tecnología', 'Estudio de impacto ambiental'],
      benefits: [
        'Exención del ISR por 10 años',
        'Exención de aranceles para equipo',
        'Depreciación acelerada',
        'Contratos de largo plazo garantizados'
      ],
      sectors: ['Hidroeléctrica', 'Solar', 'Eólica', 'Geotérmica', 'Biomasa']
    },
    {
      name: 'Ley de Alianzas Público-Privadas',
      description: 'Marco para proyectos de infraestructura con participación privada',
      requirements: ['Proyecto de interés público', 'Viabilidad técnica y financiera', 'Proceso de licitación'],
      benefits: [
        'Contratos de largo plazo (hasta 40 años)',
        'Garantías gubernamentales',
        'Resolución de disputas especializada',
        'Estabilidad regulatoria'
      ],
      sectors: ['Transporte', 'Energía', 'Telecomunicaciones', 'Agua', 'Salud']
    }
  ];

  const protections = [
    {
      icon: Scale,
      title: 'Arbitraje Internacional',
      description: 'Acceso a mecanismos internacionales de resolución de disputas'
    },
    {
      icon: Shield,
      title: 'Tratados Bilaterales',
      description: 'Protección adicional a través de acuerdos internacionales'
    },
    {
      icon: FileText,
      title: 'Estabilidad Jurídica',
      description: 'Garantías contra cambios retroactivos en la legislación'
    },
    {
      icon: DollarSign,
      title: 'Libre Transferencia',
      description: 'Derecho a transferir capitales y utilidades sin restricciones'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-support-500 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Marco Legal e <span className="text-yellow-500">Incentivos</span>
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-4xl mx-auto">
              Un entorno jurídico sólido y atractivos incentivos fiscales 
              que garantizan la seguridad y rentabilidad de tu inversión
            </p>
          </motion.div>
        </div>
      </section>

      {/* Legal Framework */}
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
              Marco Legal Amigable para Invertir
            </h2>
            <p className="text-xl text-gray-600">
              Leyes e instituciones que protegen y promueven la inversión extranjera
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {legalFramework.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <ul className="space-y-2">
                    {item.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start text-sm">
                        <CheckCircle className="w-4 h-4 text-support-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Incentive Programs */}
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
              Programas de Incentivos
            </h2>
            <p className="text-xl text-gray-600">
              Beneficios fiscales y administrativos para diferentes tipos de inversión
            </p>
          </motion.div>
          
          {/* Tabs */}
          <div className="flex flex-wrap justify-center mb-8 border-b border-gray-200">
            {incentivePrograms.map((program, index) => (
              <button
                key={index}
                onClick={() => setActiveIncentive(index)}
                className={`px-6 py-4 font-medium transition-colors duration-200 border-b-2 ${
                  activeIncentive === index
                    ? 'border-blue-600 text-blue-600'
                    : 'border-transparent text-gray-600 hover:text-blue-600'
                }`}
              >
                <span className="text-sm sm:text-base">{program.name}</span>
              </button>
            ))}
          </div>
          
          {/* Tab Content */}
          <motion.div
            key={activeIncentive}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {incentivePrograms[activeIncentive].name}
                </h3>
                <p className="text-gray-600 mb-6">
                  {incentivePrograms[activeIncentive].description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Requisitos:</h4>
                  <ul className="space-y-2">
                    {incentivePrograms[activeIncentive].requirements.map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Sectores Aplicables:</h4>
                  <div className="flex flex-wrap gap-2">
                    {incentivePrograms[activeIncentive].sectors.map((sector, index) => (
                      <span
                        key={index}
                        className="bg-teal-100 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {sector}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-support-50 p-8">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-blue-600" />
                  Beneficios Principales
                </h4>
                <ul className="space-y-3">
                  {incentivePrograms[activeIncentive].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-support-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Investment Protections */}
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
              Protecciones para el Inversionista
            </h2>
            <p className="text-xl text-gray-600">
              Garantías legales que respaldan la seguridad de tu inversión
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {protections.map((protection, index) => {
              const Icon = protection.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                >
                  <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{protection.title}</h3>
                  <p className="text-gray-600 text-sm">{protection.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
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
              Proceso de Aplicación a Incentivos
            </h2>
            <p className="text-xl text-gray-600">
              Pasos para acceder a los beneficios fiscales y administrativos
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: 1,
                  title: 'Evaluación Inicial',
                  description: 'Análisis de elegibilidad y selección del régimen más conveniente',
                  time: '1-2 semanas'
                },
                {
                  step: 2,
                  title: 'Preparación de Documentos',
                  description: 'Recopilación y preparación de toda la documentación requerida',
                  time: '2-4 semanas'
                },
                {
                  step: 3,
                  title: 'Presentación de Solicitud',
                  description: 'Presentación formal ante la autoridad competente',
                  time: '1 semana'
                },
                {
                  step: 4,
                  title: 'Revisión y Aprobación',
                  description: 'Proceso de evaluación y aprobación por parte de las autoridades',
                  time: '4-8 semanas'
                },
                {
                  step: 5,
                  title: 'Inicio de Beneficios',
                  description: 'Activación de incentivos y inicio de operaciones bajo el régimen',
                  time: 'Inmediato'
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center space-x-6 bg-white rounded-xl p-6 shadow-md"
                >
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                  <div className="flex items-center text-support-500 font-medium">
                    <Clock className="w-4 h-4 mr-2" />
                    {item.time}
                  </div>
                </motion.div>
              ))}
            </div>
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
              Descarga el Resumen Legal Completo
            </h2>
            <p className="text-xl mb-8 text-gray-700">
              Obtén información detallada sobre todos los aspectos legales, 
              incentivos y protecciones disponibles para inversionistas extranjeros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Descargar resumen legal PDF
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
                Consultar con especialista legal
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegalIncentives;