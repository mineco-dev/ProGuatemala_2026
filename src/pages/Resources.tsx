import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileText, Download, Search, Play, Book, Globe,
  ExternalLink, Eye, Calendar, ChevronDown, ChevronUp
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import resImg from '../assets/images/portadas/5. CENTRO DE RECURSOS.jpeg';

interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  type: string;
  file_url: string | null;
  size: string;
  downloads: number;
  published_date: string;
  is_featured: boolean;
  language: string;
}

// Lista de documentos locales de la Ruta del Chip
const documentosDescargables = [
  { id: 1, name: 'Presentación Ruta del Chip', link: 'https://mineco.gob.gt/images/ruta_del_chip/0.%20Ruta%20del%20Chip_DESCRIPCION_compressed.pdf' },
  { id: 2, name: 'Infografía Ruta del Chip', link: 'https://mineco.gob.gt/images/ruta_del_chip/1.%20ONE%20PAGER%20RUTA%20DEL%20CHIP_compressed.pdf' },
  { id: 3, name: 'Cadena de valor de semiconductores', link: 'https://mineco.gob.gt/images/ruta_del_chip/2.%20One%20Pager%20Cadena%20de%20Valor_compressed.pdf' },
  { id: 4, name: 'Diseño semiconductores', link: 'https://mineco.gob.gt/images/ruta_del_chip/3.%20One%20Pager%20Diseno%20Semiconductores_compressed.pdf' },
  { id: 5, name: 'Industria de semiconductores', link: 'https://mineco.gob.gt/images/ruta_del_chip/8.%20Industria%20de%20Semiconductores%20-%20Ruta%20del%20Chip%20Gt_compressed.pdf' },
  { id: 6, name: 'Cadena de Valor Prototipado', link: 'https://mineco.gob.gt/images/ruta_del_chip/4.%20One%20Pager%20Cadena%20de%20Valor%20Prototipado_compressed.pdf' },
  { id: 7, name: 'Cuenta Pasos', link: 'https://mineco.gob.gt/images/ruta_del_chip/5.%20One%20Pager%20Cuenta%20Pasos%20-%20Ruta%20del%20Chip_compressed.pdf' },
  { id: 8, name: 'Sensor Agroclimático', link: 'https://mineco.gob.gt/images/ruta_del_chip/6.%20One%20Pager%20Sensor%20Agroclimatico_compressed.pdf' },
  { id: 9, name: 'Sensor de Amenazas', link: 'https://mineco.gob.gt/images/ruta_del_chip/7.%20One%20Pager%20Sensor%20de%20amenazas_compressed.pdf' },
  { id: 10, name: 'Talento Humano', link: 'https://mineco.gob.gt/images/ruta_del_chip/10.%20Eje%20Talento%20Humano%20-%20Ruta%20del%20Chip%20Gt_compressed.pdf' },
  { id: 11, name: 'Entorno Empresarial', link: 'https://mineco.gob.gt/images/ruta_del_chip/11.%20Eje%20Entorno%20Empresarial%20-%20Ruta%20del%20Chip%20Gt_compressed.pdf' },
  { id: 12, name: 'Infraestructura y Facilidades', link: 'https://mineco.gob.gt/images/ruta_del_chip/12.%20Eje%20Infraestructura%20y%20Facilidades%20-%20Ruta%20del%20Chip%20Gt_compressed.pdf' },
  { id: 13, name: 'Política Pública', link: 'https://mineco.gob.gt/images/ruta_del_chip/13.%20Eje%20Politica%20Publica%20-%20Ruta%20del%20Chip%20Gt_compressed.pdf' },
  { id: 14, name: 'Infografía Ruta del Chip (inglés)', link: 'https://mineco.gob.gt/images/ruta_del_chip/ONE%20PAGER%20RUTA%20DEL%20CHIP%20Ingles.pdf' }
];

