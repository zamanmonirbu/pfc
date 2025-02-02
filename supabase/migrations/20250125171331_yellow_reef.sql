/*
  # Create newsletter subscribers table

  1. New Tables
    - `newsletter_subscribers`
      - `id` (uuid, primary key)
      - `email` (text, unique)
      - `subscribed_at` (timestamp)
      - `status` (text)
      - `discount_code` (text)
      - `created_at` (timestamp)
  2. Security
    - Enable RLS on `newsletter_subscribers` table
    - Add policy for authenticated users to read their own data
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  subscribed_at timestamptz NOT NULL,
  status text NOT NULL DEFAULT 'active',
  discount_code text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public can insert newsletter subscribers"
  ON newsletter_subscribers
  FOR INSERT
  TO public
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read their own subscriptions"
  ON newsletter_subscribers
  FOR SELECT
  TO authenticated
  USING (auth.uid() IN (
    SELECT auth.uid()
    FROM auth.users
    WHERE auth.users.email = newsletter_subscribers.email
  ));