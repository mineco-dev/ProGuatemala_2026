import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertCircle, Scale, Shield, CheckCircle, XCircle, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Terms: React.FC = () => {
  const { language } = useLanguage();

  const sections = language === 'es' ? [
    {
      icon: FileText,
      title: '1. Aceptación de los Términos',
      content: [
        'Al acceder y utilizar el sitio web de ProGuatemala (en adelante, "el Sitio"), usted acepta estar sujeto a estos Términos de Uso y a todas las leyes y regulaciones aplicables. Si no está de acuerdo con alguno de estos términos, no debe utilizar este Sitio.',
        'Estos términos se aplican a todos los visitantes, usuarios y otras personas que accedan o utilicen el Sitio.',
        'ProGuatemala se reserva el derecho de modificar estos términos en cualquier momento. Su uso continuado del Sitio después de cualquier modificación constituye su aceptación de los nuevos términos.'
      ]
    },
    {
      icon: Globe,
      title: '2. Uso del Sitio Web',
      content: [
        'El Sitio proporciona información sobre oportunidades de inversión en Guatemala y servicios de apoyo a inversionistas. Usted se compromete a:',
        '• Utilizar el Sitio solo para fines legales y de acuerdo con estos Términos',
        '• No utilizar el Sitio de manera que pueda dañar, deshabilitar, sobrecargar o deteriorar el Sitio',
        '• No intentar obtener acceso no autorizado a ninguna parte del Sitio',
        '• No utilizar robots, scrapers u otros medios automáticos para acceder al Sitio sin permiso expreso',
        '• Proporcionar información veraz, precisa y completa cuando sea requerida'
      ]
    },
    {
      icon: Shield,
      title: '3. Propiedad Intelectual',
      content: [
        'Todo el contenido del Sitio, incluyendo pero no limitado a textos, gráficos, logotipos, iconos, imágenes, clips de audio, descargas digitales y software, es propiedad de ProGuatemala o del Gobierno de Guatemala, o está licenciado a ProGuatemala.',
        'El contenido está protegido por las leyes de derechos de autor de Guatemala y tratados internacionales.',
        'No puede reproducir, distribuir, modificar, crear trabajos derivados, mostrar públicamente o utilizar de cualquier otra manera el contenido del Sitio sin el permiso previo por escrito de ProGuatemala, excepto para uso personal no comercial.'
      ]
    },
    {
      icon: CheckCircle,
      title: '4. Servicios Proporcionados',
      content: [
        'ProGuatemala proporciona los siguientes servicios a través del Sitio:',
        '• Información sobre oportunidades de inversión en Guatemala',
        '• Guías y recursos para inversionistas',
        '• Asesoría y acompañamiento en procesos de inversión',
        '• Conexión con instituciones gubernamentales relevantes',
        '• Actualizaciones sobre el marco legal y regulatorio',
        'Estos servicios se proporcionan sin garantías de ningún tipo, ya sean expresas o implícitas. ProGuatemala se reserva el derecho de modificar o discontinuar cualquier servicio en cualquier momento sin previo aviso.'
      ]
    },
    {
      icon: AlertCircle,
      title: '5. Limitación de Responsabilidad',
      content: [
        'La información proporcionada en el Sitio es de carácter general y no constituye asesoramiento legal, financiero o de inversión profesional.',
        'ProGuatemala no garantiza:',
        '• La exactitud, completitud o actualidad de la información',
        '• Que el Sitio estará libre de errores o interrupciones',
        '• Que los defectos serán corregidos',
        '• Que el Sitio o el servidor que lo hace disponible estén libres de virus u otros componentes dañinos',
        'En ningún caso ProGuatemala será responsable por daños directos, indirectos, incidentales, especiales, consecuentes o ejemplares, incluyendo pero no limitado a pérdida de beneficios, datos o uso, resultantes del uso o la imposibilidad de usar el Sitio.'
      ]
    },
    {
      icon: Scale,
      title: '6. Enlaces a Terceros',
      content: [
        'El Sitio puede contener enlaces a sitios web de terceros que no son propiedad ni están controlados por ProGuatemala.',
        'ProGuatemala no tiene control sobre, y no asume responsabilidad por, el contenido, políticas de privacidad o prácticas de sitios web de terceros.',
        'Usted reconoce y acepta que ProGuatemala no será responsable, directa o indirectamente, por cualquier daño o pérdida causada o presuntamente causada por o en conexión con el uso de cualquier contenido, bienes o servicios disponibles en o a través de dichos sitios web.',
        'Le recomendamos encarecidamente que lea los términos y condiciones y políticas de privacidad de cualquier sitio web de terceros que visite.'
      ]
    },
    {
      icon: XCircle,
      title: '7. Indemnización',
      content: [
        'Usted acepta indemnizar, defender y mantener indemne a ProGuatemala, al Gobierno de Guatemala, y a sus funcionarios, directores, empleados y agentes de y contra todas y cada una de las reclamaciones, daños, obligaciones, pérdidas, responsabilidades, costos o deudas, y gastos (incluidos, entre otros, honorarios de abogados) que surjan de:',
        '• Su uso del Sitio',
        '• Su violación de estos Términos',
        '• Su violación de cualquier derecho de terceros, incluidos, entre otros, cualquier derecho de autor, propiedad o privacidad',
        '• Cualquier reclamación de que su uso causó daño a un tercero'
      ]
    },
    {
      icon: Globe,
      title: '8. Ley Aplicable y Jurisdicción',
      content: [
        'Estos Términos de Uso se regirán e interpretarán de acuerdo con las leyes de Guatemala, sin dar efecto a ningún principio de conflicto de leyes.',
        'Cualquier disputa que surja de o esté relacionada con estos Términos o el uso del Sitio estará sujeta a la jurisdicción exclusiva de los tribunales competentes de Guatemala.',
        'Si alguna disposición de estos Términos se considera inválida o inaplicable, dicha disposición será limitada o eliminada en la medida mínima necesaria, y las disposiciones restantes de estos Términos permanecerán en pleno vigor y efecto.'
      ]
    }
  ] : [
    {
      icon: FileText,
      title: '1. Acceptance of Terms',
      content: [
        'By accessing and using the ProGuatemala website (hereinafter, "the Site"), you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you should not use this Site.',
        'These terms apply to all visitors, users, and other persons who access or use the Site.',
        'ProGuatemala reserves the right to modify these terms at any time. Your continued use of the Site after any modification constitutes your acceptance of the new terms.'
      ]
    },
    {
      icon: Globe,
      title: '2. Use of the Website',
      content: [
        'The Site provides information about investment opportunities in Guatemala and investor support services. You agree to:',
        '• Use the Site only for lawful purposes and in accordance with these Terms',
        '• Not use the Site in any way that could damage, disable, overburden, or impair the Site',
        '• Not attempt to gain unauthorized access to any part of the Site',
        '• Not use robots, scrapers, or other automated means to access the Site without express permission',
        '• Provide truthful, accurate, and complete information when required'
      ]
    },
    {
      icon: Shield,
      title: '3. Intellectual Property',
      content: [
        'All content on the Site, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, and software, is the property of ProGuatemala or the Government of Guatemala, or is licensed to ProGuatemala.',
        'The content is protected by Guatemala\'s copyright laws and international treaties.',
        'You may not reproduce, distribute, modify, create derivative works, publicly display, or otherwise use the Site\'s content without prior written permission from ProGuatemala, except for personal non-commercial use.'
      ]
    },
    {
      icon: CheckCircle,
      title: '4. Services Provided',
      content: [
        'ProGuatemala provides the following services through the Site:',
        '• Information about investment opportunities in Guatemala',
        '• Guides and resources for investors',
        '• Advisory and support services in investment processes',
        '• Connection with relevant government institutions',
        '• Updates on legal and regulatory framework',
        'These services are provided without warranties of any kind, either express or implied. ProGuatemala reserves the right to modify or discontinue any service at any time without prior notice.'
      ]
    },
    {
      icon: AlertCircle,
      title: '5. Limitation of Liability',
      content: [
        'The information provided on the Site is general in nature and does not constitute professional legal, financial, or investment advice.',
        'ProGuatemala does not guarantee:',
        '• The accuracy, completeness, or timeliness of information',
        '• That the Site will be error-free or uninterrupted',
        '• That defects will be corrected',
        '• That the Site or the server making it available are free of viruses or other harmful components',
        'In no event shall ProGuatemala be liable for direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to loss of profits, data, or use, resulting from the use or inability to use the Site.'
      ]
    },
    {
      icon: Scale,
      title: '6. Third-Party Links',
      content: [
        'The Site may contain links to third-party websites that are not owned or controlled by ProGuatemala.',
        'ProGuatemala has no control over, and assumes no responsibility for, the content, privacy policies, or practices of third-party websites.',
        'You acknowledge and agree that ProGuatemala shall not be responsible or liable, directly or indirectly, for any damage or loss caused or allegedly caused by or in connection with the use of any content, goods, or services available on or through such websites.',
        'We strongly recommend that you read the terms and conditions and privacy policies of any third-party websites you visit.'
      ]
    },
    {
      icon: XCircle,
      title: '7. Indemnification',
      content: [
        'You agree to indemnify, defend, and hold harmless ProGuatemala, the Government of Guatemala, and their officers, directors, employees, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney\'s fees) arising from:',
        '• Your use of the Site',
        '• Your violation of these Terms',
        '• Your violation of any third-party right, including without limitation any copyright, property, or privacy right',
        '• Any claim that your use caused damage to a third party'
      ]
    },
    {
      icon: Globe,
      title: '8. Governing Law and Jurisdiction',
      content: [
        'These Terms of Use shall be governed by and construed in accordance with the laws of Guatemala, without giving effect to any principles of conflicts of law.',
        'Any dispute arising from or related to these Terms or the use of the Site shall be subject to the exclusive jurisdiction of the competent courts of Guatemala.',
        'If any provision of these Terms is deemed invalid or unenforceable, such provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions of these Terms shall remain in full force and effect.'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative text-white py-20" style={{ background: '#021049' }}>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white bg-opacity-20 backdrop-blur-sm rounded-full mb-6">
              <Scale className="w-10 h-10" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {language === 'es' ? 'Términos de Uso' : 'Terms of Use'}
            </h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              {language === 'es'
                ? 'Última actualización: Febrero 2024. Por favor, lea estos términos cuidadosamente.'
                : 'Last updated: February 2024. Please read these terms carefully.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-50 to-teal-50 rounded-2xl p-8 border border-blue-100"
          >
            <p className="text-lg text-gray-700 leading-relaxed">
              {language === 'es'
                ? 'Bienvenido a ProGuatemala. Estos Términos de Uso regulan su acceso y uso de nuestro sitio web y los servicios que proporcionamos. Al utilizar nuestro sitio, usted acepta cumplir con estos términos en su totalidad. Si no está de acuerdo con estos términos, por favor no utilice nuestro sitio web.'
                : 'Welcome to ProGuatemala. These Terms of Use govern your access to and use of our website and the services we provide. By using our site, you agree to comply with these terms in full. If you do not agree with these terms, please do not use our website.'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-br from-blue-500 to-teal-500 p-4 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-gray-900 mb-4">
                        {section.title}
                      </h2>
                      <div className="space-y-3">
                        {section.content.map((paragraph, pIndex) => (
                          <p key={pIndex} className="text-gray-700 leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-teal-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100"
          >
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 p-3 rounded-xl flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {language === 'es' ? 'Aviso Importante' : 'Important Notice'}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {language === 'es'
                    ? 'Al utilizar este sitio web, usted reconoce que ha leído, entendido y acepta estar sujeto a estos Términos de Uso, así como a nuestra Política de Privacidad. Si tiene alguna pregunta sobre estos términos, por favor contáctenos antes de utilizar el sitio.'
                    : 'By using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use, as well as our Privacy Policy. If you have any questions about these terms, please contact us before using the site.'}
                </p>
                <div className="space-y-2 text-gray-700">
                  <p className="font-semibold">ProGuatemala</p>
                  <p>Email: info@proguatemala.gob.gt</p>
                  <p>
                    {language === 'es'
                      ? 'Teléfono: +502 2422-3333'
                      : 'Phone: +502 2422-3333'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Last Modified */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center"
          >
            <p className="text-gray-600 text-sm">
              {language === 'es'
                ? 'Estos Términos de Uso fueron actualizados por última vez en Febrero de 2024. ProGuatemala se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web.'
                : 'These Terms of Use were last updated in February 2024. ProGuatemala reserves the right to modify these terms at any time. Changes will take effect immediately upon posting on the website.'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;
