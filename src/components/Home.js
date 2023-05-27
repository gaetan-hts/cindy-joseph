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
            Passionnée par l'art de la danse depuis mon plus jeune âge, j'ai
            consacré ma vie à perfectionner ma technique, ma musicalité, mon
            sens artistique et mon expression scénique. Chaque collaboration
            artistique et chaque moment sur scène m'enrichissent et attisent mon
            désir de progresser, toujours plus.
          </p>
        ) : (
          <p>
            Passionate about the art of dance since a young age, I have
            dedicated my life to perfecting my technique, musicality, artistic
            sensibility, and stage expression. Each artistic collaboration and
            moment on stage enriches me and fuels my desire to always progress.
          </p>
        )}
        <Button content="Contact" scrollId="scroll-contact" />
      </div>
    </div>
  );
};

export default Home;
