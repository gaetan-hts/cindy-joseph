import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import carouselImages from "./carouselImages";

const CarouselGallery = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const slides = Object.values(carouselImages);

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
        {slides.map((image, index) => (
          <img key={index} src={image} alt={`Slider ${index + 1}`} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselGallery;
