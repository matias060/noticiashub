import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Clock, User, Tag } from 'lucide-react';
import { getNewsById, getRelatedNews } from '../utils/mockData';
import ShareButtons from '../components/ui/ShareButtons';
import NewsCard from '../components/ui/NewsCard';
import { motion } from 'framer-motion';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [scrollProgress, setScrollProgress] = useState(0);

  const news = id ? getNewsById(id) : null;
  const relatedNews = news ? getRelatedNews(news.id, news.category) : [];

  useEffect(() => {
    if (news) {
      document.title = `${news.title} - NewsAR`;
    }

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const winHeight = window.innerHeight;
      const docHeight = document.body.offsetHeight;
      const totalDocScrollLength = docHeight - winHeight;
      const scrollPosition = Math.floor((scrollTop / totalDocScrollLength) * 100);
      setScrollProgress(scrollPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [news]);

  if (!news) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Noticia no encontrada</h1>
        <p className="mb-6">Lo sentimos, la noticia que buscas no existe o ha sido removida.</p>
        <Link to="/" className="btn btn-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('es-AR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div>
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full bg-accent"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero section with parallax */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${news.imageUrl})`,
            transform: `translateY(${scrollProgress * 0.2}px)`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
      </div>

      <div className="container">
        <div className="max-w-4xl mx-auto -mt-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-dark rounded-lg shadow-lg p-6 md:p-8"
          >
            {/* Category */}
            <Link
              to={`/categoria/${news.category}`}
              className="inline-block px-3 py-1 text-sm bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent rounded mb-4"
            >
              {news.category.charAt(0).toUpperCase() + news.category.slice(1)}
            </Link>

            {/* Title */}
            <h1 className="text-2xl md:text-4xl font-bold mb-4">{news.title}</h1>

            {/* Metadata */}
            <div className="flex flex-wrap items-center text-sm text-gray-600 dark:text-gray-400 mb-6 gap-4">
              <div className="flex items-center">
                <Clock size={16} className="mr-1" />
                {formatDate(news.publishedAt)}
              </div>
              <div className="flex items-center">
                <User size={16} className="mr-1" />
                Por {news.author}
              </div>
              <div className="flex items-center">
                <Tag size={16} className="mr-1" />
                {news.source}
              </div>
            </div>

            {/* Share buttons */}
            <div className="mb-6">
              <ShareButtons url={news.url} title={news.title} />
            </div>

            {/* Summary */}
            <div className="bg-gray-50 dark:bg-gray-800/50 border-l-4 border-primary dark:border-accent p-4 mb-6 rounded">
              <p className="text-lg italic text-gray-700 dark:text-gray-300">
                {news.summary}
              </p>
            </div>

            {/* Content */}
            <div className="prose dark:prose-invert max-w-none">
              {news.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mt-8">
              <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">
                Etiquetas:
              </h3>
              <div className="flex flex-wrap gap-2">
                {news.tags.map((tag, index) => (
                  <Link
                    key={index}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related news */}
        {relatedNews.length > 0 && (
          <div className="max-w-7xl mx-auto py-12">
            <h2 className="text-2xl font-bold mb-6">Noticias relacionadas</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedNews.map((newsItem) => (
                <NewsCard key={newsItem.id} news={newsItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsDetail;