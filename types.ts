export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  category: 'All' | 'Web Dev' | 'Machine Learning' | 'Python' | 'Mobile' | 'Game Dev';
  links: {
    demo?: string;
    code?: string;
  };
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  icon: string; // Material Symbol name
}

export interface NavItem {
  label: string;
  href: string;
}