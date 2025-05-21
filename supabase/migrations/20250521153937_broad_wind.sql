/*
  # Create inventory management tables

  1. New Tables
    - `inventory_items`
      - `id` (uuid, primary key)
      - `name` (text)
      - `brand` (text)
      - `category` (text)
      - `sku` (text, unique)
      - `in_stock` (integer)
      - `min_stock` (integer)
      - `max_stock` (integer)
      - `reorder_point` (integer)
      - `unit_price` (numeric)
      - `retail_price` (numeric)
      - `last_restocked` (timestamptz)
      - `expiry_date` (timestamptz, nullable)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `inventory_categories`
      - `id` (uuid, primary key)
      - `name` (text, unique)
      - `description` (text)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on both tables
    - Add policies for authenticated users to manage inventory
*/

-- Create inventory categories table
CREATE TABLE IF NOT EXISTS inventory_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text UNIQUE NOT NULL,
  description text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Create inventory items table
CREATE TABLE IF NOT EXISTS inventory_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  brand text NOT NULL,
  category_id uuid REFERENCES inventory_categories(id),
  sku text UNIQUE NOT NULL,
  in_stock integer NOT NULL DEFAULT 0,
  min_stock integer NOT NULL DEFAULT 0,
  max_stock integer NOT NULL DEFAULT 0,
  reorder_point integer NOT NULL DEFAULT 0,
  unit_price numeric(10,2) NOT NULL,
  retail_price numeric(10,2) NOT NULL,
  last_restocked timestamptz NOT NULL DEFAULT now(),
  expiry_date timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  
  CONSTRAINT positive_stock CHECK (in_stock >= 0),
  CONSTRAINT valid_stock_levels CHECK (min_stock <= max_stock),
  CONSTRAINT valid_prices CHECK (unit_price > 0 AND retail_price > 0)
);

-- Enable RLS
ALTER TABLE inventory_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE inventory_items ENABLE ROW LEVEL SECURITY;

-- Create policies for authenticated users
CREATE POLICY "Authenticated users can read inventory categories"
ON inventory_categories
FOR SELECT
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage inventory categories"
ON inventory_categories
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can read inventory items"
ON inventory_items
FOR SELECT
USING (auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can manage inventory items"
ON inventory_items
FOR ALL
USING (auth.role() = 'authenticated')
WITH CHECK (auth.role() = 'authenticated');

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger for updated_at
CREATE TRIGGER update_inventory_items_updated_at
  BEFORE UPDATE ON inventory_items
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();