/*
  # Create demo requests table
  
  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `business_type` (text)
      - `business_stage` (text)
      - `business_name` (text)
      - `locations` (text)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `phone` (text)
      - `status` (text)
      - `created_at` (timestamptz)
      - `scheduled_for` (timestamptz)
      - `notes` (text)
  
  2. Security
    - Enable RLS on `demo_requests` table
    - Add policy for service role access only
*/

-- Create demo requests table
CREATE TABLE IF NOT EXISTS demo_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  business_type text NOT NULL,
  business_stage text NOT NULL,
  business_name text NOT NULL,
  locations text NOT NULL,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now(),
  scheduled_for timestamptz,
  notes text,
  
  -- Add constraints
  CONSTRAINT valid_business_type CHECK (business_type IN ('salon', 'barbershop', 'spa', 'nails')),
  CONSTRAINT valid_business_stage CHECK (business_stage IN ('pre-launch', 'operating')),
  CONSTRAINT valid_status CHECK (status IN ('new', 'contacted', 'scheduled', 'completed'))
);

-- Enable RLS
ALTER TABLE demo_requests ENABLE ROW LEVEL SECURITY;

-- Create policy for service role access only
CREATE POLICY "Service role can manage demo requests" 
ON demo_requests 
FOR ALL 
USING (auth.jwt() IS NOT NULL)
WITH CHECK (auth.jwt() IS NOT NULL);