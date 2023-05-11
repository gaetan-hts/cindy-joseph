import React, { useRef } from "react";
import { useSelector } from "react-redux";
import emailjs from "@emailjs/browser";
// import { init } from "@emailjs/browser";
// init(process.env.ID);

const ContactForm = () => {
  const selectedLanguage = useSelector(
    (state) => state.language.selectedLanguage
  );
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const formMess = document.querySelector(".formMessage");

    emailjs
      .sendForm(
        "service_y4q20km",
        "template_5ni7fmu",
        form.current,
        process.env.REACT_APP_ID
      )
      .then(
        (res) => {
          console.log(res.text);
          form.current.reset();
          formMess.innerHTML = "<p className='success'>Message envoyé !</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        },
        (err) => {
          console.log(err.text);
          formMess.innerHTML =
            "<p className='error'>Une erreur s'est produite, veuillez réessayer</p>";

          setTimeout(() => {
            formMess.innerHTML = "";
          }, 2000);
        }
      );
  };

  return (
    <div className="contact-container" id="scroll-contact">
      <div className="info-contact-container">
        <h3>Cindy Joseph</h3>
        <ul>
          <li>Toulon</li>
          <li>Paris</li>
          <li>Nice</li>
        </ul>
        <p>cindy.joseph@outlook.fr</p>
        <ul>
          <li>
            <a
              href="https://www.instagram.com/cindyjoseph/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="form-container">
        {selectedLanguage === "fr" ? (
          <h2>Contactez moi</h2>
        ) : (
          <h2>Contact me</h2>
        )}
        <form ref={form} onSubmit={sendEmail} className="form-content">
          <input
            placeholder="Nom"
            type="text"
            name="name"
            required
            autoComplete="off"
            id="name"
          />
          <input
            placeholder="Email"
            type="email"
            name="email"
            required
            autoComplete="off"
            id="email"
          />
          <textarea placeholder="Message" name="message" id="mess" />
        </form>
        <div className="formMessage"></div>
        <input type="submit" value="Envoyer" className="submit-btn" />
      </div>
    </div>
  );
};

export default ContactForm;
