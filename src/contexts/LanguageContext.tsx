import React, { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'es' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const translations = {
  es: {
    // Navigation
    'nav.home': 'Inicio',
    'nav.why-guatemala': 'Por qué Guatemala',
    'nav.services': 'Servicios',
    'nav.sectors': 'Sectores',
    'nav.about': 'Nosotros',
    'nav.resources': 'Recursos',
    'nav.contact': 'Contacto',
    
    // Home Page
    'home.hero.title': 'El momento de invertir en Guatemala es',
    'home.hero.highlight': 'ahora',
    'home.hero.subtitle': 'Te acompañamos en cada etapa de tu inversión con servicios especializados y el respaldo institucional que necesitas para crecer.',
    'home.hero.download': 'Descargar Guía del Inversionista',
    'home.hero.contact': 'Habla con un asesor',
    
    'home.why.title': '¿Por qué elegir Guatemala?',
    'home.why.subtitle': 'Ventajas competitivas que posicionan a Guatemala como el destino de inversión ideal en Centroamérica',
    
    'home.advantages.location.title': 'Ubicación Estratégica',
    'home.advantages.location.desc': 'Puerta de entrada a Centroamérica y conexión entre Norte y Sudamérica',
    'home.advantages.talent.title': 'Talento Humano',
    'home.advantages.talent.desc': 'Población joven, capacitada y con dominio de idiomas',
    'home.advantages.incentives.title': 'Incentivos Fiscales',
    'home.advantages.incentives.desc': 'Régimen de zonas francas y beneficios competitivos',
    'home.advantages.support.title': 'Apoyo Institucional',
    'home.advantages.support.desc': 'Acompañamiento integral durante todo el proceso de inversión',
    
    'home.sectors.title': 'Sectores Estratégicos',
    'home.sectors.subtitle': 'Descubre las oportunidades de inversión en los sectores más dinámicos de Guatemala',
    'home.sectors.view-all': 'Ver todos los sectores',
    'home.sectors.learn-more': 'Conoce más',
    
    'home.access.title': 'Acceso Rápido',
    'home.access.subtitle': 'Herramientas y recursos esenciales para tu proceso de inversión',
    'home.access.resources.title': 'Centro de Recursos',
    'home.access.resources.desc': 'Accede a guías, informes y documentos clave para tu inversión',
    'home.access.resources.action': 'Explorar recursos',
    'home.access.legal.title': 'Requisitos Legales',
    'home.access.legal.desc': 'Conoce el marco legal y los requisitos para establecer tu empresa',
    'home.access.legal.action': 'Ver requisitos',
    'home.access.contact.title': 'Contacto Rápido',
    'home.access.contact.desc': 'Habla directamente con nuestros expertos en inversión',
    'home.access.contact.action': 'Contactar ahora',
    
    'home.cta.title': '¿Listo para invertir en Guatemala?',
    'home.cta.subtitle': 'Nuestro equipo de expertos está disponible para acompañarte en cada paso de tu proceso de inversión. ¡Comencemos hoy!',
    'home.cta.info': 'Solicitar información',
    'home.cta.meeting': 'Agendar reunión',
    
    // Footer
    'footer.description': 'Promovemos la inversión extranjera directa en Guatemala, conectando oportunidades globales con el potencial nacional.',
    'footer.quick-links': 'Enlaces Rápidos',
    'footer.services': 'Servicios',
    'footer.contact': 'Contacto',
    'footer.follow': 'Síguenos en redes sociales',
    'footer.rights': '© 2024 ProGuatemala. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Uso',
    
    // Common
    'common.download': 'Descargar',
    'common.contact': 'Contacto',
    'common.learn-more': 'Conoce más',
    'common.read-more': 'Leer más',
    'common.view-all': 'Ver todos',
    'common.back': 'Volver',
    'common.next': 'Siguiente',
    'common.previous': 'Anterior',
    'common.close': 'Cerrar',
    'common.open': 'Abrir',
    'common.search': 'Buscar',
    'common.filter': 'Filtrar',
    'common.all': 'Todos',
    'common.loading': 'Cargando...',
    'common.error': 'Error',
    'common.success': 'Éxito',
    'common.warning': 'Advertencia',
    'common.info': 'Información',
    
    // GDPR
    'gdpr.title': 'Protección de Datos y Privacidad',
    'gdpr.description': 'Utilizamos cookies y tecnologías similares para mejorar su experiencia de navegación, analizar el tráfico del sitio web y personalizar el contenido. Al hacer clic en "Aceptar todo", usted acepta el uso de todas las cookies.',
    'gdpr.details': 'Ver detalles y configurar preferencias',
    'gdpr.accept-all': 'Aceptar todo',
    'gdpr.reject-all': 'Rechazar todo',
    'gdpr.configure': 'Configurar',
    'gdpr.settings-title': 'Configuración de Cookies y Privacidad',
    'gdpr.necessary': 'Cookies Necesarias',
    'gdpr.analytics': 'Cookies de Análisis',
    'gdpr.marketing': 'Cookies de Marketing',
    'gdpr.functional': 'Cookies Funcionales',
    'gdpr.always-active': 'Siempre activas',
    'gdpr.save-preferences': 'Guardar preferencias',
    'gdpr.necessary.desc': 'Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.',
    'gdpr.analytics.desc': 'Nos ayudan a entender cómo los visitantes interactúan con el sitio web recopilando información de forma anónima.',
    'gdpr.marketing.desc': 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas publicitarias.',
    'gdpr.functional.desc': 'Permiten funcionalidades mejoradas y personalización, como videos y chat en vivo.',
    'gdpr.necessary.items': '• Autenticación y seguridad\n• Preferencias de idioma\n• Funcionalidad básica del sitio',
    'gdpr.analytics.items': '• Google Analytics\n• Estadísticas de uso\n• Métricas de rendimiento',
    'gdpr.marketing.items': '• Publicidad personalizada\n• Seguimiento de conversiones\n• Remarketing',
    'gdpr.functional.items': '• Chat en vivo\n• Videos integrados\n• Mapas interactivos',
    'gdpr.privacy-notice': 'Para más información sobre cómo procesamos sus datos, consulte nuestra',
    'gdpr.privacy-policy': 'Política de Privacidad',
    'gdpr.terms': 'Términos de Uso',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.why-guatemala': 'Why Guatemala',
    'nav.services': 'Services',
    'nav.sectors': 'Sectors',
    'nav.about': 'About Us',
    'nav.resources': 'Resources',
    'nav.contact': 'Contact',
    
    // Home Page
    'home.hero.title': 'The time to invest in Guatemala is',
    'home.hero.highlight': 'now',
    'home.hero.subtitle': 'We accompany you at every stage of your investment with specialized services and the institutional support you need to grow.',
    'home.hero.download': 'Download Investor Guide',
    'home.hero.contact': 'Talk to an advisor',
    
    'home.why.title': 'Why choose Guatemala?',
    'home.why.subtitle': 'Competitive advantages that position Guatemala as the ideal investment destination in Central America',
    
    'home.advantages.location.title': 'Strategic Location',
    'home.advantages.location.desc': 'Gateway to Central America and connection between North and South America',
    'home.advantages.talent.title': 'Human Talent',
    'home.advantages.talent.desc': 'Young, trained population with language skills',
    'home.advantages.incentives.title': 'Tax Incentives',
    'home.advantages.incentives.desc': 'Free trade zone regime and competitive benefits',
    'home.advantages.support.title': 'Institutional Support',
    'home.advantages.support.desc': 'Comprehensive support throughout the entire investment process',
    
    'home.sectors.title': 'Strategic Sectors',
    'home.sectors.subtitle': 'Discover investment opportunities in Guatemala\'s most dynamic sectors',
    'home.sectors.view-all': 'View all sectors',
    'home.sectors.learn-more': 'Learn more',
    
    'home.access.title': 'Quick Access',
    'home.access.subtitle': 'Essential tools and resources for your investment process',
    'home.access.resources.title': 'Resource Center',
    'home.access.resources.desc': 'Access guides, reports and key documents for your investment',
    'home.access.resources.action': 'Explore resources',
    'home.access.legal.title': 'Legal Requirements',
    'home.access.legal.desc': 'Learn about the legal framework and requirements to establish your company',
    'home.access.legal.action': 'View requirements',
    'home.access.contact.title': 'Quick Contact',
    'home.access.contact.desc': 'Speak directly with our investment experts',
    'home.access.contact.action': 'Contact now',
    
    'home.cta.title': 'Ready to invest in Guatemala?',
    'home.cta.subtitle': 'Our team of experts is available to accompany you every step of your investment process. Let\'s start today!',
    'home.cta.info': 'Request information',
    'home.cta.meeting': 'Schedule meeting',
    
    // Footer
    'footer.description': 'We promote foreign direct investment in Guatemala, connecting global opportunities with national potential.',
    'footer.quick-links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact',
    'footer.follow': 'Follow us on social media',
    'footer.rights': '© 2024 ProGuatemala. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Use',
    
    // Common
    'common.download': 'Download',
    'common.contact': 'Contact',
    'common.learn-more': 'Learn more',
    'common.read-more': 'Read more',
    'common.view-all': 'View all',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.close': 'Close',
    'common.open': 'Open',
    'common.search': 'Search',
    'common.filter': 'Filter',
    'common.all': 'All',
    'common.loading': 'Loading...',
    'common.error': 'Error',
    'common.success': 'Success',
    'common.warning': 'Warning',
    'common.info': 'Information',
    
    // GDPR
    'gdpr.title': 'Data Protection and Privacy',
    'gdpr.description': 'We use cookies and similar technologies to improve your browsing experience, analyze website traffic, and personalize content. By clicking "Accept all", you consent to the use of all cookies.',
    'gdpr.details': 'View details and configure preferences',
    'gdpr.accept-all': 'Accept all',
    'gdpr.reject-all': 'Reject all',
    'gdpr.configure': 'Configure',
    'gdpr.settings-title': 'Cookie and Privacy Settings',
    'gdpr.necessary': 'Necessary Cookies',
    'gdpr.analytics': 'Analytics Cookies',
    'gdpr.marketing': 'Marketing Cookies',
    'gdpr.functional': 'Functional Cookies',
    'gdpr.always-active': 'Always active',
    'gdpr.save-preferences': 'Save preferences',
    'gdpr.necessary.desc': 'These cookies are essential for the basic functioning of the website and cannot be disabled.',
    'gdpr.analytics.desc': 'They help us understand how visitors interact with the website by collecting information anonymously.',
    'gdpr.marketing.desc': 'Used to display relevant ads and measure the effectiveness of advertising campaigns.',
    'gdpr.functional.desc': 'Allow enhanced functionality and personalization, such as videos and live chat.',
    'gdpr.necessary.items': '• Authentication and security\n• Language preferences\n• Basic site functionality',
    'gdpr.analytics.items': '• Google Analytics\n• Usage statistics\n• Performance metrics',
    'gdpr.marketing.items': '• Personalized advertising\n• Conversion tracking\n• Remarketing',
    'gdpr.functional.items': '• Live chat\n• Embedded videos\n• Interactive maps',
    'gdpr.privacy-notice': 'For more information about how we process your data, see our',
    'gdpr.privacy-policy': 'Privacy Policy',
    'gdpr.terms': 'Terms of Use',
  }
};