import React from "react";

import { WhatsappButtonContainer } from "./styles";
import { SVGIcons } from "../../index";

const WhatsappButton = () => (
  <WhatsappButtonContainer
    href="https://api.whatsapp.com/send?phone=593980090101"
    target="_blank"
    rel="noopener noreferrer"
  >
    <SVGIcons iconName="whatsapp_icon" />
  </WhatsappButtonContainer>
);

export default WhatsappButton;
