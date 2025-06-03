import React from 'react';
import { News } from '../../types';
import NewsCard from './NewsCard';
import { motion } from 'framer-motion';

interface NewsGridProps {
  news: News[];
  title?: string;
  subtitle?: string;
}

const NewsGrid: React.FC<NewsGridProps> = ({ news, title, subtitle }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-8">
      <div className="container">
        {(title || subtitle) && (
          <div className="mb-6">
            {title && (
              <h2 className="text-2xl font-bold text-dark dark:text-light">{title}</h2>
            )}
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-400 mt-1">{subtitle}</p>
            )}
          </div>
        )}
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
        >
          {news.map((newsItem) => (
            <motion.div key={newsItem.id} variants={item}>
              <NewsCard news={newsItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NewsGrid;