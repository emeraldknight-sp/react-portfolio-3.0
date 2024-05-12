import clsx from "clsx";
import * as Fa from "react-icons/fa";

interface MenuSocialMediaProps {
  flexible: boolean;
}

export function MenuSocialMedia({ flexible }: MenuSocialMediaProps) {
  const socialMedias: Link[] = [
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
      name: "WhatsApp",
      url: "https://wa.me/5586988641961",
      icon: <Fa.FaWhatsapp size={20} />,
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
        flexible && "md:flex-row md:items-center md:space-x-4 md:space-y-0",
      )}
    >
      {socialMedias.map((media, index) => (
        <li key={index}>
          <a
            href={media.url}
            className="flex justify-start items-center gap-1 outline-none"
            target="_blank"
            rel="noopener noreferrer"
            referrerPolicy="no-referrer"
          >
            {media.icon} {media.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
