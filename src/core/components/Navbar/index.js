import React from "react";
import { Link } from "react-router-dom";

import { NavbarContainer, LogoContainer, LogoImage } from "./styles";

const Navbar = () => (
  <NavbarContainer>
    <LogoContainer>
      <Link to="/">
        <LogoImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/logo_mision_2700_2da_edicion.png"
          alt="mision 2700 2da edicion"
        />
      </Link>
      <a href="http://handeyes.org/" target="_blank" rel="noopener noreferrer">
        <LogoImage
          className="hand-eyes-logo"
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/logo_handeyes.png"
          alt="hand eyes"
        />
      </a>
    </LogoContainer>
  </NavbarContainer>
);

export default Navbar;
