export interface TechStackItem {
  label: string;
}

export interface Project {
  name: string;
  slug: string;
  description?: string;
  thumbnail?: string;
  techstack?: TechStackItem[];
  role?: string;
  website?: string;
  github?: string;
}
