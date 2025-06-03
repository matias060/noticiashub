import { supabase } from '../lib/supabase';
import { News, RSSFeed } from '../types';
import { fetchRSSFeeds } from './rssParser';
import { generateNewsSummary } from './aiSummary';

export const fetchNews = async (category?: string): Promise<News[]> => {
  try {
    let query = supabase.from('news').select('*');
    
    if (category) {
      query = query.eq('category', category);
    }
    
    const { data, error } = await query.order('publishedAt', { ascending: false });
    
    if (error) throw error;
    return data || [];
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};

export const fetchNewsById = async (id: string): Promise<News | null> => {
  try {
    const { data, error } = await supabase
      .from('news')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching news by id:', error);
    return null;
  }
};

export const syncRSSFeeds = async () => {
  try {
    const feeds = await fetchRSSFeeds();
    
    for (const feed of feeds) {
      for (const item of feed.items) {
        // Check if article already exists
        const { data: existing } = await supabase
          .from('news')
          .select('id')
          .eq('url', item.link)
          .single();
        
        if (!existing) {
          // Generate AI summary
          const aiSummary = await generateNewsSummary(item.content);
          
          // Insert new article
          const { error } = await supabase.from('news').insert({
            title: item.title,
            content: item.content,
            summary: item.content.substring(0, 200) + '...',
            aiSummary,
            url: item.link,
            source: feed.title,
            author: item.creator || 'Redacción',
            publishedAt: new Date(item.pubDate).toISOString(),
            category: item.categories?.[0]?.toLowerCase() || 'general',
            tags: item.categories || [],
            imageUrl: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg' // Default image
          });
          
          if (error) throw error;
        }
      }
    }
  } catch (error) {
    console.error('Error syncing RSS feeds:', error);
  }
};