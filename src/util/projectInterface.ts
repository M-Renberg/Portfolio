export interface ProjectInterface {
  id: string | number;
  slug?: string;
  category?: 'work' | 'personal' | 'academic';
  employer?: string;
  role?: string;
  period?: string;
  link?: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  highlights?: string[];
  image?: string;
  images?: string[];
  badges: string[];
}