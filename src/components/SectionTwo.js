import React from "react";
import Card from "./Card";
import imgCard1 from "../assets/img/img-card1.webp";
import imgCard2 from "../assets/img/img-card2.jpg";
import imgCard3 from "../assets/img/img-card3.jpg";
import { useSelector } from "react-redux";

const SectionTwo = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );

  {
    selectedLanguage === "fr" ? <h2>Bienvenue !</h2> : <h2>Welcome !</h2>;
  }
  return (
    <div className="section-two-container">
      <Card
        title="LA ROUE HUMAINE"
        text={
          selectedLanguage === "fr"
            ? "C'est par l'échange, les relations humaines que de nouvelles sensations transpercent le corps et touchent au plus profond de l'âme. La création explore ces liens et les émotions qui les entourent."
            : "It is through exchange and human relationships that new sensations pierce the body and touch the depths of the soul. Creation explores these connections and the emotions that surround them."
        }
        url={imgCard3}
        link="https://www.cie-ep.fr/"
      />
      <Card
        title="AIMONS LA"
        text={
          selectedLanguage === "fr"
            ? "La danse comme vous ne l'avez jamais visitée, un musée auquel vous rêvez d'assiter."
            : "Dance like you've never experienced it before, a museum you dream of attending."
        }
        url={imgCard1}
        link="https://www.instagram.com/artjoyan/"
      />
      <Card
        title="MISTERY SHOW"
        text={
          selectedLanguage === "fr"
            ? "Magie, danse, pyrotechnie et grandes illusions à couper le souffle. Plongez dans un univers magique, dynamique, drôle et tout simplement « hors normes »."
            : 'Magic, dance, pyrotechnics, and breathtaking grand illusions. Dive into a magical, dynamic, funny, and simply "extraordinary" world.'
        }
        url={imgCard2}
        link="https://damienillusionniste.com/"
      />
    </div>
  );
};

export default SectionTwo;
