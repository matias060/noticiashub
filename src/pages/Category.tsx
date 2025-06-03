import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { categories, getNewsByCategory } from '../utils/mockData';
import NewsCard from '../components/ui/NewsCard';
import CategoryFilter from '../components/ui/CategoryFilter';
import { News } from '../types';
import { Clock, ArrowDownUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Category: React.FC = () => {
  const { category } = useParams<{ category: string }>();
  const [filteredNews, setFilteredNews] = useState<News[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(category || '');
  const [sortBy, setSortBy] = useState<'newest' | 'oldest'>('newest');
  
  useEffect(() => {
    if (category) {
      document.title = `${getCategoryName(category)} - NewsAR`;
      setSelectedCategory(category);
    } else {
      document.title = 'Categorías - NewsAR';
    }
  }, [category]);
  
  useEffect(() => {
    let news: News[] = [];
    
    if (selectedCategory) {
      news = getNewsByCategory(selectedCategory);
    } else {
      // If no category is selected, show all news
      categories.forEach((cat) => {
        news = [...news, ...getNewsByCategory(cat.slug)];
      });
    }
    
    // Sort news
    if (sortBy === 'newest') {
      news.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
    } else {
      news.sort((a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime());
    }
    
    setFilteredNews(news);
  }, [selectedCategory, sortBy]);
  
  const getCategoryName = (slug: string): string => {
    const cat = categories.find((c) => c.slug === slug);
    return cat ? cat.name : 'Categoría';
  };
  
  const handleCategorySelect = (categorySlug: string) => {
    setSelectedCategory(categorySlug);
  };
  
  const toggleSort = () => {
    setSortBy(sortBy === 'newest' ? 'oldest' : 'newest');
  };
  
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        {selectedCategory ? getCategoryName(selectedCategory) : 'Todas las categorías'}
      </h1>
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <CategoryFilter
          categories={categories}
          activeCategory={selectedCategory}
          onSelectCategory={handleCategorySelect}
        />
        
        <button
          onClick={toggleSort}
          className="flex items-center text-sm font-medium mt-4 md:mt-0 text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-accent transition-colors"
        >
          <Clock className="h-4 w-4 mr-1" />
          Ordenar por: {sortBy === 'newest' ? 'Más recientes' : 'Más antiguos'}
          <ArrowDownUp className="h-4 w-4 ml-1" />
        </button>
      </div>
      
      {filteredNews.length === 0 ? (
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredNews.map((news) => (
            <NewsCard key={news.id} news={news} />
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Category;