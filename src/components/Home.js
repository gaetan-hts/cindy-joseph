import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const Home = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  return (
    <div className="home-container">
      <div className="bg-img"></div>
      <div className="header-container">
        <h1>Cindy Joseph</h1>

        {selectedLanguage === "fr" ? <h2>Bienvenue !</h2> : <h2>Welcome !</h2>}
        {selectedLanguage === "fr" ? (
          <p>
            Danseuse interprète et chorégraphe, j'ai la chance de travailler
            avec des compagnies de danse professionnelles internationales.
            Alternant spectacles et cours de danse, j'ai acquis une expérience
            variée en danse contemporaine, jazz, hybride ou encore hip-hop.
          </p>
        ) : (
          <p>
            As a performing dancer and choreographer, I have the opportunity to
            work with international professional dance companies. Alternating
            between shows and dance classes, I have acquired varied experience
            in contemporary dance, jazz, hybrid, and hip-hop.
          </p>
        )}
        <Button content="Contact" scrollId="scroll-contact" />
      </div>
    </div>
  );
};

export default Home;
