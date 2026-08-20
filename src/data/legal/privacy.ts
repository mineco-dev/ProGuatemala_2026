import { Database, Eye, FileText, Lock, Mail, Shield, UserCheck } from 'lucide-react';
import type { LocalizedLegalDocument } from '@/types/legalDocument';

export const privacyDocument: LocalizedLegalDocument = {
  es: {
    title: 'Política de Privacidad',
    subtitle: 'Última actualización: Febrero 2024. Su privacidad es importante para nosotros.',
    intro:
      'ProGuatemala, como entidad del Gobierno de Guatemala, está comprometida con la protección de su información personal y el cumplimiento de las leyes de protección de datos aplicables. Esta Política de Privacidad describe cómo recopilamos, usamos, compartimos y protegemos su información personal cuando utiliza nuestros servicios o visita nuestro sitio web.',
    sections: [
        {
          icon: Shield,
          title: '1. Información que Recopilamos',
          content: [
            'ProGuatemala recopila información personal cuando usted utiliza nuestro sitio web o solicita nuestros servicios:',
            '• Información de contacto: nombre, correo electrónico, número de teléfono, empresa',
            '• Información profesional: sector de interés, país de origen, tipo de inversión',
            '• Datos de navegación: dirección IP, tipo de navegador, páginas visitadas, tiempo de permanencia',
            '• Cookies y tecnologías similares para mejorar la experiencia del usuario'
          ]
        },
        {
          icon: Database,
          title: '2. Uso de la Información',
          content: [
            'Utilizamos su información personal para:',
            '• Proporcionar servicios de asesoría y acompañamiento a inversionistas',
            '• Responder a sus consultas y solicitudes de información',
            '• Enviar comunicaciones sobre oportunidades de inversión y eventos relevantes',
            '• Analizar el uso del sitio web para mejorar nuestros servicios',
            '• Cumplir con obligaciones legales y regulatorias',
            '• Generar estadísticas agregadas y anónimas sobre inversión extranjera'
          ]
        },
        {
          icon: Lock,
          title: '3. Protección de Datos',
          content: [
            'ProGuatemala implementa medidas de seguridad técnicas y organizativas para proteger su información:',
            '• Cifrado SSL/TLS para todas las transmisiones de datos',
            '• Control de acceso restringido a información personal',
            '• Servidores seguros con protección contra accesos no autorizados',
            '• Auditorías periódicas de seguridad',
            '• Capacitación continua del personal en protección de datos',
            '• Planes de respuesta ante incidentes de seguridad'
          ]
        },
        {
          icon: Eye,
          title: '4. Compartir Información',
          content: [
            'ProGuatemala puede compartir su información con:',
            '• Instituciones gubernamentales de Guatemala para facilitar procesos de inversión',
            '• Proveedores de servicios técnicos bajo acuerdos de confidencialidad',
            '• Autoridades competentes cuando sea requerido por ley',
            'No vendemos ni compartimos su información personal con terceros para fines comerciales sin su consentimiento explícito.'
          ]
        },
        {
          icon: UserCheck,
          title: '5. Sus Derechos',
          content: [
            'Usted tiene derecho a:',
            '• Acceder a sus datos personales que mantenemos',
            '• Solicitar la corrección de datos inexactos o incompletos',
            '• Solicitar la eliminación de sus datos personales',
            '• Oponerse al procesamiento de sus datos personales',
            '• Solicitar la portabilidad de sus datos',
            '• Retirar su consentimiento en cualquier momento',
            'Para ejercer estos derechos, contáctenos a través de: info@proguatemala.gob.gt'
          ]
        },
        {
          icon: FileText,
          title: '6. Cookies y Tecnologías de Seguimiento',
          content: [
            'Utilizamos cookies y tecnologías similares para:',
            '• Cookies necesarias: esenciales para el funcionamiento del sitio',
            '• Cookies analíticas: nos ayudan a entender cómo los usuarios interactúan con el sitio',
            '• Cookies de marketing: permiten mostrar contenido relevante',
            '• Cookies funcionales: mejoran la experiencia del usuario',
            'Puede gestionar sus preferencias de cookies a través de la configuración de su navegador o nuestro panel de preferencias.'
          ]
        },
        {
          icon: Mail,
          title: '7. Retención de Datos',
          content: [
            'Conservamos su información personal durante el tiempo necesario para:',
            '• Cumplir con los propósitos para los que fue recopilada',
            '• Cumplir con obligaciones legales, contables o de reporte',
            '• Resolver disputas y hacer cumplir nuestros acuerdos',
            'Los datos personales se eliminarán de forma segura cuando ya no sean necesarios, salvo que la ley requiera su conservación.'
          ]
        }
    ],
  },
  en: {
    title: 'Privacy Policy',
    subtitle: 'Last updated: February 2024. Your privacy is important to us.',
    intro:
      'ProGuatemala, as an entity of the Government of Guatemala, is committed to protecting your personal information and complying with applicable data protection laws. This Privacy Policy describes how we collect, use, share, and protect your personal information when you use our services or visit our website.',
    sections: [
        {
          icon: Shield,
          title: '1. Information We Collect',
          content: [
            'ProGuatemala collects personal information when you use our website or request our services:',
            '• Contact information: name, email, phone number, company',
            '• Professional information: sector of interest, country of origin, type of investment',
            '• Browsing data: IP address, browser type, pages visited, time spent',
            '• Cookies and similar technologies to improve user experience'
          ]
        },
        {
          icon: Database,
          title: '2. Use of Information',
          content: [
            'We use your personal information to:',
            '• Provide advisory and support services to investors',
            '• Respond to your inquiries and information requests',
            '• Send communications about investment opportunities and relevant events',
            '• Analyze website usage to improve our services',
            '• Comply with legal and regulatory obligations',
            '• Generate aggregated and anonymous statistics on foreign investment'
          ]
        },
        {
          icon: Lock,
          title: '3. Data Protection',
          content: [
            'ProGuatemala implements technical and organizational security measures to protect your information:',
            '• SSL/TLS encryption for all data transmissions',
            '• Restricted access control to personal information',
            '• Secure servers with protection against unauthorized access',
            '• Regular security audits',
            '• Ongoing staff training in data protection',
            '• Security incident response plans'
          ]
        },
        {
          icon: Eye,
          title: '4. Sharing Information',
          content: [
            'ProGuatemala may share your information with:',
            '• Government institutions of Guatemala to facilitate investment processes',
            '• Technical service providers under confidentiality agreements',
            '• Competent authorities when required by law',
            'We do not sell or share your personal information with third parties for commercial purposes without your explicit consent.'
          ]
        },
        {
          icon: UserCheck,
          title: '5. Your Rights',
          content: [
            'You have the right to:',
            '• Access your personal data that we maintain',
            '• Request correction of inaccurate or incomplete data',
            '• Request deletion of your personal data',
            '• Object to the processing of your personal data',
            '• Request portability of your data',
            '• Withdraw your consent at any time',
            'To exercise these rights, contact us at: info@proguatemala.gob.gt'
          ]
        },
        {
          icon: FileText,
          title: '6. Cookies and Tracking Technologies',
          content: [
            'We use cookies and similar technologies for:',
            '• Necessary cookies: essential for site functionality',
            '• Analytical cookies: help us understand how users interact with the site',
            '• Marketing cookies: allow us to show relevant content',
            '• Functional cookies: enhance user experience',
            'You can manage your cookie preferences through your browser settings or our preferences panel.'
          ]
        },
        {
          icon: Mail,
          title: '7. Data Retention',
          content: [
            'We retain your personal information for as long as necessary to:',
            '• Fulfill the purposes for which it was collected',
            '• Comply with legal, accounting, or reporting obligations',
            '• Resolve disputes and enforce our agreements',
            'Personal data will be securely deleted when no longer needed, unless required by law to be retained.'
          ]
        }
    ],
  },
};
