import React from "react";

import { FooterContainer, FooterLabel } from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLabel>HandEyes &copy; {currentYear}</FooterLabel>
    </FooterContainer>
   );
};

export default Footer;