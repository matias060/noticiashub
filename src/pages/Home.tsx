import React, { useEffect, useState } from 'react';
import NewsHero from '../components/ui/NewsHero';
import NewsCard from '../components/ui/NewsCard';
import Trending from '../components/ui/Trending';
import NewsletterSignup from '../components/ui/NewsletterSignup';
import CategoryFilter from '../components/ui/CategoryFilter';
import RssFeeds from '../components/ui/RssFeeds';
import { categories, getFeaturedNews, getNewsByCategory, trendingTopics } from '../utils/mockData';
import { getUpdatedNews, getUpdatedFeaturedNews, getUpdatedNewsByCategory } from '../services/newsService';
import { News } from '../types';
import { motion } from 'framer-motion';
import { RefreshCw } from 'lucide-react';

const Home: React.FC = () => {
  const [featuredNews, setFeaturedNews] = useState(getFeaturedNews());
  const [selectedCategory, setSelectedCategory] = useState('');
  const [allNews, setAllNews] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lastUpdate, setLastUpdate] = useState(new Date());
  
  useEffect(() => {
    document.title = 'NewsAR - Agregador de Noticias Argentinas';
    loadNews();
  }, []);

  useEffect(() => {
    loadNews();
  }, [selectedCategory]);

  const loadNews = () => {
    let news: News[] = [];
    
    if (selectedCategory) {
      news = getNewsByCategory(selectedCategory);
    } else {
      news = getUpdatedNews();
    }
    
    news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    setAllNews(news);
  };

  const handleRefresh = async () => {
    setIsLoading(true);
    try {
      // Simular delay de red
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Obtener noticias actualizadas
      const updatedFeaturedNews = getUpdatedFeaturedNews();
      const updatedNews = selectedCategory 
        ? getUpdatedNewsByCategory(selectedCategory)
        : getUpdatedNews();
      
      setFeaturedNews(updatedFeaturedNews);
      setAllNews(updatedNews.sort((a, b) => 
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      ));
      setLastUpdate(new Date());
    } catch (error) {
      console.error('Error al actualizar las noticias:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };

  const formatLastUpdate = (date: Date) => {
    return date.toLocaleTimeString('es-AR', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div>
      {/* Hero Section */}
      <NewsHero featuredNews={featuredNews} />
      
      {/* Main Content */}
      <div className="container py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* News Content */}
          <div className="lg:col-span-8">
            {/* Newsletter Signup */}
            <div className="mb-8">
              <NewsletterSignup />
            </div>
            
            {/* Category Filter and Refresh Button */}
            <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <CategoryFilter
                categories={categories}
                activeCategory={selectedCategory}
                onSelectCategory={handleCategorySelect}
              />
              
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  Última actualización: {formatLastUpdate(lastUpdate)}
                </span>
                <button
                  onClick={handleRefresh}
                  disabled={isLoading}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg bg-primary dark:bg-accent text-white transition-all ${
                    isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:bg-primary/90 dark:hover:bg-accent/90'
                  }`}
                >
                  <RefreshCw className={`h-4 w-4 ${isLoading ? 'animate-spin' : ''}`} />
                  {isLoading ? 'Actualizando...' : 'Actualizar'}
                </button>
              </div>
            </div>
            
            {/* All News Grid */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">
                {selectedCategory 
                  ? `Noticias de ${categories.find(c => c.slug === selectedCategory)?.name}`
                  : 'Últimas Noticias'
                }
              </h2>
              
              {allNews.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-600 dark:text-gray-400">
                    No hay noticias disponibles en esta categoría.
                  </p>
                </div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {allNews.map((news) => (
                    <NewsCard key={news.id} news={news} />
                  ))}
                </motion.div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Trending Topics */}
            <div className="mb-8">
              <Trending topics={trendingTopics} />
            </div>
            
            {/* RSS Feeds */}
            <div className="mb-8">
              <RssFeeds />
            </div>
            
            {/* Newsletter Popup */}
            <NewsletterSignup variant="popup" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;