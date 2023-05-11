import React from "react";
import Card from "./Card";
import imgCard1 from "../assets/img/img-card1.webp";
import imgCard2 from "../assets/img/img-card2.jpg";
import imgCard3 from "../assets/img/img-card3.jpg";

const SectionTwo = () => {
  return (
    <div className="section-two-container">
      <Card
        title="AIMONS LA"
        text="La danse comme vous ne l'avez jamais visitée, un musée auquel vous rêvez d'assiter."
        url={imgCard1}
        link="https://www.instagram.com/artjoyan/"
      />
      <Card
        title="SSPECTALE DE MAGIE"
        text="Magie, danse, pyrotechnie et grandes illusions à couper le souffle. Plongez dans un univers magique, dynamique, drôle et tout simplement « hors normes ».
        "
        url={imgCard2}
        link="https://damienillusionniste.com/"
      />
      <Card
        title="LA ROUE HUMAINE"
        text="C'est à travers l'art que nous pourrons éveiller les êtres par un contact d'âme à âme et peut-être un jour, construire un monde plus épanouissant pour tous."
        url={imgCard3}
        link="https://www.cie-ep.fr/"
      />
    </div>
  );
};

export default SectionTwo;
