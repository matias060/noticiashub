import React from 'react';
import { Link } from 'react-router-dom';
import { News } from '../../types';
import { Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface NewsHeroProps {
  featuredNews: News[];
}

const NewsHero: React.FC<NewsHeroProps> = ({ featuredNews }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (featuredNews.length === 0) {
    return null;
  }

  const mainNews = featuredNews[0];
  const secondaryNews = featuredNews.slice(1, 3);

  return (
    <section className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Main featured news */}
          <motion.div 
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to={mainNews.url} className="block">
              <div className="relative rounded overflow-hidden group">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={mainNews.imageUrl}
                    alt={mainNews.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6 w-full">
                  <div className="mb-2">
                    <span className="inline-block px-3 py-1 text-sm rounded bg-accent text-white">
                      {mainNews.category.charAt(0).toUpperCase() + mainNews.category.slice(1)}
                    </span>
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">{mainNews.title}</h1>
                  <p className="text-white/80 mb-4 line-clamp-2 md:line-clamp-3">{mainNews.summary}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-white/70 flex items-center text-sm">
                      <Clock size={16} className="mr-1" />
                      {formatDate(mainNews.publishedAt)}
                    </span>
                    <span className="text-accent flex items-center font-medium">
                      Leer más <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Secondary featured news */}
          <div className="lg:col-span-4 grid grid-cols-1 gap-4">
            {secondaryNews.map((news, index) => (
              <motion.div 
                key={news.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              >
                <Link to={news.url} className="block">
                  <div className="relative rounded overflow-hidden group h-full">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 p-4 w-full">
                      <div className="mb-1">
                        <span className="inline-block px-2 py-1 text-xs rounded bg-accent text-white">
                          {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
                        </span>
                      </div>
                      <h2 className="text-lg font-semibold text-white">{news.title}</h2>
                      <div className="flex items-center mt-2">
                        <span className="text-white/70 flex items-center text-xs">
                          <Clock size={12} className="mr-1" />
                          {formatDate(news.publishedAt)}
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;