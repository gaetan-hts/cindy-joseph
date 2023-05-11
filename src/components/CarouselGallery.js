import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";

const CarouselGallery = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const indexArray = Array.from({ length: 23 }, (_, i) => i + 1);
  const slidesUrl = indexArray.map((index) => `img${index}.jpg`);

  return (
    <div className="gallery-container" id="scroll-gallery">
      {selectedLanguage === "fr" ? <h2>Galerie</h2> : <h2>Gallery</h2>}
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showArrows={true}
        useKeyboardArrows={true}
        swipeable={true}
        className="main-slide"
      >
        {slidesUrl.map((image, index) => (
          <img
            key={index}
            src={`/sliders/${image}`}
            alt={`Slider ${index + 1}`}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselGallery;
