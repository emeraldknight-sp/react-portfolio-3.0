import { useState } from "react";
import Logo from "../assets/logo.webp";
import { MdMenu } from "react-icons/md";
import clsx from "clsx";

export function Header() {
  const menu = ["Início", "Sobre", "Projetos", "Contato"];
  const [option, setOption] = useState("Início");

  const handleClick = (item: string) => {
    setOption(item);
  };

  return (
    <header className="flex items-center px-4 h-16 shadow-md shadow-black-500">
      <div className="flex justify-between container mx-auto">
        <a
          href="/"
          target="_self"
          className="flex items-center font-bold outline-none"
        >
          <img
            src={Logo}
            alt="logotipo website david almeida"
            width={40}
            height={40}
          />
          David Almeida
        </a>
        <nav className="flex justify-center items-center">
          <button type="button" className="outline-none md:hidden">
            <MdMenu size={24} />
          </button>
          <ul className="hidden md:flex md:gap-4">
            {menu.map((item, index) => (
              <li key={index}>
                <button
                  key={index}
                  type="button"
                  className={clsx(
                    "text-lg outline-none after:content-['/'] before:content-['/']  hover:text-emerald-400 hover:after:text-emerald-400 hover:before:text-emerald-400 transition-all duration-200",
                    option === item
                      ? "text-emerald-400 after:text-emerald-400 before:text-emerald-400"
                      : "after:text-transparent before:text-transparent",
                  )}
                  onClick={() => handleClick(item)}
                >
                  &nbsp;{item}&nbsp;
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
