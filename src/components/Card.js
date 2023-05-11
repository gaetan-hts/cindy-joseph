import React from "react";

const Card = ({ title, text, url, link }) => {
  return (
    <div className="card-container">
      <img src={url} alt={title} />
      <h3>{title}</h3>
      <p>{text}</p>
      <div className="link-container">
        <a href={link} target="_blank" rel="noopener noreferrer">
          more
          <i className="fa-solid fa-chevron-right"></i>
        </a>
      </div>
    </div>
  );
};

export default Card;
