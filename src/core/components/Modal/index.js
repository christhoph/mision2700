import React from "react";

import { ModalContainer, ModalContent } from "./styles";
import ContentSize from "../ContentSize";
import SVGIcons from "../SVGIcons";

const Modal = ({ open, onClose, css, children }) => (
  <ModalContainer open={open} onClose={onClose}>
    <ContentSize
      css={`
        justify-content: center;
        align-items: center;
      `}
    >
      <ModalContent css={css}>
        <SVGIcons
          wrapperClass="close-icon-container"
          iconClass="close-icon"
          iconName="close_icon"
          iconAction={onClose}
        />
        {children}
      </ModalContent>
    </ContentSize>
  </ModalContainer>
);

export default Modal;
