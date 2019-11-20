import React from "react";
import { Link } from "react-router-dom";

import { NavbarContainer, LogoContainer, LogoImage } from "./styles";

const Navbar = () => (
  <NavbarContainer>
    <LogoContainer>
      <Link to="/">
        <LogoImage
          src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/mision2700segunda.png"
          alt="mision 2700 2da edicion"
        />
      </Link>
      <a href="http://handeyes.org/" target="_blank" rel="noopener noreferrer">
        <LogoImage
          className="hand-eyes-logo"
          src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes.png"
          alt="hand eyes"
        />
      </a>
    </LogoContainer>
  </NavbarContainer>
);

export default Navbar;
