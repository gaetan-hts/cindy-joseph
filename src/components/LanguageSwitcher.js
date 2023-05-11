import React, { useState } from "react";
import frFlag from "../assets/img/fr.png";
import ukFlag from "../assets/img/uk.png";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../feature/language.slice";

const LanguageSwitcher = () => {
  const [showMenu, setShowMenu] = useState(false);
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const dispatch = useDispatch();

  const handleLanguageChange = (language) => {
    dispatch(setLanguage(language));
  };

  return (
    <div className="language-switcher">
      <div
        className="language-switcher__toggle"
        onClick={() => setShowMenu(!showMenu)}
      >
        <img
          className="language-switcher__flag"
          src={selectedLanguage === "fr" ? frFlag : ukFlag}
          alt="Language switcher flag"
        />
        {showMenu && (
          <ul className="language-switcher__menu">
            <li onClick={() => handleLanguageChange("uk")}>
              <img
                className="language-switcher__menu-flag"
                src={ukFlag}
                alt="English"
              />
            </li>
            <li onClick={() => handleLanguageChange("fr")}>
              <img
                className="language-switcher__menu-flag"
                src={frFlag}
                alt="Français"
              />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default LanguageSwitcher;
