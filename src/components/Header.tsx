import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { smoothScrollTo } from '../lib/scroll';
import BrandLogos from './BrandLogos';

interface NavSection {
  id: string;
  name: string;
}

interface NavItem {
  name: string;
  href: string;
  sections?: NavSection[];
}

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const navigation: NavItem[] = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.services'), href: '/services' },
    {
      name: t('nav.why-guatemala'),
      href: '/why-guatemala',
      sections: [
        { id: 'why-estadisticas', name: t('why.stats.title') },
        { id: 'advantages-grid', name: t('why.advantages.title') },
        { id: 'stats-grid', name: t('why.map.title') },
        { id: 'why-parques', name: t('why.parks.title') },
        { id: 'why-comparativa', name: t('why.comparison.title') },
      ],
    },
    {
      name: t('nav.sectors'),
      href: '/strategic-sectors',
      sections: [
        { id: 'sectores-estrategicos', name: t('nav.sectors.strategic') },
        { id: 'ruta-del-chip', name: t('nav.sectors.rutaChip') },
      ],
    },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.press'), href: '/prensa' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  // Va a una seccion de una pagina: si ya estamos en ella hace scroll animado;
  // si no, navega a la pagina con el ancla y la propia pagina hace el scroll.
  const goToSection = (href: string, id: string) => {
    setIsMenuOpen(false);
    if (location.pathname === href) {
      smoothScrollTo(id);
    } else {
      navigate(`${href}#${id}`);
    }
  };

  return (
    <>
      {/* Main Header */}
      <header className="shadow-md sticky top-0 z-50 border-t border-white/10" style={{ background: '#11223B' }}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <BrandLogos variant="white" imgClassName="h-12 sm:h-14 w-auto" className="gap-3 sm:gap-4" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) =>
              item.sections ? (
                <div key={item.name} className="relative group">
                  <Link
                    to={item.href}
                    className={`flex items-center gap-1 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                      location.pathname === item.href
                        ? 'text-[#11223B]'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    style={location.pathname === item.href ? { background: '#2BB9DB' } : {}}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />
                  </Link>
                  {/* Desplegable (aparece al pasar el cursor) */}
                  <div className="absolute left-0 top-full pt-2 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-200 z-50">
                    <div className="rounded-md shadow-lg border border-white/10 py-2 min-w-[240px]" style={{ background: '#0E1D32' }}>
                      {item.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => goToSection(item.href, section.id)}
                          className="block w-full text-left px-4 py-2 text-sm text-white/90 hover:bg-white/10 transition-colors duration-150"
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    location.pathname === item.href
                      ? 'text-[#11223B]'
                      : 'text-white/90 hover:bg-white/10'
                  }`}
                  style={location.pathname === item.href ? { background: '#2BB9DB' } : {}}
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-white/90 hover:bg-white/10 rounded-md"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 rounded-md shadow-lg border border-white/10 overflow-hidden" style={{ background: '#0E1D32' }}>
                  <button
                    onClick={() => {setLanguage('es'); setIsLangOpen(false);}}
                    className={`block w-full px-4 py-2 text-sm hover:bg-white/10 ${language === 'es' ? 'text-[#11223B]' : 'text-white/90'}`}
                    style={language === 'es' ? { background: '#2BB9DB' } : {}}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => {setLanguage('en'); setIsLangOpen(false);}}
                    className={`block w-full px-4 py-2 text-sm hover:bg-white/10 ${language === 'en' ? 'text-[#11223B]' : 'text-white/90'}`}
                    style={language === 'en' ? { background: '#2BB9DB' } : {}}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-white/90 hover:bg-white/10"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      location.pathname === item.href
                        ? 'text-[#11223B]'
                        : 'text-white/90 hover:bg-white/10'
                    }`}
                    style={location.pathname === item.href ? { background: '#2BB9DB' } : {}}
                  >
                    {item.name}
                  </Link>
                  {item.sections && (
                    <div className="ml-3 mt-1 mb-2 space-y-1 border-l-2 border-white/20 pl-3">
                      {item.sections.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => goToSection(item.href, section.id)}
                          className="block w-full text-left px-3 py-2 rounded-md text-sm text-white/80 hover:bg-white/10"
                        >
                          {section.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </header>
    </>
  );
};

export default Header;