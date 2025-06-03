import React, { useState } from 'react';
import { Mail, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NewsletterSignupProps {
  variant?: 'inline' | 'popup';
}

const NewsletterSignup: React.FC<NewsletterSignupProps> = ({ variant = 'inline' }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [showPopup, setShowPopup] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', { email, name });
    setIsSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      if (variant === 'popup') {
        setShowPopup(false);
      } else {
        setIsSubmitted(false);
        setEmail('');
        setName('');
      }
    }, 3000);
  };

  if (variant === 'popup') {
    return (
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-0 right-0 m-4 sm:m-6 max-w-sm z-50"
          >
            <div className="bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden">
              <div className="relative p-6">
                <button
                  onClick={() => setShowPopup(false)}
                  className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  aria-label="Cerrar"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mb-4">
                  <Mail size={24} />
                </div>
                
                <h3 className="text-xl font-semibold mb-2">Mantente informado</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  Suscríbete a nuestro newsletter y recibe las noticias más importantes en tu correo.
                </p>
                
                {isSubmitted ? (
                  <div className="text-center py-4">
                    <p className="text-green-600 dark:text-green-400 font-medium">
                      ¡Gracias por suscribirte!
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        placeholder="Nombre"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 text-sm rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Tu correo electrónico"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="w-full p-3 text-sm rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded transition-colors"
                    >
                      Suscribirme
                    </button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return (
    <div className="bg-primary/5 dark:bg-primary/10 rounded-lg p-6">
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between">
          <div className="mb-4 md:mb-0 md:mr-6">
            <h3 className="text-xl font-semibold mb-2">Newsletter</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Recibe las noticias más importantes en tu correo electrónico cada día.
            </p>
          </div>
          
          <div className="flex-1 max-w-md">
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 p-3 rounded text-center">
                ¡Gracias por suscribirte!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 p-3 text-sm rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-4 py-3 rounded transition-colors"
                >
                  Suscribirme
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;