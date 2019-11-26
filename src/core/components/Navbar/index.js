import React from "react";
import { Link } from "react-router-dom";

import {
  NavbarContainer,
  NavbarTitle,
  LogoContainer,
  LogoImage
} from "./styles";

const Navbar = () => (
  <NavbarContainer>
    <LogoContainer>
      <Link to="/">
        <LogoImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/logo_mision_2700_2da_edicion.png"
          alt="mision 2700 2da edicion"
        />
      </Link>
    </LogoContainer>
    <NavbarTitle>Misión 2700</NavbarTitle>
    <LogoContainer>
      <a
        href="https://www.paypal.me/HANDEYES"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LogoImage
          css={`
            margin-right: 2rem;
          `}
          src="https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032016/untitled-1_290.png"
          alt="paypal"
        />
      </a>
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
