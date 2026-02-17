import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Leaf, Factory, Headphones, Zap, Plane,
  ArrowRight, Download, TrendingUp, Users, DollarSign,
  Building, Truck, Heart, Cpu, Pill, ShoppingBag,
  Droplet, Shirt, FlaskConical, Battery, Wrench,
  Filter, ChevronLeft, ChevronRight
} from 'lucide-react';
import AgroindustriaImg from '../assets/images/agroindustria.jpg';
import ManufacturaImg from '../assets/images/manufactura.jpg';
import ServiciosGlobalesImg from '../assets/images/serviciosglobales.jpg';
import EnergiasLimpiasImg from '../assets/images/energiaslimpias.jpg';
import TurismoSostenibleImg from '../assets/images/turismo.jpg';

const StrategicSectors: React.FC = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState<'all' | 'short' | 'medium' | 'long'>('all');
  const [currentSlide, setCurrentSlide] = useState(0);

  const sectors = [
    // Corto Plazo
    {
      id: 'alimentos-procesados',
      name: 'Alimentos Procesados',
      icon: ShoppingBag,
      image: AgroindustriaImg,
      description: 'Procesamiento y transformación de productos alimenticios para mercados locales e internacionales',
      highlights: ['Alimentos procesados', 'Productos orgánicos', 'Café de especialidad', 'Snacks saludables'],
      investment: '$2.3B',
      employment: '850K empleos',
      growth: '+4.2%',
      timeframe: 'short',
      priority: 1
    },
    {
      id: 'bebidas-no-alcoholicas',
      name: 'Bebidas no alcohólicas',
      icon: Droplet,
      image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Producción de bebidas naturales, jugos y bebidas funcionales',
      highlights: ['Jugos naturales', 'Bebidas funcionales', 'Agua embotellada', 'Bebidas energéticas'],
      investment: '$1.2B',
      employment: '120K empleos',
      growth: '+6.5%',
      timeframe: 'short',
      priority: 2
    },
    {
      id: 'vestuario-textil',
      name: 'Vestuario y textil',
      icon: Shirt,
      image: ManufacturaImg,
      description: 'Industria textil y de confección con estándares internacionales',
      highlights: ['Textiles técnicos', 'Confección de prendas', 'Moda sostenible', 'Uniformes especializados'],
      investment: '$1.8B',
      employment: '420K empleos',
      growth: '+5.1%',
      timeframe: 'short',
      priority: 3
    },
    {
      id: 'quimicos',
      name: 'Químicos',
      icon: FlaskConical,
      image: 'https://images.pexels.com/photos/3735709/pexels-photo-3735709.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Productos químicos industriales y especializados',
      highlights: ['Químicos industriales', 'Productos de limpieza', 'Fertilizantes', 'Cosméticos'],
      investment: '$950M',
      employment: '85K empleos',
      growth: '+7.2%',
      timeframe: 'short',
      priority: 4
    },
    {
      id: 'farmaceuticos',
      name: 'Farmacéuticos',
      icon: Pill,
      image: 'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Producción farmacéutica y medicamentos genéricos',
      highlights: ['Medicamentos genéricos', 'Productos farmacéuticos', 'Suplementos', 'Vitaminas'],
      investment: '$820M',
      employment: '65K empleos',
      growth: '+9.8%',
      timeframe: 'short',
      priority: 5
    },
    {
      id: 'tics-software',
      name: 'TICS y Softwares',
      icon: Cpu,
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Desarrollo de software y servicios de tecnología de la información',
      highlights: ['Desarrollo de software', 'Aplicaciones móviles', 'Cloud computing', 'Ciberseguridad'],
      investment: '$750M',
      employment: '95K empleos',
      growth: '+15.8%',
      timeframe: 'short',
      priority: 6
    },
    {
      id: 'servicios-empresariales',
      name: 'Servicios empresariales, contact centers y BPOs',
      icon: Headphones,
      image: ServiciosGlobalesImg,
      description: 'Servicios de outsourcing, call centers y procesos de negocio',
      highlights: ['Contact centers', 'BPO', 'Back office services', 'Soporte técnico'],
      investment: '$950M',
      employment: '180K empleos',
      growth: '+8.7%',
      timeframe: 'short',
      priority: 7
    },
    {
      id: 'energia',
      name: 'Energía',
      icon: Zap,
      image: EnergiasLimpiasImg,
      description: 'Generación y distribución de energía renovable',
      highlights: ['Energía hidroeléctrica', 'Energía solar', 'Energía eólica', 'Biomasa'],
      investment: '$3.2B',
      employment: '45K empleos',
      growth: '+12.3%',
      timeframe: 'short',
      priority: 8
    },
    // Mediano Plazo
    {
      id: 'servicios-compartidos',
      name: 'Centro de Servicios Compartidos',
      icon: Building,
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Centros de servicios compartidos para empresas multinacionales',
      highlights: ['Servicios corporativos', 'Finanzas compartidas', 'IT compartido', 'RH compartido'],
      investment: '$1.1B',
      employment: '145K empleos',
      growth: '+10.5%',
      timeframe: 'medium',
      priority: 9
    },
    {
      id: 'electrico-electronico',
      name: 'Eléctrico-Electrónico (autopartes)',
      icon: Battery,
      image: 'https://images.pexels.com/photos/190574/pexels-photo-190574.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Manufactura de componentes eléctricos y electrónicos para la industria automotriz',
      highlights: ['Autopartes eléctricas', 'Componentes electrónicos', 'Sensores', 'Sistemas de control'],
      investment: '$980M',
      employment: '115K empleos',
      growth: '+11.2%',
      timeframe: 'medium',
      priority: 10
    },
    {
      id: 'servicios-salud',
      name: 'Servicios de Salud',
      icon: Heart,
      image: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Servicios médicos especializados y turismo de salud',
      highlights: ['Turismo médico', 'Telemedicina', 'Clínicas especializadas', 'Atención domiciliaria'],
      investment: '$890M',
      employment: '125K empleos',
      growth: '+11.3%',
      timeframe: 'medium',
      priority: 11
    },
    {
      id: 'metalmecanica',
      name: 'Metalmecánica',
      icon: Wrench,
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fabricación de productos metálicos y maquinaria',
      highlights: ['Estructuras metálicas', 'Maquinaria industrial', 'Herramientas', 'Componentes mecánicos'],
      investment: '$720M',
      employment: '95K empleos',
      growth: '+8.5%',
      timeframe: 'medium',
      priority: 12
    },
    {
      id: 'turismo',
      name: 'Turismo',
      icon: Plane,
      image: TurismoSostenibleImg,
      description: 'Desarrollo turístico sostenible y turismo cultural',
      highlights: ['Turismo cultural', 'Ecoturismo', 'Turismo de aventura', 'MICE'],
      investment: '$1.1B',
      employment: '320K empleos',
      growth: '+6.8%',
      timeframe: 'medium',
      priority: 13
    },
    // Largo Plazo
    {
      id: 'biotecnologia',
      name: 'Biotecnología',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Investigación y desarrollo en biotecnología agrícola y médica',
      highlights: ['Biotech agrícola', 'Medicina personalizada', 'Biocombustibles', 'Investigación genética'],
      investment: '$650M',
      employment: '45K empleos',
      growth: '+18.7%',
      timeframe: 'long',
      priority: 14
    },
    {
      id: 'dispositivos-medicos',
      name: 'Dispositivos y equipo médico',
      icon: Heart,
      image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Fabricación de dispositivos y equipos médicos especializados',
      highlights: ['Dispositivos médicos', 'Equipos de diagnóstico', 'Instrumental quirúrgico', 'Prótesis'],
      investment: '$580M',
      employment: '55K empleos',
      growth: '+16.4%',
      timeframe: 'long',
      priority: 15
    },
    {
      id: 'componentes-electronicos',
      name: 'Componentes y equipo electrónico',
      icon: Cpu,
      image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Manufactura de componentes electrónicos avanzados',
      highlights: ['Semiconductores', 'Circuitos integrados', 'Componentes PCB', 'Sensores avanzados'],
      investment: '$720M',
      employment: '65K empleos',
      growth: '+19.2%',
      timeframe: 'long',
      priority: 16
    },
    {
      id: 'ti-manufactura-avanzada',
      name: 'Tecnologías de la información para manufactura avanzada',
      icon: Factory,
      image: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Soluciones tecnológicas para la industria 4.0 y manufactura inteligente',
      highlights: ['IoT industrial', 'Automatización', 'IA para manufactura', 'Robótica'],
      investment: '$840M',
      employment: '75K empleos',
      growth: '+21.5%',
      timeframe: 'long',
      priority: 17
    }
  ];

  const timeframes = [
    { id: 'all', name: 'Todos los Sectores', count: 17, color: 'bg-sector-6' },
    { id: 'short', name: 'Corto Plazo', count: 8, color: 'bg-sector-3' },
    { id: 'medium', name: 'Mediano Plazo', count: 5, color: 'bg-sector-1' },
    { id: 'long', name: 'Largo Plazo', count: 4, color: 'bg-sector-2' }
  ];

  const filteredSectors = selectedTimeframe === 'all' 
    ? sectors 
    : sectors.filter(sector => sector.timeframe === selectedTimeframe);

  const sectorsPerSlide = 3;
  const totalSlides = Math.ceil(filteredSectors.length / sectorsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const getCurrentSectors = () => {
    const startIndex = currentSlide * sectorsPerSlide;
    return filteredSectors.slice(startIndex, startIndex + sectorsPerSlide);
  };

  // Reset slide when filter changes
  React.useEffect(() => {
    setCurrentSlide(0);
  }, [selectedTimeframe]);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-sector-6 via-sector-1 to-sector-3"
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  Sectores <span className="text-yellow-500">Estratégicos</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto mb-8"
                >
                  Descubre las oportunidades de inversión priorizadas según la estrategia nacional,
                  organizadas por horizontes temporales de implementación
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-sector-4 hover:brightness-110 text-gray-900 font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                    Explorar por plazo
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Descargar estrategia sectorial
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      {/* Timeframe Filters */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <div className="flex items-center justify-center mb-4">
              <Filter className="w-6 h-6 text-sector-6 mr-2" />
              <h2 className="text-2xl font-bold text-gray-900">Filtrar por Horizonte Temporal</h2>
            </div>
            <p className="text-gray-600">Selecciona el plazo de implementación para ver los sectores correspondientes</p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {timeframes.map((timeframe) => (
              <button
                key={timeframe.id}
                onClick={() => setSelectedTimeframe(timeframe.id as any)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedTimeframe === timeframe.id
                    ? `${timeframe.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                <div className="flex items-center space-x-2">
                  <span>{timeframe.name}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${
                    selectedTimeframe === timeframe.id
                      ? 'bg-white bg-opacity-20 text-white'
                      : 'bg-gray-100 text-gray-600'
                  }`}>
                    {timeframe.count}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors Carousel */}
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
              {selectedTimeframe === 'all' ? 'Todos los Sectores Estratégicos' :
               selectedTimeframe === 'short' ? 'Sectores de Corto Plazo' :
               selectedTimeframe === 'medium' ? 'Sectores de Mediano Plazo' :
               'Sectores de Largo Plazo'}
            </h2>
            <p className="text-xl text-gray-600">
              {filteredSectors.length} sectores priorizados con oportunidades de inversión
            </p>
          </motion.div>

          {/* Carousel Controls */}
          {totalSlides > 1 && (
            <div className="flex justify-center items-center mb-8 space-x-4">
              <button
                onClick={prevSlide}
                className="bg-sector-6 hover:brightness-110 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              
              <div className="flex space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      currentSlide === index ? 'bg-sector-6' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextSlide}
                className="bg-sector-6 hover:brightness-110 text-white p-3 rounded-full transition-colors duration-200"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          )}

          {/* Sectors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getCurrentSectors().map((sector, index) => {
              const Icon = sector.icon;
              return (
                <motion.div
                  key={sector.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img
                      src={sector.image}
                      alt={sector.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${
                        sector.timeframe === 'short' ? 'bg-sector-3' :
                        sector.timeframe === 'medium' ? 'bg-sector-1' :
                        'bg-sector-2'
                      }`}>
                        Prioridad #{sector.priority}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-sector-6-soft p-2 rounded-lg">
                        <Icon className="w-6 h-6 text-sector-6" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">{sector.name}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{sector.description}</p>
                    
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <DollarSign className="w-4 h-4 text-sector-3 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.investment}</div>
                        <div className="text-xs text-gray-600">Inversión</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <Users className="w-4 h-4 text-sector-6 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.employment}</div>
                        <div className="text-xs text-gray-600">Empleos</div>
                      </div>
                      <div className="text-center p-2 bg-gray-50 rounded-lg">
                        <TrendingUp className="w-4 h-4 text-sector-3 mx-auto mb-1" />
                        <div className="text-sm font-bold text-gray-900">{sector.growth}</div>
                        <div className="text-xs text-gray-600">Crecimiento</div>
                      </div>
                    </div>
                    
                    {/* Highlights */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {sector.highlights.slice(0, 2).map((highlight, highlightIndex) => (
                          <span
                            key={highlightIndex}
                            className="bg-sector-1-soft text-sector-2 px-2 py-1 rounded-full text-xs font-medium"
                          >
                            {highlight}
                          </span>
                        ))}
                        {sector.highlights.length > 2 && (
                          <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs font-medium">
                            +{sector.highlights.length - 2} más
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-2">
                      <Link
                        to={`/strategic-sectors/${sector.id}`}
                        className="bg-sector-6 hover:brightness-110 text-white font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm"
                      >
                        Conoce más
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                      <button className="border border-sector-6 text-sector-6 bg-sector-6-soft hover:brightness-110 font-semibold px-4 py-2 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm">
                        <Download className="w-4 h-4 mr-1" />
                        Ficha
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Show All Button */}
          {filteredSectors.length > sectorsPerSlide && (
            <div className="text-center mt-12">
              <div className="text-gray-600 mb-4">
                Mostrando {getCurrentSectors().length} de {filteredSectors.length} sectores
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-sector-6 to-sector-3 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Interesado en algún sector específico?
            </h2>
            <p className="text-xl mb-8 text-white/80">
              Nuestros especialistas pueden proporcionarte información detallada sobre cada uno de los sectores priorizados,
              análisis de mercado y conectarte con las oportunidades más relevantes según tu horizonte de inversión.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-sector-6 hover:brightness-95 font-semibold px-8 py-4 rounded-lg transition-colors duration-200 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Descargar estrategia sectorial completa
              </button>
              <Link
                to="/contact"
                className="border border-white text-white hover:bg-white hover:text-sector-6 font-semibold px-8 py-4 rounded-lg transition-all duration-200 flex items-center justify-center"
              >
                Habla con un especialista sectorial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StrategicSectors;
