import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import * as Fa from "react-icons/fa6";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { Project } from "../vite-env";
import { useEffect, useState } from "react";

export function SlickCaroussel({ slides }: { slides: Project[] }) {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWidth(width);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    arrows: false,
    slidesToShow: width > 768 ? 2 : 1,
    slidesToScroll: width > 768 ? 2 : 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <div key={index}>
          <div
            className="flex flex-col gap-4 p-4 pl-0 flex-1"
            aria-labelledby={slide.name}
          >
            <h4
              id={slide.name}
              className="text-2xl leading-10 font-bold font-mono"
            >
              {slide.name}
            </h4>
            <div
              className="flex flex-row flex-wrap gap-2"
              aria-labelledby="technologies"
            >
              <span
                id="techonologies"
                className="font-medium text-md text-gray-300"
              >
                Tecnologias:
              </span>
              {slide.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-gray-800 text-emerald-400 text-xs font-semibold rounded p-1"
                  aria-label={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-md text-gray-300 leading-7 ">
              {slide.description}
            </p>
            <ul className="flex justify-start gap-4 md:gap-8" role="list">
              {slide.links.map((link, index) => (
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
                      <Fa.FaGithub />
                    ) : index === 1 ? (
                      <Fa.FaArrowUpRightFromSquare />
                    ) : index === 2 ? (
                      <Fa.FaAppStore />
                    ) : (
                      <Fa.FaGooglePlay />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </Slider>
  );
}
