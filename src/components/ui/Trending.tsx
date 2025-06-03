import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp } from 'lucide-react';
import { TrendingTopic } from '../../types';

interface TrendingProps {
  topics: TrendingTopic[];
}

const Trending: React.FC<TrendingProps> = ({ topics }) => {
  return (
    <div className="bg-white dark:bg-dark shadow rounded-lg p-6">
      <div className="flex items-center mb-4">
        <TrendingUp className="text-accent h-5 w-5 mr-2" />
        <h3 className="font-semibold text-lg">Tendencias</h3>
      </div>
      
      <ul className="space-y-3">
        {topics.map((topic) => (
          <li key={topic.id}>
            <Link
              to={`/search?q=${encodeURIComponent(topic.name)}`}
              className="flex items-center justify-between group"
            >
              <span className="text-dark dark:text-light group-hover:text-primary dark:group-hover:text-accent transition-colors">
                #{topic.name}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {topic.count} artículos
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Trending;