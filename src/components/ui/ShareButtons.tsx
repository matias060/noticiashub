import React from 'react';
import { Facebook, Twitter, Linkedin, Link2 } from 'lucide-react';
import { motion } from 'framer-motion';

interface ShareButtonsProps {
  url: string;
  title: string;
}

const ShareButtons: React.FC<ShareButtonsProps> = ({ url, title }) => {
  const fullUrl = `${window.location.origin}${url}`;
  
  const handleShare = (platform: string) => {
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(fullUrl)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(fullUrl)
          .then(() => {
            alert('URL copiada al portapapeles');
          })
          .catch((error) => {
            console.error('Error al copiar:', error);
          });
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const buttonVariants = {
    hover: {
      y: -3,
      transition: { duration: 0.2 }
    }
  };

  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-600 dark:text-gray-400 text-sm mr-2">Compartir:</span>
      
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => handleShare('facebook')}
        className="w-8 h-8 rounded-full bg-[#3b5998] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Compartir en Facebook"
      >
        <Facebook size={16} />
      </motion.button>
      
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => handleShare('twitter')}
        className="w-8 h-8 rounded-full bg-[#1da1f2] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Compartir en Twitter"
      >
        <Twitter size={16} />
      </motion.button>
      
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => handleShare('linkedin')}
        className="w-8 h-8 rounded-full bg-[#0077b5] text-white flex items-center justify-center hover:opacity-90 transition-opacity"
        aria-label="Compartir en LinkedIn"
      >
        <Linkedin size={16} />
      </motion.button>
      
      <motion.button
        whileHover="hover"
        variants={buttonVariants}
        onClick={() => handleShare('copy')}
        className="w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
        aria-label="Copiar enlace"
      >
        <Link2 size={16} />
      </motion.button>
    </div>
  );
};

export default ShareButtons;