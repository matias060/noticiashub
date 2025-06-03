import React from 'react';
import { rssFeeds } from '../../utils/mockData';
import { Rss } from 'lucide-react';

const RssFeeds: React.FC = () => {
  const feedsByCategory = rssFeeds.reduce((acc, feed) => {
    if (!acc[feed.category]) {
      acc[feed.category] = [];
    }
    acc[feed.category].push(feed);
    return acc;
  }, {} as Record<string, typeof rssFeeds>);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
      <div className="flex items-center mb-6">
        <Rss className="h-6 w-6 text-primary dark:text-accent mr-2" />
        <h2 className="text-xl font-bold">Feeds RSS</h2>
      </div>

      {Object.entries(feedsByCategory).map(([category, feeds]) => (
        <div key={category} className="mb-6 last:mb-0">
          <h3 className="text-lg font-semibold mb-3 capitalize">
            {category}
          </h3>
          <div className="space-y-3">
            {feeds.map((feed) => (
              <a
                key={feed.id}
                href={feed.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors group"
              >
                <img
                  src={feed.icon}
                  alt={`${feed.name} icon`}
                  className="w-6 h-6 mr-3"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/24';
                  }}
                />
                <span className="flex-grow font-medium group-hover:text-primary dark:group-hover:text-accent">
                  {feed.name}
                </span>
                <Rss className="h-4 w-4 text-gray-400 group-hover:text-primary dark:group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default RssFeeds; 