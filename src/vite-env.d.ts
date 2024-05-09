/// <reference types="vite/client" />

interface Project {
  name: string;
  description: string;
  tags: string[];
  madeIn: string;
  links: Link[];
}

interface Link {
  name: string;
  url: string;
  icon: React.ReactNode;
}
