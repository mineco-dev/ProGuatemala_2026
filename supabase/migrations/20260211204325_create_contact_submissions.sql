/*
  # Create contact submissions table

  ## Overview
  This migration creates a table to store contact form submissions from the ProGuatemala website.
  
  ## New Tables
  - `contact_submissions`
    - `id` (uuid, primary key) - Unique identifier for each submission
    - `name` (text, required) - Full name of the person contacting
    - `email` (text, required) - Email address for response
    - `phone` (text, optional) - Phone number if provided
    - `company` (text, optional) - Company name if applicable
    - `subject` (text, required) - Subject or inquiry type
    - `message` (text, required) - Detailed message from the user
    - `created_at` (timestamptz, default now()) - Timestamp of submission
    - `status` (text, default 'new') - Status of the inquiry (new, in_progress, resolved)
    - `language` (text, default 'es') - Language of the submission (es/en)

  ## Security
  - Enable RLS on `contact_submissions` table
  - Add INSERT policy to allow anonymous users to submit forms
  - Add SELECT, UPDATE policies for authenticated admin users only
  - Prevent unauthorized data access
  
  ## Important Notes
  1. Anonymous users can only INSERT submissions
  2. Only authenticated users can view and manage submissions
  3. All submissions are stored securely with timestamps
  4. Status field helps track inquiry workflow
*/

-- Create contact submissions table
CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  subject text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'new' CHECK (status IN ('new', 'in_progress', 'resolved')),
  language text DEFAULT 'es' CHECK (language IN ('es', 'en'))
);

-- Enable Row Level Security
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Policy: Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Policy: Only authenticated users can view submissions
CREATE POLICY "Authenticated users can view submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);

-- Policy: Only authenticated users can update submission status
CREATE POLICY "Authenticated users can update submissions"
  ON contact_submissions
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Policy: Only authenticated users can delete submissions
CREATE POLICY "Authenticated users can delete submissions"
  ON contact_submissions
  FOR DELETE
  TO authenticated
  USING (true);

-- Create index on created_at for efficient sorting
CREATE INDEX IF NOT EXISTS idx_contact_submissions_created_at 
  ON contact_submissions(created_at DESC);

-- Create index on status for filtering
CREATE INDEX IF NOT EXISTS idx_contact_submissions_status 
  ON contact_submissions(status);

-- Create index on email for lookups
CREATE INDEX IF NOT EXISTS idx_contact_submissions_email 
  ON contact_submissions(email);