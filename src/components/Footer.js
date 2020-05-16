import React from "react";
import LogoFacebook from "react-ionicons/lib/LogoFacebook";
import LogoInstagram from "react-ionicons/lib/LogoInstagram";

function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Made by Shaan Alam with{" "}
          <span role="img" aria-label="emoji">
            💓
          </span>
        </p>
        <div className="social-icons">
          <h4>Connect with me on </h4>
          <a href="#!">
            <LogoFacebook color="#ddd" fontSize="40px" />
          </a>
          <a href="#!">
            <LogoInstagram color="#ddd" fontSize="40px" />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
