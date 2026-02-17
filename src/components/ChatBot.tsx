import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, User, Bot, Phone, Mail, Calendar } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { t, language } = useLanguage();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Initial welcome message
      const welcomeMessage: Message = {
        id: '1',
        text: language === 'es' 
          ? '¡Hola! Soy tu asistente virtual de ProGuatemala. ¿En qué puedo ayudarte hoy? Puedo conectarte con nuestros asesores especializados.'
          : 'Hello! I\'m your ProGuatemala virtual assistant. How can I help you today? I can connect you with our specialized advisors.',
        sender: 'bot',
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen, language]);

  const quickReplies = language === 'es' ? [
    'Información sobre inversión',
    'Sectores estratégicos',
    'Incentivos fiscales',
    'Hablar con un asesor',
    'Agendar reunión'
  ] : [
    'Investment information',
    'Strategic sectors',
    'Tax incentives',
    'Talk to an advisor',
    'Schedule meeting'
  ];

  const botResponses = {
    es: {
      'información sobre inversión': 'Te puedo ayudar con información sobre oportunidades de inversión en Guatemala. ¿Te interesa algún sector específico como agroindustria, manufactura, servicios globales, energías limpias o turismo?',
      'sectores estratégicos': 'Guatemala ofrece excelentes oportunidades en 5 sectores clave:\n\n🌱 Agroindustria\n🏭 Manufactura Liviana\n💻 Servicios Globales\n⚡ Energías Limpias\n🏛️ Turismo Sostenible\n\n¿Sobre cuál te gustaría saber más?',
      'incentivos fiscales': 'Guatemala ofrece atractivos incentivos fiscales:\n\n• Zonas Francas (exención ISR por 10 años)\n• Ley de Energías Renovables\n• Régimen de Maquila\n• ZDEEP para grandes proyectos\n\n¿Te gustaría que un asesor te explique los detalles?',
      'hablar con un asesor': 'Perfecto, te conectaré con uno de nuestros asesores especializados. Por favor proporciona:\n\n📧 Tu email\n🏢 Nombre de tu empresa\n🎯 Sector de interés\n\nO puedes llamarnos al +502 2412-0200 ext 3500',
      'agendar reunión': 'Excelente idea. Para agendar una reunión personalizada:\n\n📅 Visita nuestro calendario online\n📞 Llama al +502 2412-0200 ext 3500\n📧 Escribe a proguatemala@mineco.gob.gt\n\n¿Prefieres reunión virtual o presencial?',
      'default': 'Entiendo tu consulta. Para brindarte la mejor atención, te recomiendo contactar directamente con nuestros asesores especializados:\n\n📞 +502 2412-0200 ext 3500\n📧 proguatemala@mineco.gob.gt\n\n¿Te gustaría que te conecte con un asesor ahora?'
    },
    en: {
      'investment information': 'I can help you with investment opportunities in Guatemala. Are you interested in any specific sector like agribusiness, manufacturing, global services, clean energy, or tourism?',
      'strategic sectors': 'Guatemala offers excellent opportunities in 5 key sectors:\n\n🌱 Agribusiness\n🏭 Light Manufacturing\n💻 Global Services\n⚡ Clean Energy\n🏛️ Sustainable Tourism\n\nWhich one would you like to know more about?',
      'tax incentives': 'Guatemala offers attractive tax incentives:\n\n• Free Trade Zones (ISR exemption for 10 years)\n• Renewable Energy Law\n• Maquila Regime\n• ZDEEP for large projects\n\nWould you like an advisor to explain the details?',
      'talk to an advisor': 'Perfect, I\'ll connect you with one of our specialized advisors. Please provide:\n\n📧 Your email\n🏢 Company name\n🎯 Sector of interest\n\nOr you can call us at +502 2412-0200 ext 3500',
      'schedule meeting': 'Excellent idea. To schedule a personalized meeting:\n\n📅 Visit our online calendar\n📞 Call +502 2412-0200 ext 3500\n📧 Email proguatemala@mineco.gob.gt\n\nDo you prefer virtual or in-person meeting?',
      'default': 'I understand your inquiry. For the best assistance, I recommend contacting our specialized advisors directly:\n\n📞 +502 2412-0200 ext 3500\n📧 proguatemala@mineco.gob.gt\n\nWould you like me to connect you with an advisor now?'
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot response delay
    setTimeout(() => {
      const lowerInput = inputText.toLowerCase();
      const responses = botResponses[language];
      
      let botResponse = responses.default;
      
      // Check for keyword matches
      for (const [key, response] of Object.entries(responses)) {
        if (lowerInput.includes(key.toLowerCase()) || key === 'default') {
          botResponse = response;
          break;
        }
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (reply: string) => {
    setInputText(reply);
    setTimeout(() => handleSendMessage(), 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-40 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${isOpen ? 'hidden' : 'block'}`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 3, duration: 0.5 }}
      >
        <MessageCircle className="w-6 h-6" />
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <img 
                    src="https://www.pronacom.org/wp-content/uploads/2025/01/LOGO_PROGUATEMALA_VA1-e1737253818887-300x120.png" 
                    alt="ProGuatemala" 
                    className="h-6 w-auto"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">ProGuatemala</h3>
                  <p className="text-xs text-blue-100">
                    {language === 'es' ? 'Asistente Virtual' : 'Virtual Assistant'}
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' ? 'bg-blue-600' : 'bg-gray-200'
                    }`}>
                      {message.sender === 'user' ? (
                        <User className="w-4 h-4 text-white" />
                      ) : (
                        <Bot className="w-4 h-4 text-gray-600" />
                      )}
                    </div>
                    <div className={`p-3 rounded-2xl ${
                      message.sender === 'user' 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.text}</p>
                      <p className={`text-xs mt-1 ${
                        message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                      <Bot className="w-4 h-4 text-gray-600" />
                    </div>
                    <div className="bg-gray-100 p-3 rounded-2xl">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Replies */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <div className="flex flex-wrap gap-2">
                  {quickReplies.map((reply, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply)}
                      className="text-xs bg-blue-50 text-white px-3 py-1 rounded-full hover:bg-blue-100 transition-colors duration-200"
                    >
                      {reply}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <div className="p-4 border-t border-gray-200">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder={language === 'es' ? 'Escribe tu mensaje...' : 'Type your message...'}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!inputText.trim()}
                  className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white p-2 rounded-lg transition-colors duration-200"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
              
              {/* Contact Options */}
              <div className="flex justify-center space-x-4 mt-3 pt-3 border-t border-gray-100">
                <a
                  href="tel:+50224120200"
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Phone className="w-3 h-3" />
                  <span>{language === 'es' ? 'Llamar' : 'Call'}</span>
                </a>
                <a
                  href="mailto:proguatemala@mineco.gob.gt"
                  className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200"
                >
                  <Mail className="w-3 h-3" />
                  <span>Email</span>
                </a>
                <button className="flex items-center space-x-1 text-xs text-gray-600 hover:text-blue-600 transition-colors duration-200">
                  <Calendar className="w-3 h-3" />
                  <span>{language === 'es' ? 'Agendar' : 'Schedule'}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChatBot;