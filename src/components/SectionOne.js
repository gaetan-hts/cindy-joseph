import React from "react";
import video from "../assets/img/spring1compressed.mp4";
import Button from "./Button";
import { useSelector } from "react-redux";

const SectionOne = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  return (
    <div className="section-one-container">
      <div className="left-content">
        <h2>Performances</h2>
        {selectedLanguage === "fr" ? (
          <p>
            Danseuse pluridisciplinaire, j'ai la capacité de m'adapter aisément
            aux demandes et je ressens une grande satisfaction à évoluer sur
            n'importe quel espace de danse. Mon expérience variée ainsi que ma
            passion pour les arts de la performance me permettent de créer des
            expériences uniques pour chaque occasion. Je suis donc disponible
            pour toutes sortes de prestations artistiques, danse, magie,
            défilés, orchestres, figurations, mariages, et bien plus encore !
          </p>
        ) : (
          <p>
            Multidisciplinary dancer, I can readily adapt to requests and derive
            genuine pleasure from performing on any dance space. My diverse
            experience and passion for the performing arts allow me to create
            unique experiences for each occasion. Therefore, I am available for
            a wide range of artistic performances, including dance, magic,
            parades, choreography, orchestral performances, extras, weddings,
            and much more !
          </p>
        )}
        <Button
          content={selectedLanguage === "fr" ? "Galerie" : "Gallery"}
          scrollId="scroll-gallery"
        />
      </div>
      <video controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
        Votre navigateur ne prend pas en charge la lecture de cette vidéo.
      </video>
    </div>
  );
};

export default SectionOne;
