import { TechnologiesProps, TechnologiesProviderProps } from "../vite-env";
import { createContext } from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiStyledcomponents,
  SiCssmodules,
  SiTailwindcss,
  SiNodedotjs,
  SiFirebase,
  SiTypescript,
  SiPostgresql,
  SiExpress,
  SiMui,
  SiBem,
  SiFigma,
  SiGit,
  SiGithub,
  SiYarn,
  SiPrettier,
  SiEslint,
  SiMarkdown,
  SiVercel,
} from "react-icons/si";

export const TechnologiesContext = createContext<TechnologiesProps[]>([]);

export const TechnologiesContextProvider = ({
  children,
}: TechnologiesProviderProps) => {
  const technologies = [
    {
      name: "HTML",
      icon: <SiHtml5 />,
    },
    {
      name: "CSS",
      icon: <SiCss3 />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript />,
    },
    {
      name: "React",
      icon: <SiReact />,
    },
    {
      name: "Next",
      icon: <SiNextdotjs />,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
    },
    {
      name: "CSS Modules",
      icon: <SiCssmodules />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      name: "Material UI",
      icon: <SiMui />,
    },
    {
      name: "CSS BEM",
      icon: <SiBem />,
    },
    {
      name: "Node",
      icon: <SiNodedotjs />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript />,
    },
    {
      name: "Firebase",
      icon: <SiFirebase />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
    {
      name: "Express.JS",
      icon: <SiExpress />,
    },
    {
      name: "Figma",
      icon: <SiFigma />,
    },

    {
      name: "Git",
      icon: <SiGit />,
    },
    {
      name: "GitHub",
      icon: <SiGithub />,
    },
    {
      name: "Yarn",
      icon: <SiYarn />,
    },
    {
      name: "Prettier",
      icon: <SiPrettier />,
    },
    {
      name: "ESLint",
      icon: <SiEslint />,
    },

    {
      name: "Markdown",
      icon: <SiMarkdown />,
    },

    {
      name: "Vercel",
      icon: <SiVercel />,
    },
  ];

  return (
    <TechnologiesContext.Provider value={technologies}>
      {children}
    </TechnologiesContext.Provider>
  );
};
