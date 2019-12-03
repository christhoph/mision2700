import React from "react";
import PropTypes from "prop-types";

import { ModalContainer, ModalContent } from "./styles";
import ContentSize from "../ContentSize";
import SVGIcons from "../SVGIcons";

const Modal = ({ open, onClose, css, closeIconCss, children }) => (
  <ModalContainer open={open} onClose={onClose}>
    <ContentSize
      css={`
        justify-content: center;
        align-items: center;
      `}
    >
      <ModalContent css={css} closeIconCss={closeIconCss}>
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
Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  css: PropTypes.string,
  closeIconCss: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired
};
Modal.defaultProps = {
  css: "",
  closeIconCss: ""
};

export default Modal;
