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
}

interface Inputs {
  name: string;
  email: string;
  message: string;
}

interface MenuItem {
  text: string;
  url: string;
}

interface MenuContextProviderProps {
  children: React.ReactNode;
}

interface MenuContextProps {
  option: string;
  setOption: (item: string) => void;
}
