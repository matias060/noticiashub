import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { AmazonProduct } from '../../types';

interface AmazonProductsProps {
  products: AmazonProduct[];
}

const AmazonProducts: React.FC<AmazonProductsProps> = ({ products }) => {
  return (
    <div className="bg-white dark:bg-dark shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <ShoppingCart className="text-accent h-5 w-5 mr-2" />
        <h3 className="font-semibold text-lg">Productos Recomendados</h3>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {products.map((product) => (
          <motion.div
            key={product.id}
            whileHover={{ scale: 1.02 }}
            className="border dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <a
              href={product.affiliateLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={product.imageUrl}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-semibold mb-1">{product.title}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {product.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-accent">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-primary dark:text-accent">
                    Ver en Amazon
                  </span>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AmazonProducts;