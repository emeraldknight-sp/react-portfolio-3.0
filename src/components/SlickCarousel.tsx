import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { CardProject } from "./CardProject";
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
          <CardProject project={slide} />
        </div>
      ))}
    </Slider>
  );
}
