import Logo from "../assets/logo.webp";
import clsx from "clsx";
import { MdMenu } from "react-icons/md";
import { MenuContext } from "../context/menuContext";
import { MouseEvent, useContext } from "react";
import { menu } from "../mock/menu";
import { useLocation, useNavigate } from "react-router-dom";

export function Header() {
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
    const selectedOption = e.currentTarget.accessKey;

    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        scrollTo(id);
      }, 1000);
    } else {
      scrollTo(id);
    }

    setOption(selectedOption);
  };

  return (
    <header
      id="start"
      className="flex items-center px-4 h-16 shadow-md shadow-black-500 fixed top-0 left-0 z-50 w-full bg-gray-900"
    >
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
                <a
                  key={index}
                  accessKey={item.text}
                  className={clsx(
                    "text-lg outline-none cursor-pointer after:content-['/'] before:content-['/']  hover:text-emerald-400 hover:after:text-emerald-400 hover:before:text-emerald-400 transition-all duration-200",
                    option === item.text
                      ? "text-emerald-400 after:text-emerald-400 before:text-emerald-400"
                      : "after:text-transparent before:text-transparent",
                  )}
                  onClick={(e) => handleClick(e, item.url)}
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
