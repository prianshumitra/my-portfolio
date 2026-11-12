export interface Project {
  id: string;
  title: string;
  tagline: string;
  role: string;
  category: 'Founder & Full Stack' | 'Full Stack System' | 'Web Platform';
  period: string;
  featured: boolean;
  metrics: string[];
  description: string;
  longDescription: string[];
  highlights: string[];
  technologies: string[];
  architecture: string[];
  liveUrl?: string;
  githubUrl?: string;
  bannerGradient: string;
  accentColor: string;
}

export interface TechnologyCategory {
  name: string;
  description: string;
  skills: {
    name: string;
    level: string;
    tag: string;
    icon?: string;
    details: string;
  }[];
}

export interface MusicTrack {
  id: string;
  title: string;
  subtitle: string;
  type: 'Vocal Cover' | 'Original Arrangement' | 'Instrumental';
  genre: string;
  duration: string;
  releaseYear: string;
  daw: string;
  description: string;
  tags: string[];
  waveformPoints: number[];
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  award: string;
  year: string;
  type: 'Hackathon' | 'National Exam' | 'Academic' | 'Competition';
  badge: string;
  description: string;
  stats?: string;
  accent: string;
}

export interface Milestone {
  year: string;
  period: string;
  title: string;
  institution: string;
  description: string;
  tags: string[];
  badge?: string;
}
