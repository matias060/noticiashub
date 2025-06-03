import React, { useState, useEffect } from 'react';
import { Mail, Check, AlertTriangle } from 'lucide-react';
import { categories } from '../utils/mockData';
import { motion } from 'framer-motion';

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [error, setError] = useState('');
  
  useEffect(() => {
    document.title = 'Newsletter - NewsAR';
  }, []);
  
  const handleCategoryToggle = (categoryId: string) => {
    if (selectedCategories.includes(categoryId)) {
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
    } else {
      setSelectedCategories([...selectedCategories, categoryId]);
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      setError('Por favor ingresa tu correo electrónico');
      return;
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor ingresa un correo electrónico válido');
      return;
    }
    
    // Simulate API call
    console.log({
      email,
      name,
      categories: selectedCategories,
    });
    
    setFormSubmitted(true);
    setError('');
  };
  
  return (
    <div className="container py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-8">
          <div className="flex items-center justify-center w-16 h-16 bg-primary/10 dark:bg-primary/20 rounded-full text-primary dark:text-accent mx-auto mb-4">
            <Mail size={32} />
          </div>
          <h1 className="text-3xl font-bold mb-2">Suscríbete a nuestro Newsletter</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Recibe las noticias más importantes en tu correo electrónico. Personaliza tus preferencias para recibir solo lo que te interesa.
          </p>
        </div>
        
        {formSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-green-50 dark:bg-green-900/20 rounded-lg p-8 text-center"
          >
            <div className="w-16 h-16 bg-green-100 dark:bg-green-800/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Check className="h-8 w-8 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-2">
              ¡Suscripción exitosa!
            </h2>
            <p className="text-green-600 dark:text-green-500 mb-6">
              Gracias por suscribirte a nuestro newsletter. Hemos enviado un correo de confirmación a <strong>{email}</strong>.
            </p>
            <button
              onClick={() => {
                setFormSubmitted(false);
                setEmail('');
                setName('');
                setSelectedCategories([]);
              }}
              className="btn btn-primary"
            >
              Volver al formulario
            </button>
          </motion.div>
        ) : (
          <div className="bg-white dark:bg-dark rounded-lg shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit}>
              {error && (
                <div className="flex items-center bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-4 rounded mb-6">
                  <AlertTriangle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>{error}</p>
                </div>
              )}
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Correo electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="tu@correo.com"
                  required
                />
              </div>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Nombre (opcional)
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-3 rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  placeholder="Tu nombre"
                />
              </div>
              
              <div className="mb-8">
                <p className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                  Selecciona las categorías que te interesan:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {categories.map((category) => (
                    <label
                      key={category.id}
                      className={`flex items-center p-3 rounded cursor-pointer transition-colors ${
                        selectedCategories.includes(category.id)
                          ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selectedCategories.includes(category.id)}
                        onChange={() => handleCategoryToggle(category.id)}
                      />
                      <span
                        className={`w-4 h-4 mr-2 rounded flex-shrink-0 border ${
                          selectedCategories.includes(category.id)
                            ? 'bg-primary dark:bg-accent border-primary dark:border-accent'
                            : 'border-gray-400 dark:border-gray-600'
                        }`}
                      >
                        {selectedCategories.includes(category.id) && (
                          <Check className="h-4 w-4 text-white" />
                        )}
                      </span>
                      {category.name}
                    </label>
                  ))}
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded transition-colors"
              >
                Suscribirme al Newsletter
              </button>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                Al suscribirte, aceptas recibir correos electrónicos de NewsAR y confirmas que has leído y aceptado nuestra Política de Privacidad.
              </p>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Newsletter;