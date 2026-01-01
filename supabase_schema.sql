-- =============================================
-- Bhet Mobile Supabase Database Schema
-- Run this SQL in your Supabase SQL Editor
-- =============================================

-- Products Table
CREATE TABLE IF NOT EXISTS products (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    price VARCHAR(100) NOT NULL,
    badge VARCHAR(100) DEFAULT 'New Arrival',
    category VARCHAR(50) DEFAULT 'phone' CHECK (category IN ('phone', 'accessory')),
    image_url TEXT,
    is_trending BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Offers Table
CREATE TABLE IF NOT EXISTS offers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    discount VARCHAR(100) NOT NULL,
    valid_until DATE,
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Site Settings Table
CREATE TABLE IF NOT EXISTS site_settings (
    id INTEGER PRIMARY KEY DEFAULT 1,
    theme_id VARCHAR(50) DEFAULT 'default-dark',
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Insert default site settings
INSERT INTO site_settings (id, theme_id) VALUES (1, 'bhet-original')
ON CONFLICT (id) DO NOTHING;

-- Enable Row Level Security (RLS)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE offers ENABLE ROW LEVEL SECURITY;
ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;

-- Create policies for public access (Read & Write)
-- Note: In a production app with Supabase Auth, you would restrict Write to 'authenticated' users.
-- Since we are using a hardcoded admin password in the app, we allow public write access from the client.

-- Products
CREATE POLICY "Public Read Products" ON products FOR SELECT USING (true);
CREATE POLICY "Public Insert Products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Products" ON products FOR UPDATE USING (true);
CREATE POLICY "Public Delete Products" ON products FOR DELETE USING (true);

-- Offers
CREATE POLICY "Public Read Offers" ON offers FOR SELECT USING (true);
CREATE POLICY "Public Insert Offers" ON offers FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Offers" ON offers FOR UPDATE USING (true);
CREATE POLICY "Public Delete Offers" ON offers FOR DELETE USING (true);

-- Site Settings
CREATE POLICY "Public Read Settings" ON site_settings FOR SELECT USING (true);
CREATE POLICY "Public Insert Settings" ON site_settings FOR INSERT WITH CHECK (true);
CREATE POLICY "Public Update Settings" ON site_settings FOR UPDATE USING (true);

-- Sample Data (Optional - Remove if not needed)
INSERT INTO products (name, description, price, badge, category, image_url, is_trending) VALUES
('Apple iPhone 15', '128GB • All Colors Available', 'Ask for Deal', 'Best Seller', 'phone', 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=500&q=80', true),
('Samsung S24 Ultra', 'AI Features • Titanium', 'Ask for Deal', 'New Arrival', 'phone', 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?auto=format&fit=crop&w=500&q=80', true),
('OnePlus 12', '256GB • Flowy Emerald', '₹64,999', 'Hot Deal', 'phone', 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=500&q=80', true),
('Vivo X100 Pro', '512GB • Asteroid Black', '₹89,999', 'New Arrival', 'phone', 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=500&q=80', false),
('Apple AirPods Pro 2', 'Active Noise Cancellation', '₹24,900', 'Best Seller', 'accessory', 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?auto=format&fit=crop&w=500&q=80', false),
('Samsung Galaxy Buds 2 Pro', 'Hi-Fi Sound • IPX7', '₹14,999', 'Hot Deal', 'accessory', 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=500&q=80', false);

INSERT INTO offers (title, description, discount, valid_until, is_active) VALUES
('New Year Sale 2026!', 'Special discounts on all smartphones', 'Up to 20% OFF', '2026-01-15', true);

-- =============================================
-- Run this SQL in your Supabase SQL Editor
-- Then copy your URL and Anon Key to .env file
-- =============================================
