interface SlideShowProps {
  slides: any[];
}

export function SlideShow({ slides }: SlideShowProps) {
  return (
    <div className="overflow-hidden mt-[64px] relative before-and-after">
      <div className="flex flex-row animate-caroussel-slide">
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-label={slide.name}
            title={slide.name}
            className="px-10"
          >
            <span className="text-5xl">{slide.icon}</span>
          </div>
        ))}
        {slides.map((slide, index) => (
          <div
            key={index}
            aria-label={slide.name}
            title={slide.name}
            className="px-10"
          >
            <span className="text-5xl">{slide.icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
