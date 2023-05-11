import React from "react";

const Button = ({ content, scrollId }) => {
  const handleClick = () => {
    const element = document.getElementById(scrollId);
    if (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
      });
    }
  };
  return (
    <div className="btn-container">
      <button onClick={handleClick} className="btn">
        {content}
      </button>
    </div>
  );
};

export default Button;