const digitalTools = [
  {
    name: 'VUCE - Ventanilla Única de Comercio Exterior',
    description: 'Plataforma para trámites de importación y exportación',
    url: 'https://www.vuce.gob.gt/',
    type: 'Portal Gubernamental'
  },
  {
    name: 'VUPE - Ventanilla Única de Permisos de Edificación',
    description: 'Sistema para permisos de construcción y edificación',
    url: 'https://vupe.minfin.gob.gt/',
    type: 'Portal Gubernamental'
  },
  {
    name: 'VAC - Ventanilla Ágil de la Construcción',
    description: 'Facilitación de trámites para proyectos de construcción',
    url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-construccion',
    type: 'Portal Gubernamental'
  },
  {
    name: 'VAI - Ventanilla Ágil de la Industria',
    description: 'Trámites empresariales e industriales simplificados',
    url: 'https://www.mineco.gob.gt/ventanilla-agil-de-la-industria',
    type: 'Portal Gubernamental'
  }
];

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isToolsExpanded, setIsToolsExpanded] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'Todos' },
    { id: 'ruta_chip', name: 'Ruta del Chip' },
    { id: 'guides', name: 'Guías' },
    { id: 'reports', name: 'Informes' },
    { id: 'legal', name: 'Marco Legal' },
    { id: 'sectors', name: 'Sectores' },
    { id: 'videos', name: 'Videos' }
  ];

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const chipResources: Resource[] = documentosDescargables.map((doc) => ({
        id: `chip-${doc.id}`,
        title: doc.name,
        description: 'Documento oficial e infografía de la estrategia Ruta del Chip Guatemala.',
        category: 'ruta_chip',
        type: 'PDF',
        file_url: doc.link,
        size: 'PDF',
        downloads: 0,
        published_date: new Date().toISOString(),
        is_featured: false,
        language: doc.name.toLowerCase().includes('inglés') ? 'EN' : 'ES'
      }));

      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;

      setResources([...chipResources, ...(data || [])]);
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryCounts = () => {
    const counts: { [key: string]: number } = {
      all: resources.length,
      ruta_chip: 0,
      guides: 0,
      reports: 0,
      legal: 0,
      sectors: 0,
      videos: 0
    };

    resources.forEach((resource) => {
      if (counts[resource.category] !== undefined) {
        counts[resource.category]++;
      }
    });

    return categories.map((cat) => ({
      ...cat,
      count: counts[cat.id] || 0
    }));
  };

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter((resource) => resource.is_featured);
  const categoriesWithCounts = getCategoryCounts();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return Play;
      case 'PDF':
      default:
        return FileText;
    }
  };

  const handleOpenDocument = (url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const scrollToResources = () => {
    const section = document.getElementById('catalogo-recursos');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Cargando recursos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-screen overflow-hidden">
        <div className="relative h-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700"
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20"
              style={{ backgroundImage: `url(${resImg})` }}
            ></div>
            <div className="relative h-full flex items-center justify-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                <motion.h1
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
                >
                  Centro de <span className="text-yellow-500">Recursos</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
                  Accede a guías, informes, estudios, documentos de la Ruta del Chip y herramientas digitales
                  para informar tus decisiones de inversión
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button
                    onClick={scrollToResources}
                    className="bg-support-500 hover:bg-support-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg"
                  >
                    Explorar recursos
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCategory('guides');
                      scrollToResources();
                    }}
                    className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
                  >
                    Descargar guías
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
      {featuredResources.length > 0 && (
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
                Recursos Destacados
              </h2>
              <p className="text-xl text-gray-600">
                Los documentos y materiales más importantes para inversionistas
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredResources.map((resource, index) => {
                const Icon = getTypeIcon(resource.type);
                return (
                  <motion.div
                    key={resource.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 border border-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between mb-4">
                        <div
                          className={`p-4 rounded-2xl shadow-lg transform hover:rotate-6 transition-transform duration-300 ${
                            resource.type === 'Video'
                              ? 'bg-gradient-to-br from-red-400 to-pink-500'
                              : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                          }`}
                        >
                          <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                        </div>
                        <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                          Destacado
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">
                        {resource.title}
                      </h3>
                      <p className="text-gray-700 mb-6 text-base leading-relaxed">
                        {resource.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.type}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.size}</span>
                          <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.language}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                        <div className="flex items-center text-sm text-gray-500">
                          <div className="bg-green-100 p-1.5 rounded-md mr-2">
                            <Download className="w-4 h-4 text-green-600" />
                          </div>
                          <span className="font-medium">{resource.downloads?.toLocaleString() || 0} descargas</span>
                        </div>
                        <button
                          onClick={() => handleOpenDocument(resource.file_url)}
                          className="bg-support-500 hover:bg-support-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all duration-300 flex items-center shadow-md hover:shadow-lg transform hover:scale-105"
                        >
                          <Download className="w-4 h-4 mr-2" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter */}
      <section id="catalogo-recursos" className="py-8 bg-gray-50 border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md w-full">
              <Search className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-white border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all shadow-sm"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 justify-center lg:justify-end">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource, index) => {
              const Icon = getTypeIcon(resource.type);
              return (
                <motion.div
                  key={resource.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-100 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <div
                        className={`p-3 rounded-xl shadow-md ${
                          resource.type === 'Video'
                            ? 'bg-gradient-to-br from-red-400 to-pink-500'
                            : 'bg-gradient-to-br from-blue-400 to-indigo-500'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {resource.is_featured && (
                        <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                          Destacado
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 tracking-tight">
                      {resource.title}
                    </h3>
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">
                      {resource.description}
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.type}</span>
                        <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.size}</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-blue-100 p-1 rounded-md mr-1">
                          <Calendar className="w-3 h-3 text-blue-600" />
                        </div>
                        <span className="font-medium">
                          {new Date(resource.published_date).toLocaleDateString()}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                      <span className="bg-blue-100 text-blue-800 px-2.5 py-1 rounded-md font-semibold text-xs">
                        {resource.language}
                      </span>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleOpenDocument(resource.file_url)}
                          className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200"
                          title="Ver documento"
                        >
                          <Eye className="w-4 h-4 text-gray-700" />
                        </button>
                        <button
                          onClick={() => handleOpenDocument(resource.file_url)}
                          className="bg-support-500 hover:bg-support-600 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 inline-flex items-center"
                        >
                          <Download className="w-4 h-4 mr-1.5" />
                          Descargar
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-200 mt-6">
              <div className="text-gray-400 text-6xl mb-4">📄</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron recursos</h3>
              <p className="text-gray-600">Intenta cambiar los filtros o el término de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* Digital Tools */}
      <section className="py-16 bg-white border-t border-gray-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Herramientas Digitales
            </h2>
            <p className="text-xl text-gray-600">
              Plataformas oficiales para simplificar tus trámites empresariales
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setIsToolsExpanded(!isToolsExpanded)}
                className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white flex items-center justify-between hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <Globe className="w-8 h-8 drop-shadow-lg text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl text-white font-bold tracking-tight">
                      Ventanillas Únicas Digitales
                    </h3>
                    <p className="text-white/90 text-base">
                      Accede a las plataformas gubernamentales para trámites empresariales
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-base font-semibold hidden sm:inline">
                    {isToolsExpanded ? 'Ocultar' : 'Ver herramientas'}
                  </span>
                  {isToolsExpanded ? <ChevronUp className="w-6 h-6" /> : <ChevronDown className="w-6 h-6" />}
                </div>
              </button>

              <AnimatePresence>
                {isToolsExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="p-8 bg-gray-50">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {digitalTools.map((tool, index) => (
                          <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 border border-blue-200 hover:shadow-xl transition-all duration-500 hover:border-blue-400 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                          >
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-3">
                                  <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl shadow-lg">
                                    <Globe className="w-6 h-6 text-white drop-shadow-lg" />
                                  </div>
                                  <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                    {tool.type}
                                  </span>
                                </div>
                                <h4 className="text-xl font-bold text-gray-900 mb-2 tracking-tight">
                                  {tool.name}
                                </h4>
                                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                                  {tool.description}
                                </p>
                                <div className="flex items-center space-x-2">
                                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                                  <span className="text-green-600 text-xs font-semibold">Disponible 24/7</span>
                                </div>
                              </div>
                              <a
                                href={tool.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-4 bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white p-3.5 rounded-2xl transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-110 inline-block"
                                title="Visitar portal"
                              >
                                <ExternalLink className="w-5 h-5 drop-shadow-lg" />
                              </a>
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      <div className="mt-8 p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg">
                        <div className="flex items-start space-x-4">
                          <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-2xl flex-shrink-0 shadow-lg">
                            <Book className="w-6 h-6 text-white drop-shadow-lg" />
                          </div>
                          <div>
                            <h4 className="font-bold text-gray-900 mb-2 text-lg">
                              ¿Necesitas ayuda con los trámites?
                            </h4>
                            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                              Nuestro equipo puede guiarte en el uso de estas plataformas y acompañarte en tus trámites empresariales.
                            </p>
                            <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                              Solicitar asistencia
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Mantente Actualizado
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Suscríbete para recibir los últimos recursos, estudios e informes directamente en tu correo electrónico.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-white focus:outline-none"
              />
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
                Suscribirse
              </button>
            </div>
            <p className="text-blue-100 text-xs mt-4">
              Enviamos actualizaciones mensualmente. Puedes cancelar en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;