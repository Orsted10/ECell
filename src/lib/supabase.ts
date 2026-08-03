import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder-url.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type FounderApplication = {
  full_name: string;
  email: string;
  student_id: string;
  department: string;
  year: string;
  phone: string;
  linkedin_url?: string;
  github_url?: string;
  portfolio_url?: string;
  track: string;
  problem_statement: string;
  build_in_30_days: string;
  past_experience: string;
  skills: string[];
  weekly_availability: string;
  founder_score: number;
  status: string; // 'pending', 'accepted', 'rejected'
};
