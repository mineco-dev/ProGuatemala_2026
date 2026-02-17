import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FileText, Download, Search, Filter,
  Play, BarChart3, Book, Globe,
  ExternalLink, Eye, Calendar, ChevronDown, ChevronUp
} from 'lucide-react';
import { supabase } from '../lib/supabase';

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

const Resources: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [isToolsExpanded, setIsToolsExpanded] = useState(false);
  const [resources, setResources] = useState<Resource[]>([]);
  const [loading, setLoading] = useState(true);

  const categories = [
    { id: 'all', name: 'Todos', count: 0 },
    { id: 'guides', name: 'Guías', count: 0 },
    { id: 'reports', name: 'Informes', count: 0 },
    { id: 'legal', name: 'Marco Legal', count: 0 },
    { id: 'sectors', name: 'Sectores', count: 0 },
    { id: 'videos', name: 'Videos', count: 0 }
  ];

  useEffect(() => {
    fetchResources();
  }, []);

  const fetchResources = async () => {
    try {
      const { data, error } = await supabase
        .from('resources')
        .select('*')
        .order('published_date', { ascending: false });

      if (error) throw error;

      if (data) {
        setResources(data);
      }
    } catch (error) {
      console.error('Error fetching resources:', error);
    } finally {
      setLoading(false);
    }
  };

  const getCategoryCounts = () => {
    const counts: { [key: string]: number } = {
      all: resources.length,
      guides: 0,
      reports: 0,
      legal: 0,
      sectors: 0,
      videos: 0
    };

    resources.forEach(resource => {
      if (counts[resource.category] !== undefined) {
        counts[resource.category]++;
      }
    });

    return categories.map(cat => ({
      ...cat,
      count: counts[cat.id] || 0
    }));
  };

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

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredResources = resources.filter(resource => resource.is_featured);
  const categoriesWithCounts = getCategoryCounts();

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Video':
        return Play;
      case 'PDF':
        return FileText;
      default:
        return FileText;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Video':
        return 'text-red-600 bg-red-100';
      case 'PDF':
        return 'text-blue-600 bg-blue-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Cargando recursos...</p>
        </div>
      </div>
    );
  }

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
                  Centro de <span className="text-yellow-500">Recursos</span>
                </motion.h1>
                <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="text-xl md:text-2xl text-white max-w-4xl mx-auto mb-8"
                >
                  Accede a guías, informes, estudios y herramientas digitales 
                  para informar tus decisiones de inversión
                </motion.p>
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                  <button className="bg-support-500 hover:bg-support-400 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
                    Explorar recursos
                  </button>
                  <button className="border border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4 rounded-lg transition-all duration-200">
                    Descargar guías
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Resources */}
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
                  className="bg-gradient-to-br from-white via-blue-50/30 to-teal-50/30 border border-blue-100 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 backdrop-blur-sm"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`p-4 rounded-2xl shadow-lg transform hover:rotate-6 transition-transform duration-300 ${
                      resource.type === 'Video' ? 'bg-gradient-to-br from-red-400 to-pink-500' :
                      'bg-gradient-to-br from-blue-400 to-indigo-500'
                    }`}>
                      <Icon className="w-7 h-7 text-white drop-shadow-lg" />
                    </div>
                    <span className="bg-support-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      Destacado
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight leading-tight">{resource.title}</h3>
                  <p className="text-gray-700 mb-6 text-base leading-relaxed">{resource.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.type}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.size}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.language}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500">
                      <div className="bg-green-100 p-1 rounded-md mr-2">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{resource.downloads?.toLocaleString() || 0} descargas</span>
                    </div>
                    <button className="bg-support-500 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 flex items-center shadow-lg hover:shadow-xl transform hover:scale-105">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar recursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categoriesWithCounts.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-700 hover:bg-blue-50'
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
      <section className="py-16 bg-gray-50">
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
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:scale-105 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className={`p-3 rounded-xl shadow-md ${
                      resource.type === 'Video' ? 'bg-gradient-to-br from-red-400 to-pink-500' :
                      'bg-gradient-to-br from-blue-400 to-indigo-500'
                    }`}>
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
                  
                  <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.type}</span>
                      <span className="bg-gray-100 px-2 py-1 rounded-md font-medium">{resource.size}</span>
                    </div>
                    <div className="flex items-center">
                      <div className="bg-blue-100 p-1 rounded-md mr-1">
                        <Calendar className="w-3 h-3 text-white" />
                      </div>
                      <span className="font-medium">{new Date(resource.published_date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <div className="bg-green-100 p-1 rounded-md">
                        <Download className="w-4 h-4 text-white" />
                      </div>
                      <span className="font-medium">{resource.downloads?.toLocaleString() || 0}</span>
                      <span className="bg-blue-100 text-white px-2 py-1 rounded-md font-medium text-xs">{resource.language}</span>
                    </div>
                    <div className="flex space-x-2">
                      <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded-lg transition-colors duration-200">
                        <Eye className="w-4 h-4" />
                        </button>
                        <button className="bg-support-500 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105">
                        Descargar
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
          
          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 text-6xl mb-4">📄</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron recursos</h3>
              <p className="text-gray-600">Intenta cambiar los filtros o el término de búsqueda</p>
            </div>
          )}
        </div>
      </section>

      {/* Digital Tools */}
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
              Herramientas Digitales
            </h2>
            <p className="text-xl text-gray-600">
              Plataformas oficiales para simplificar tus trámites empresariales
            </p>
          </motion.div>
          
          {/* Accordion Container */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            >
              {/* Accordion Header */}
              <button
                onClick={() => setIsToolsExpanded(!isToolsExpanded)}
                className="w-full px-8 py-6 bg-gradient-to-r from-blue-600 to-teal-600 text-white flex items-center justify-between hover:from-blue-700 hover:to-teal-700 transition-all duration-300"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 backdrop-blur-sm p-4 rounded-2xl shadow-lg">
                    <Globe className="w-8 h-8 drop-shadow-lg text-white" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-2xl text-white font-bold tracking-tight">Ventanillas Únicas Digitales</h3>
                    <p className="text-white text-base">Accede a las plataformas gubernamentales para trámites empresariales</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-base font-semibold">
                    {isToolsExpanded ? 'Ocultar' : 'Ver herramientas'}
                  </span>
                  {isToolsExpanded ? (
                    <ChevronUp className="w-6 h-6" />
                  ) : (
                    <ChevronDown className="w-6 h-6" />
                  )}
                </div>
              </button>
              
              {/* Accordion Content */}
              <motion.div
                initial={false}
                animate={{
                  height: isToolsExpanded ? 'auto' : 0,
                  opacity: isToolsExpanded ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <div className="p-8 bg-gray-50">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {digitalTools.map((tool, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ 
                          opacity: isToolsExpanded ? 1 : 0,
                          y: isToolsExpanded ? 0 : 20
                        }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-8 border border-blue-200 hover:shadow-xl transition-all duration-500 hover:border-blue-400 transform hover:scale-105 hover:-translate-y-1 backdrop-blur-sm"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center space-x-3 mb-3">
                              <div className="bg-gradient-to-br from-blue-400 to-indigo-500 p-3 rounded-2xl shadow-lg">
                                <Globe className="w-6 h-6 text-white drop-shadow-lg" />
                              </div>
                              <span className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-md">
                                {tool.type}
                              </span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{tool.name}</h4>
                            <p className="text-gray-700 text-base mb-4 leading-relaxed">{tool.description}</p>
                            <div className="flex items-center space-x-2">
                              <div className="w-3 h-3 bg-green-500 rounded-full shadow-sm animate-pulse"></div>
                              <span className="text-green-600 text-sm font-semibold">Disponible 24/7</span>
                            </div>
                          </div>
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-4 bg-gradient-to-br from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white p-4 rounded-2xl transition-all duration-300 flex-shrink-0 shadow-lg hover:shadow-xl transform hover:scale-110 inline-block"
                          >
                            <ExternalLink className="w-6 h-6 drop-shadow-lg" />
                          </a>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Additional Info */}
                  <div className="mt-8 p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-200 shadow-lg">
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-to-br from-blue-500 to-indigo-500 p-3 rounded-2xl flex-shrink-0 shadow-lg">
                        <Book className="w-6 h-6 text-white drop-shadow-lg" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-3 text-lg">¿Necesitas ayuda con los trámites?</h4>
                        <p className="text-gray-700 text-base mb-4 leading-relaxed">
                          Nuestro equipo puede guiarte en el uso de estas plataformas y acompañarte en tus trámites empresariales.
                        </p>
                        <button className="bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                          Solicitar asistencia
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Mantente Actualizado
            </h2>
            <p className="text-xl mb-8 text-gray-900">
              Suscríbete para recibir los últimos recursos, estudios e informes 
              directamente en tu correo electrónico.
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
            <p className="text-blue-200 text-sm mt-4">
              Enviamos actualizaciones mensualmente. Puedes cancelar en cualquier momento.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Resources;