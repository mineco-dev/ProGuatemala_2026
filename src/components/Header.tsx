import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronDown, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  const navigation = [
    { name: t('nav.home'), href: '/' },
    { name: t('nav.why-guatemala'), href: '/why-guatemala' },
    { name: t('nav.sectors'), href: '/strategic-sectors' },
    { name: t('nav.about'), href: '/about' },
    { name: t('nav.resources'), href: '/resources' },
    { name: t('nav.contact'), href: '/contact' },
  ];

  return (
    <>
      {/* Top Social Menu */}
      <div className="text-white py-2 hidden md:block" style={{ background: '#021049' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-white">{t('footer.follow')}:</span>
              <div className="flex space-x-3">
                <a 
                  href="https://www.linkedin.com/company/proguatemala/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-white transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <a 
                href="mailto:proguatemala@mineco.gob.gt" 
                className="text-white hover:text-white transition-colors duration-200"
              >
                proguatemala@mineco.gob.gt
              </a>
              <span className="text-blue-200">|</span>
              <a 
                href="tel:+50224120200" 
                className="text-white hover:text-white transition-colors duration-200"
              >
                +502 2412-0200 ext 3500
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="https://www.pronacom.org/wp-content/uploads/2025/01/LOGO_PROGUATEMALA_VA1-e1737253818887-300x120.png" 
              alt="ProGuatemala" 
              className="h-12 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.href
                    ? 'text-gray-900'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                style={location.pathname === item.href ? { background: '#FFDB60' } : {}}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector & Mobile Menu Button */}
          <div className="flex items-center space-x-2">
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
              >
                <Globe className="w-4 h-4" />
                <span>{language.toUpperCase()}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isLangOpen && (
                <div className="absolute right-0 mt-2 w-24 bg-white rounded-md shadow-lg border">
                  <button
                    onClick={() => {setLanguage('es'); setIsLangOpen(false);}}
                    className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'es' ? 'text-gray-900' : ''}`}
                    style={language === 'es' ? { background: '#FFDB60' } : {}}
                  >
                    ES
                  </button>
                  <button
                    onClick={() => {setLanguage('en'); setIsLangOpen(false);}}
                    className={`block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 ${language === 'en' ? 'text-gray-900' : ''}`}
                    style={language === 'en' ? { background: '#FFDB60' } : {}}
                  >
                    EN
                  </button>
                </div>
              )}
            </div>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100"
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
            className="lg:hidden border-t border-gray-200"
          >
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${
                    location.pathname === item.href
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  style={location.pathname === item.href ? { background: '#FFDB60' } : {}}
                >
                  {item.name}
                </Link>
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