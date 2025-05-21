/*
  # Create demo requests table

  1. New Tables
    - `demo_requests`
      - `id` (uuid, primary key)
      - `business_type` (text) - Type of business (salon, barbershop, etc.)
      - `business_stage` (text) - Whether business is pre-launch or operating
      - `business_name` (text) - Name of the business
      - `locations` (text) - Number of locations
      - `first_name` (text) - Contact's first name
      - `last_name` (text) - Contact's last name
      - `email` (text) - Business email
      - `phone` (text) - Business phone
      - `status` (text) - Status of the demo request (new, contacted, scheduled, completed)
      - `created_at` (timestamptz) - When the request was submitted
      - `scheduled_for` (timestamptz) - When the demo is scheduled for
      - `notes` (text) - Additional notes about the demo request

  2. Security
    - Enable RLS on demo_requests table
    - Add policies for admin access
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

-- Create policy for admin users to manage demo requests
CREATE POLICY "Admins can manage demo requests" 
ON demo_requests 
FOR ALL 
TO authenticated 
USING (auth.uid() IN (
  SELECT id FROM auth.users WHERE auth.email() IN (
    SELECT email FROM users WHERE role = 'admin'
  )
));