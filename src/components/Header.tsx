import * as Md from "react-icons/md";
import Logo from "../assets/logo.webp";
import clsx from "clsx";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";
import { MouseEvent, useContext, useState } from "react";
import { menu } from "../mock/menu";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { option, setOption } = useContext(MenuContext);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);

    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop - 80,
      });
    }
  };

  const handleClick = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const selectedOption = e.currentTarget.ariaLabel;

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollTo(id);
      }, 1000);
    } else {
      scrollTo(id);
    }

    selectedOption !== null && setOption(selectedOption);
  };

  const toggleMenu = () => {
    console.log("Menu:", isOpen ? "Fechado" : "Aberto");
    setIsOpen(!isOpen);
  };

  return (
    <header
      id="start"
      role="header"
      aria-label="header"
      className="flex items-center px-4 h-16 shadow-md shadow-black-500 fixed top-0 left-0 z-50 w-full bg-gray-900"
    >
      <div className="flex justify-between container mx-auto">
        <Link
          to="/"
          target="_self"
          className="flex items-center font-bold outline-none"
        >
          <img src={Logo} width={40} height={40} alt="logotipo website" />
          David Almeida
        </Link>
        <nav className="flex justify-center items-center" role="navigation">
          <button
            type="button"
            className="outline-none md:hidden"
            aria-label="open menu"
            onClick={toggleMenu}
          >
            {isOpen ? <Md.MdClose size={24} /> : <Md.MdMenu size={24} />}
          </button>
          <ul className="hidden md:flex md:gap-4" role="list">
            {menu.map((item, index) => (
              <li key={index} role="listitem">
                <a
                  key={index}
                  className={clsx(
                    "text-lg outline-none cursor-pointer after:content-['/'] before:content-['/']  hover:text-emerald-400 hover:after:text-emerald-400 hover:before:text-emerald-400 transition-all duration-200",
                    option === item.text
                      ? "text-emerald-400 after:text-emerald-400 before:text-emerald-400"
                      : "after:text-transparent before:text-transparent",
                  )}
                  onClick={(e) => handleClick(e, item.url)}
                  accessKey={item.acesskey}
                  aria-label={item.text}
                  aria-current={option === item.text ? "page" : undefined}
                >
                  &nbsp;{item.text}&nbsp;
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
