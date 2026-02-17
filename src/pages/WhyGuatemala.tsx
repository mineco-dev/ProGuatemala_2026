import React from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, Users, TrendingUp, Shield, Globe, 
  Download, ArrowRight, BarChart3, Clock, CheckCircle, ChevronLeft, ChevronRight 
} from 'lucide-react';
import ParquePlaceholderImg from '../assets/images/Castillo de San Felipe_DJI_0904.JPG';

import FactSheetEs from '../assets/files/FACT SHEET EN ESPAÑOL.pdf';

const WhyGuatemala: React.FC = () => {
  const [activeModalId, setActiveModalId] = React.useState<string | null>(null);
  const [slideIndexes, setSlideIndexes] = React.useState<Record<string, number>>({});

  const parks = [
    {
      id: 'interoceanica',
      title: 'Interoceánica',
      description: 'Parque industrial con conectividad logística clave entre océanos.',
      highlights: ['Ubicación estratégica', 'Infraestructura moderna', 'Acceso a rutas principales'],
      images: [ParquePlaceholderImg, ParquePlaceholderImg, ParquePlaceholderImg]
    },
    {
      id: 'michatoya',
      title: 'Michatoya Pacífico',
      description: 'Centro productivo con acceso a corredores del Pacífico.',
      highlights: ['Cercanía a puertos', 'Servicios integrados', 'Zonas de carga'],
      images: [ParquePlaceholderImg, ParquePlaceholderImg, ParquePlaceholderImg]
    },
    {
      id: 'puerta-istmo',
      title: 'Puerta del Istmo',
      description: 'Hub empresarial con servicios para manufactura y distribución.',
      highlights: ['Conectividad regional', 'Espacios flexibles', 'Seguridad 24/7'],
      images: [ParquePlaceholderImg, ParquePlaceholderImg, ParquePlaceholderImg]
    },
    {
      id: 'synergy',
      title: 'Synergy Industrial Park',
      description: 'Parque industrial con ecosistema empresarial consolidado.',
      highlights: ['Servicios corporativos', 'Energía confiable', 'Accesos controlados'],
      images: [ParquePlaceholderImg, ParquePlaceholderImg, ParquePlaceholderImg]
    },
    {
      id: 'zona-libre-quetzal',
      title: 'Zona Libre Quetzal',
      description: 'Zona con incentivos y enfoque en comercio exterior.',
      highlights: ['Régimen especial', 'Logística integrada', 'Proximidad a puerto'],
      images: [ParquePlaceholderImg, ParquePlaceholderImg, ParquePlaceholderImg]
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
      value: '3.7% crecimiento del PIB 2024',
      change: 'US$ 113,800 millones',
      subtitle: 'PIB Nominal'
    },
    {
      label: 'POBLACIÓN',
      value: '18.1 millones',
      change: 'de habitantes',
      subtitle: ''
    },
    {
      label: 'EXPORTACIÓN DE BIENES',
      value: '2.6% de crecimiento',
      change: 'comparado al año anterior',
      subtitle: 'US$ 14,557 millones'
    },
    {
      label: 'EXPORTACIÓN DE SERVICIOS',
      value: '9% de crecimiento',
      change: 'comparado al año anterior',
      subtitle: 'US$ 4,667 millones'
    },
    {
      label: 'IED 2024',
      value: 'US$ 1,694.5 millones',
      change: '',
      subtitle: ''
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
                {/* <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 bg-blue-600 hover:bg-blue-700">
                    Explorar ventajas
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Ver estadísticas
                  </button>
                </motion.div> */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                className="text-center card-premium p-8 hover-lift"
              >
                <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">{stat.label}</div>
                <div className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-snug break-words">{stat.value}</div>
                {stat.change && (
                  <div className="text-xs text-white font-semibold bg-green-50 px-3 py-1 rounded-full inline-block mb-2">{stat.change}</div>
                )}
                {stat.subtitle && <div className="text-xs text-gray-500 mt-1">{stat.subtitle}</div>}
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-6 text-center">Fuente: Banco de Guatemala</p>
        </div>
      </section>

      {/* Advantages Grid */}
      <section className="section-premium bg-white">
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

      {/* Presidential Message Section */}
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
              Mensaje del Presidente
            </h2>
            <p className="text-xl text-gray-600">
              Bienvenida a inversionistas de todo el mundo
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full overflow-hidden shadow-lg border-4 border-blue-100">
                  <img
                    src="https://raw.githubusercontent.com/RedCiudadana/RecursosProGuatemala/refs/heads/main/equipo/PRESIDENTE%20BERNARDO%20AREVALO%20RETRATO%20OFICIAL%20.jpg"
                    alt="Dr. Bernardo Arévalo de León"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-4">
                  <h3 className="text-lg font-bold text-gray-900">Dr. Bernardo Arévalo de León</h3>
                  <p className="text-blue-600 font-medium text-sm">Presidente de la República</p>
                </div>
              </div>

              <div className="flex-1">
                <div className="text-gray-700 leading-relaxed space-y-4">
                  <p className="text-lg">
                    Estimados inversores, en nombre del pueblo de Guatemala, me complace darles una cálida bienvenida durante su proceso de explorar las oportunidades de inversión en nuestro país.
                  </p>
                  <p>
                    Guatemala se presenta como un faro de oportunidades en Centroamérica, con una economía estable, una ubicación estratégica y un entorno empresarial favorable.
                  </p>
                  <p>
                    El compromiso de nuestra nación con la estabilidad económica y el crecimiento es inquebrantable. Con un marco legal sólido, regulaciones transparentes y un enfoque proactivo para la facilitación de inversiones, Guatemala ofrece un entorno seguro y propicio para que las empresas prosperen.
                  </p>
                  <p>
                    Nuestra ubicación estratégica presenta un acceso privilegiado a mercados clave, facilitando el comercio y la conectividad. Ya sea que busquen establecer instalaciones de manufactura, explorar sectores como alimentos y bebidas, energía renovable, o aprovechar nuestro ecosistema de turismo y servicios de salud, Guatemala ofrece una gran cantidad de oportunidades.
                  </p>
                  <p className="font-semibold text-gray-900">
                    Al embarcarse en este viaje, tengan la seguridad de que nuestra Agencia está aquí para apoyarlos y guiarlos en cada paso del camino. Estamos deseosos de asociarnos con ustedes para lograr sus objetivos y contribuir a la prosperidad mutua de nuestras naciones.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ubicación Estratégica
            </h2>
            <p className="text-xl text-gray-600">
              Guatemala: El corazón logístico de las Américas
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="p-4 bg-support-50">
                  <h3 className="text-lg font-semibold">Mapa Interactivo de Conectividad</h3>
                  <p className=" text-sm">Explora las conexiones comerciales de Guatemala</p>
                </div>
                <div className="p-4">
                  <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
                    <iframe
                      src="https://flo.uri.sh/visualisation/18613495/embed"
                      title="Guatemala Connectivity Map"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      className="rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-support-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conectividad Aérea</h3>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 text-sky-600 mr-2" />
                    2:50 horas a Miami
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 text-sky-600 mr-2" />
                    3 horas a Houston
                  </li>
                  <li className="flex items-center text-gray-700">
                    <Clock className="w-4 h-4 text-sky-600 mr-2" />
                    2:10 horas a Ciudad de México
                  </li>
                </ul>
              </div>
              
              <div className="bg-support-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Conectividad Marítima</h3>
                <ul className="space-y-3">
                  <li className="text-gray-700">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="font-semibold">Puerto Quetzal (Pacífico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">Carga: 18,779.86 Miles TM</p>
                  </li>
                  <li className="text-gray-700">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="font-semibold">Puerto Santo Tomás (Atlántico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">Carga: 6,756.31 Miles TM</p>
                  </li>
                  <li className="text-gray-700">
                    <div className="flex items-center mb-1">
                      <MapPin className="w-4 h-4 text-emerald-600 mr-2" />
                      <span className="font-semibold">Puerto Barrios (Atlántico)</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-6">Carga: 5,510.87 Miles TM</p>
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
              Comparación de indicadores clave de competitividad
            </p>
          </motion.div>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-blue-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">Indicador</th>
                    <th className="px-6 py-4 text-center">Guatemala</th>
                    <th className="px-6 py-4 text-center">Costa Rica</th>
                    <th className="px-6 py-4 text-center">El Salvador</th>
                    <th className="px-6 py-4 text-center">Honduras</th>
                    <th className="px-6 py-4 text-center">República Dominicana</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">PIB 2024 (USD miles de millones)</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold">$ 113.8</td>
                    <td className="px-6 py-4 text-center">$ 95.35</td>
                    <td className="px-6 py-4 text-center">$ 35.365</td>
                    <td className="px-6 py-4 text-center">$ 37.09</td>
                    <td className="px-6 py-4 text-center">$ 127.356</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Población a 2025 (millones)</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold">18.1</td>
                    <td className="px-6 py-4 text-center">5.13</td>
                    <td className="px-6 py-4 text-center">6.338</td>
                    <td className="px-6 py-4 text-center">10.83</td>
                    <td className="px-6 py-4 text-center">11.43</td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Salario mínimo 2025 (USD/mes)*</td>
                    <td className="px-6 py-4 text-center text-emerald-600 font-bold">$518.00</td>
                    <td className="px-6 py-4 text-center">$726.00</td>
                    <td className="px-6 py-4 text-center">$408.80</td>
                    <td className="px-6 py-4 text-center">$357.00</td>
                    <td className="px-6 py-4 text-center">$480.51</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600 mt-4 text-center">*Los salarios indicados son referenciales y pueden variar según el sector económico, el tamaño de la empresa y otros factores.</p>
            <p className="text-sm text-gray-500 mt-2 text-center">Fuente: Banco de Guatemala</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-support-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Descarga el Fact Sheet de Guatemala
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Obtén datos detallados, indicadores económicos y toda la información 
              que necesitas para tomar la mejor decisión de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={FactSheetEs}
                download="FACT SHEET EN ESPAÑOL.pdf"
                className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                <Download className="w-5 h-5 mr-2" />
                Descargar Fact Sheet
              </a>
              <button className="border border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center">
                Habla con un asesor
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default WhyGuatemala;
