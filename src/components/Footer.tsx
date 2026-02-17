import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="https://www.pronacom.org/wp-content/uploads/2025/01/LOGO_PROGUATEMALA_VA1-e1737253818887-300x120.png" 
                alt="ProGuatemala" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-gray-400 text-sm">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.quick-links')}</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/why-guatemala" className="text-gray-400 hover:text-white">{t('nav.why-guatemala')}</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-white">{t('nav.services')}</Link></li>
              <li><Link to="/strategic-sectors" className="text-gray-400 hover:text-white">{t('nav.sectors')}</Link></li>
              <li><Link to="/legal-incentives" className="text-gray-400 hover:text-white">Marco Legal</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-white">{t('nav.resources')}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Promoción de Inversiones</li>
              <li className="text-gray-400">Softlanding</li>
              <li className="text-gray-400">Inteligencia de Inversión</li>
              <li className="text-gray-400">Aftercare</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>proguatemala@mineco.gob.gt</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="font-medium">+502 2412-0200 ext 3500</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-400 hover:text-blue-400 transition-colors duration-300">
                <MapPin className="w-4 h-4" />
                <span className="font-medium">8a. Avenida 10-43 Zona 1 Ciudad de Guatemala, Guatemala</span>
              </div>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a href="https://www.linkedin.com/company/proguatemala/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-blue-400 hover:bg-gray-700 transition-all duration-300 transform hover:scale-110">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm font-medium">
            {t('footer.rights')}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <Link to="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium">{t('footer.privacy')}</Link>
            <Link to="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300 font-medium">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;