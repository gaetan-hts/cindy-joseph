import React, { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useSelector } from "react-redux";
import carouselImages from "./carouselImages";

const CarouselGallery = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  const slides = Object.values(carouselImages);

  const [showThumbs, setShowThumbs] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setShowThumbs(windowWidth >= 600);
    };

    // Écoute du redimensionnement de la fenêtre
    window.addEventListener("resize", handleResize);

    // Vérification initiale de la taille de la fenêtre
    handleResize();

    // Nettoyage de l'écouteur d'événement lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="gallery-container" id="scroll-gallery">
      {selectedLanguage === "fr" ? <h2>Galerie</h2> : <h2>Gallery</h2>}
      <Carousel
        autoPlay
        interval={6000}
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        showArrows={showThumbs}
        useKeyboardArrows={true}
        swipeable={true}
        showThumbs={showThumbs}
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
