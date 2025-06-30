import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="quiz-footer">
      <p>© {new Date().getFullYear()} Timer & Clock Master. All rights reserved.</p>
      <p>Made with ❤️ by You</p>
    </footer>
  );
};

export default Footer;
