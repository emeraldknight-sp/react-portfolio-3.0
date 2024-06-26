import * as Fa from "react-icons/fa6";
import * as Io from "react-icons/io";
import clsx from "clsx";
import { MenuSocialMediaProps } from "../vite-env";

export function MenuSocialMedia({ flexible }: MenuSocialMediaProps) {
  const socialMedias = [
    {
      name: "TikTok",
      url: "https://www.tiktok.com/@davidalmeidadev",
      icon: <Fa.FaTiktok size={20} />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/davidalmeidadev/",
      icon: <Fa.FaInstagram size={20} />,
    },
    {
      name: "Signal",
      url: "https://signal.me/#eu/OCa5yL5EtHtyByR9zgHaENZ20v4PRKAJIjfpbvqm1qTYZUXVHLpHvJX-ag5sz2OJ",
      icon: <Fa.FaSignalMessenger size={20} />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/davidalmeidadev/",
      icon: <Fa.FaLinkedin size={20} />,
    },
  ];

  return (
    <ul
      className={clsx(
        "flex flex-col space-y-2",
        flexible && "md:flex-row md:items-center md:space-y-0",
      )}
    >
      {socialMedias.map((media, index) => (
        <li
          key={index}
          className={clsx(
            "pt-1 pr-11 bg-gray-900 text-gray-500",
            !flexible && "bg-transparent text-gray-900",
            index === 0 && "with-before",
          )}
        >
          <a
            href={media.url}
            className="flex justify-start items-center gap-1 font-mono group"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            <span
              className={
                "flex justify-start items-center gap-1 transition-all ease-[cubic-bezier(.5,.12,.46,.88)] duration-300 transform -translate-x-full opacity-0 group-hover:opacity-100 group-hover:translate-x-0 relative -z-40 group-hover:z-10 group-hover:text-white"
              }
            >
              <Io.IoIosArrowRoundForward size={20} /> {media.icon} {media.name}
            </span>
            <span
              className={`flex justify-start items-center gap-1 transition-all ease-[cubic-bezier(.5,.12,.46,.88)] duration-500 transform group-hover:translate-y-4 group-hover:opacity-0 absolute z-10`}
            >
              {media.icon} {media.name}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
