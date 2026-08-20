import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const LoadingScreen: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-blue-800 to-teal-700 flex items-center justify-center z-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-400 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Container */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl p-8 shadow-2xl inline-block">
            <motion.img
              src="https://www.pronacom.org/wp-content/uploads/2025/01/LOGO_PROGUATEMALA_VA1-e1737253818887-300x120.png"
              alt="ProGuatemala"
              className="h-16 w-auto mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            />
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-white text-center"
        >
          <h2 className="text-2xl font-bold mb-2">ProGuatemala</h2>
          <p className="text-blue-200 mb-6">{t('common.loading')}</p>
        </motion.div>

        {/* Loading Spinner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Outer Ring */}
            <motion.div
              className="w-12 h-12 border-4 border-blue-300 border-t-white rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            />
            {/* Inner Ring */}
            <motion.div
              className="absolute top-2 left-2 w-8 h-8 border-2 border-teal-300 border-b-white rounded-full"
              animate={{ rotate: -360 }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </motion.div>

        {/* Progress Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.4 }}
          className="flex justify-center space-x-2 mt-8"
        >
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-white rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2
              }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingScreen;