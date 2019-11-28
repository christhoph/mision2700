import React from "react";
import { Link } from "react-router-dom";

import { breakpoints } from "../../constants";

import {
  NavbarContainer,
  NavbarTitle,
  LogoContainer,
  LogoImage
} from "./styles";

const Navbar = () => {
  return (
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
      <LogoContainer
        css={`
          display: flex;

          & a {
            width: max-content;
          }

          @media (max-width: ${breakpoints.sm}px) {
            height: 40px;
            margin-top: 10px;
            margin-left: auto;
          }
        `}
      >
        <LogoContainer
          css={`
            margin: 0 2rem;
            cursor: pointer;

            @media (max-width: ${breakpoints.sm}px) {
              height: 40px;
            }
          `}
        >
          <a
            href="https://www.paypal.me/HANDEYES"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LogoImage
              src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/paypal.png"
              alt="paypal"
            />
          </a>
        </LogoContainer>
        <a
          href="http://handeyes.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LogoImage
            className="hand-eyes-logo"
            src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/logo_handeyes.png"
            alt="hand eyes"
          />
        </a>
      </LogoContainer>
    </NavbarContainer>
  );
};

export default Navbar;
