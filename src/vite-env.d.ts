/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SERVICE_ID: string;
  readonly VITE_TEMPLATE_ID: string;
  readonly VITE_PUBLIC_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

import { AnchorHTMLAttributes } from "react";
import { IconType } from "react-icons";
import { LinkProps } from "react-router-dom";

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
  phone: number;
  message: string;
}

interface MenuSocialMediaProps {
  flexible: boolean;
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

interface LinkButtonProps
  extends LinkProps,
    Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  size: "md" | "lg";
  onClick?: () => void;
}

interface TechnologiesProps {
  name: string;
  icon: JSX.Element;
}

interface TechnologiesProviderProps {
  children: React.ReactNode;
}

interface AppContextProps {
  children: React.ReactNode;
}

interface MenuOption {
  text: string;
  url: string;
  acesskey: string;
}

interface CarouselProps {
  slides: any[];
}
