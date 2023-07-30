import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="left-footer">
        <ul>
          <li>
            <p>Instagram : </p>
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
      <div className="right-footer">
        <p>© 2023 Cindy Joseph</p>
      </div>
    </div>
  );
};

export default Footer;
