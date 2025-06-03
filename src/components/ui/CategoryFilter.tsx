import React, { useState } from 'react';
import { Filter, ChevronDown, X } from 'lucide-react';
import { Category } from '../../types';
import { motion, AnimatePresence } from 'framer-motion';

interface CategoryFilterProps {
  categories: Category[];
  activeCategory?: string;
  onSelectCategory: (categorySlug: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  activeCategory,
  onSelectCategory,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleCategoryClick = (categorySlug: string) => {
    onSelectCategory(categorySlug);
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="btn btn-outline flex items-center"
        >
          <Filter className="h-4 w-4 mr-2" />
          Filtrar por categoría
          <ChevronDown className="h-4 w-4 ml-2" />
        </button>

        {activeCategory && (
          <div className="flex items-center bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent px-3 py-1 rounded">
            {categories.find(c => c.slug === activeCategory)?.name}
            <button
              onClick={() => onSelectCategory('')}
              className="ml-1"
              aria-label="Borrar filtro"
            >
              <X size={16} />
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {showDropdown && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 z-10 w-64 bg-white dark:bg-dark border dark:border-gray-700 rounded shadow-lg mt-1"
          >
            <div className="p-2">
              <input
                type="text"
                placeholder="Buscar categoría..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2 text-sm border dark:border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-800 dark:text-white"
              />
            </div>
            <div className="max-h-60 overflow-y-auto py-1">
              <button
                onClick={() => handleCategoryClick('')}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                  !activeCategory ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent' : ''
                }`}
              >
                Todas las categorías
              </button>
              {filteredCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryClick(category.slug)}
                  className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 ${
                    activeCategory === category.slug
                      ? 'bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent'
                      : ''
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryFilter;