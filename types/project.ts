export interface TechStackItem {
  label: string;
}

export interface Project {
  name: string;
  slug: string;
  description?: string;
  longDescription?: string;
  thumbnail?: string;
  images?: string[];
  techstack?: TechStackItem[];
  role?: string;
  website?: string;
  github?: string;
  year?: string;
  duration?: string;
}
