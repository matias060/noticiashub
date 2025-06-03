export interface News {
  id: string;
  title: string;
  summary: string;
  content: string;
  imageUrl: string;
  source: string;
  author: string;
  publishedAt: string;
  category: string;
  tags: string[];
  url: string;
  aiSummary?: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
}

export interface TrendingTopic {
  id: string;
  name: string;
  count: number;
}

export interface NewsletterSubscription {
  email: string;
  name?: string;
  categories?: string[];
}

export interface AmazonProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  affiliateLink: string;
  category: string;
}

export interface RSSFeed {
  title: string;
  link: string;
  items: RSSItem[];
}

export interface RSSItem {
  title: string;
  link: string;
  pubDate: string;
  content: string;
  creator?: string;
  categories?: string[];
}

export interface RssFeed {
  id: string;
  name: string;
  url: string;
  icon: string;
  category: string;
}