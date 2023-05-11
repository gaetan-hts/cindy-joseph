import React from "react";
import "./assets/styles/index.scss";
import Home from "./components/Home";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Contact from "./components/Contact";
import CarouselGallery from "./components/CarouselGallery";
import Footer from "./components/Footer";
import UpButton from "./components/UpButton";
import LanguageSwitcher from "./components/LanguageSwitcher";

const App = () => {
  return (
    <div className="app-container">
      <Home />
      <UpButton />
      <LanguageSwitcher />
      <SectionOne />
      <SectionTwo />
      <Contact />
      <CarouselGallery />
      <Footer />
    </div>
  );
};

export default App;
