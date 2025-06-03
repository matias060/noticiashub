import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, ArrowRight } from 'lucide-react';
import { News } from '../../types';
import { motion } from 'framer-motion';

interface NewsCardProps {
  news: News;
  variant?: 'default' | 'compact' | 'featured';
}

const NewsCard: React.FC<NewsCardProps> = ({ news, variant = 'default' }) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
    });
  };

  if (variant === 'featured') {
    return (
      <motion.article 
        className="card card-hover h-full"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
      >
        <Link to={news.url} className="block h-full">
          <div className="relative h-64 overflow-hidden rounded-t">
            <img
              src={news.imageUrl}
              alt={news.title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-4 w-full">
              <span className="inline-block px-2 py-1 text-xs rounded bg-accent text-white mb-2">
                {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
              </span>
              <h2 className="text-xl font-semibold text-white">{news.title}</h2>
            </div>
          </div>
          <div className="p-4">
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{news.summary}</p>
            <div className="flex items-center justify-between text-sm">
              <span className="flex items-center text-gray-500 dark:text-gray-400">
                <Clock size={14} className="mr-1" />
                {formatDate(news.publishedAt)}
              </span>
              <span className="text-primary dark:text-accent flex items-center font-medium">
                Leer más <ArrowRight size={14} className="ml-1" />
              </span>
            </div>
          </div>
        </Link>
      </motion.article>
    );
  }

  if (variant === 'compact') {
    return (
      <motion.article 
        className="flex items-start space-x-3 py-3"
        whileHover={{ x: 2 }}
        transition={{ duration: 0.2 }}
      >
        <div className="flex-shrink-0 w-16 h-16 overflow-hidden rounded">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex-1">
          <Link to={news.url} className="block">
            <h3 className="text-sm font-medium line-clamp-2 hover:text-primary dark:hover:text-accent transition-colors">
              {news.title}
            </h3>
            <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 block">
              {formatDate(news.publishedAt)}
            </span>
          </Link>
        </div>
      </motion.article>
    );
  }

  return (
    <motion.article 
      className="card card-hover h-full"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={news.url} className="block h-full">
        <div className="relative h-48 overflow-hidden rounded-t">
          <img
            src={news.imageUrl}
            alt={news.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-2 left-2">
            <span className="inline-block px-2 py-1 text-xs rounded bg-accent text-white">
              {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
            </span>
          </div>
        </div>
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 line-clamp-2">{news.title}</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">{news.summary}</p>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center text-gray-500 dark:text-gray-400">
              <Clock size={14} className="mr-1" />
              {formatDate(news.publishedAt)}
            </span>
            <span className="text-primary dark:text-accent flex items-center font-medium">
              Leer más <ArrowRight size={14} className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default NewsCard;