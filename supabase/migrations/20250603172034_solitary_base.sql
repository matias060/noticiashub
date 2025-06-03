/*
  # Create news table

  1. New Tables
    - `news`
      - `id` (uuid, primary key)
      - `title` (text)
      - `summary` (text)
      - `content` (text)
      - `ai_summary` (text)
      - `image_url` (text)
      - `source` (text)
      - `author` (text)
      - `published_at` (timestamptz)
      - `category` (text)
      - `tags` (text[])
      - `url` (text, unique)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `news` table
    - Add policy for public read access
*/

CREATE TABLE IF NOT EXISTS news (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  summary text,
  content text NOT NULL,
  ai_summary text,
  image_url text,
  source text NOT NULL,
  author text,
  published_at timestamptz NOT NULL,
  category text NOT NULL,
  tags text[],
  url text UNIQUE NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE news ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read access"
  ON news
  FOR SELECT
  TO public
  USING (true);