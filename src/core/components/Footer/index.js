import React from "react";

import {
  FooterContainer,
  FooterLabel,
  FooterSocialContainer,
  FooterSocialItem
} from "./styles";
import SVGIcons from "../SVGIcons";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterLabel>HandEyes &copy; {currentYear}</FooterLabel>
      <FooterSocialContainer>
        <SocialItem
          link="https://www.facebook.com/HandEyes1/"
          icon="facebook_icon"
        />
        <SocialItem
          link="https://www.instagram.com/handeyes1/"
          icon="instagram_icon"
        />
        <SocialItem
          link="https://www.youtube.com/channel/UCxA-dRlA4os6nvDAmxiH6YA"
          icon="youtube_icon"
        />
      </FooterSocialContainer>
    </FooterContainer>
  );
};

const SocialItem = ({ link, icon }) => (
  <FooterSocialItem href={link} target="_blank" rel="noopener noreferrer">
    <SVGIcons
      wrapperClass="social-icon-container"
      iconClass="social-icon"
      iconName={icon}
    />
  </FooterSocialItem>
);

export default Footer;
