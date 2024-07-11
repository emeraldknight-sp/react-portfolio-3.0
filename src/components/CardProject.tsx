import * as Icon from "react-icons/fa6";
import { CardProjectProps } from "../vite-env";
import { Link } from "react-router-dom";

export function CardProject({ project }: CardProjectProps) {
  return (
    <div
      className="flex flex-col gap-4 p-4 pl-0 flex-1"
      aria-labelledby={project.name}
    >
      <h4 id={project.name} className="text-2xl leading-10 font-bold font-mono">
        {project.name}
      </h4>
      <div
        className="flex flex-row flex-wrap gap-2"
        aria-labelledby="technologies"
      >
        <span id="techonologies" className="font-medium text-md text-gray-300">
          Tecnologias:
        </span>
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-gray-800 text-emerald-400 text-xs font-semibold rounded p-1"
            aria-label={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <p className="text-md text-gray-300 leading-7 ">{project.description}</p>
      <ul className="flex justify-start gap-4 md:gap-8" role="list">
        {project.links.map((link, index) => (
          <li
            key={index}
            className="flex justify-center items-center gap-2 p-2 border-2 border-gray-800 rounded-full"
            role="listitem"
          >
            <Link
              to={link.url}
              className="flex justify-center items-center gap-2 outline-none text-xl"
              title={`Acesse a aplicação no ${link.name}`}
              aria-label={`acesse a aplicação no ${link.name}`}
              tabIndex={0}
              target="_blank"
              rel="noreferrer noopener"
            >
              {index === 0 ? (
                <Icon.FaGithub />
              ) : index === 1 ? (
                <Icon.FaArrowUpRightFromSquare />
              ) : index === 2 ? (
                <Icon.FaAppStore />
              ) : (
                <Icon.FaGooglePlay />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
