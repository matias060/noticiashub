import React from 'react';
import { Link } from 'react-router-dom';
import { Newspaper, Facebook, Twitter, Instagram, Youtube, Mail } from 'lucide-react';
import { categories } from '../../utils/mockData';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-dark shadow-inner pt-12 pb-6 mt-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Newspaper className="h-8 w-8 text-primary dark:text-accent" />
              <span className="font-poppins font-bold text-xl text-primary dark:text-white">
                NewsAR
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              NewsAR es un agregador de noticias argentinas que te mantiene informado con las últimas noticias de diversas fuentes confiables.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-accent transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-accent transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-accent transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-primary dark:hover:text-accent transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-semibold text-dark dark:text-white mb-4">Categorías</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.id}>
                  <Link 
                    to={`/categoria/${category.slug}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-semibold text-dark dark:text-white mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Inicio
                </Link>
              </li>
              <li>
                <Link 
                  to="/newsletter"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Newsletter
                </Link>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Sobre nosotros
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Política de privacidad
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a 
                  href="#"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-poppins font-semibold text-dark dark:text-white mb-4">Newsletter</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Suscríbete para recibir las últimas noticias en tu correo electrónico.
            </p>
            <form className="space-y-2">
              <div>
                <input
                  type="email"
                  placeholder="Tu correo electrónico"
                  className="w-full p-2 rounded border dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-primary text-white py-2 px-4 rounded hover:bg-primary/90 transition-colors"
              >
                <Mail size={16} className="mr-2" />
                Suscribirme
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>© {currentYear} NewsAR. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;