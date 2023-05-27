import React from "react";
import video from "../assets/img/petal.mp4";
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
            Mon parcours m'a permis d'acquérir une solide formation en danse
            contemporaine et jazz. J'ai aussi eu l'opportunité d'interpréter des
            rôles en tout genre et d'explorer de nombreux styles de danse.
            Travailler aux côtés de danseurs et chorégraphes talentueux m'a
            permis d'affiner mon art. Je suis convaincue que ma passion, ma
            créativité et ma détermination font de moi une danseuse polyvalente
            et une chorégraphe accomplie.
          </p>
        ) : (
          <p>
            My career has allowed me to acquire a solid foundation in
            contemporary and jazz dance. I have also had the opportunity to
            interpret various roles and explore diverse dance styles.
            Collaborating with talented dancers and choreographers has helped me
            to refine my art. I truly believe that my passion, creativity, and
            determination make me a versatile dancer and an accomplished
            choreographer.
          </p>
        )}
        <Button
          content={selectedLanguage === "fr" ? "Galerie" : "Gallery"}
          scrollId="scroll-gallery"
        />
      </div>
      <video preload controls autoPlay muted loop>
        <source src={video} type="video/mp4" />
        {selectedLanguage === "fr"
          ? "Votre navigateur ne prend pas en charge la lecture de cette vidéo."
          : "Your browser does not support playing this video."}
      </video>
    </div>
  );
};

export default SectionOne;
