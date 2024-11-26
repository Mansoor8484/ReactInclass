// look into virtual DOM
//  first part will be imports
// component decleration - a component is basically a js function declaration

import React from "react";
// file imports that you need - css, media
import "./Header.css";
import logoImage from "../../assets/pepe.jpg";

function Header() {
  return (
    <>
      <img src={logoImage} alt="logo" />
      <h2 classname="header-title"> Welcome to the meme generator website</h2>
      <h4 classname="header-text">a dynamix web app using react</h4>
    </>
  );
}

// default is used because we have a signular function
export default Header;

