import Parser from 'rss-parser';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';
import { RSSFeed, RSSItem } from '../types';
import { rssSources } from './mockData';

const parser = new Parser({
  customFields: {
    item: [
      ['media:content', 'media'],
      ['content:encoded', 'content'],
      ['dc:creator', 'creator'],
    ],
  },
});

export const fetchRSSFeeds = async (): Promise<RSSFeed[]> => {
  try {
    const feeds = await Promise.all(
      rssSources.map(async (source) => {
        try {
          const feed = await parser.parseURL(source.url);
          return {
            title: feed.title || source.name,
            link: feed.link || source.url,
            items: feed.items.map((item) => ({
              title: item.title || '',
              link: item.link || '',
              pubDate: format(new Date(item.pubDate || new Date()), "d 'de' MMMM 'de' yyyy, HH:mm", { locale: es }),
              content: item.content || item['content:encoded'] || '',
              creator: item.creator || item.author || '',
              categories: item.categories || [],
            })),
          };
        } catch (error) {
          console.error(`Error fetching RSS feed from ${source.name}:`, error);
          return null;
        }
      })
    );

    return feeds.filter((feed): feed is RSSFeed => feed !== null);
  } catch (error) {
    console.error('Error fetching RSS feeds:', error);
    return [];
  }
};