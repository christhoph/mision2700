import React from "react";
import PropTypes from "prop-types";

import {
  ModalDonationsContainer,
  ModalDonationsImage,
  ModalDonationsContent,
  ModalDonationsHashtag,
  ModalDonationsText,
  ModalDonationsTextEmphasis,
  ModalDonationsButton
} from "./styles";
import { Modal, ScrollableContainer, breakpoints } from "../../core";

const ModalDonations = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    css={`
      height: max-content;
      max-height: 550px;
      width: max-content;
      padding: 0;

      @media (max-width: ${breakpoints.sm}px) {
        max-height: max-content;
      }
    `}
  >
    <ScrollableContainer>
      <ModalDonationsContainer>
        <ModalDonationsImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/foto+modal+ya+me+sum%C3%A9/huaira+baja.png"
          alt="hand eyes - mision 2700"
        />
        <ModalDonationsContent>
          <ModalDonationsHashtag
            src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/hashtag_ya_me_sume.png"
            alt="hashtag ya me sumé"
          />
          <ModalDonationsTextEmphasis
            css={`
              margin-bottom: 0.75rem;
            `}
          >
            Banco Pichincha - Cuenta Corriente
          </ModalDonationsTextEmphasis>
          <ModalDonationsInfo title="Cuenta" text="2100194583" />
          <ModalDonationsInfo title="Nombre" text="FABCAD SA" />
          <ModalDonationsInfo title="RUC" text="1792742986001" />
          <ModalDonationsInfo title="Celular" text="0984449647" />
          <ModalDonationsInfo title="Teléfono" text="022554162" />
          <ModalDonationsInfo
            title="Dirección"
            text="Toledo N23-158 y Madrid esquina"
          />
          <ModalDonationsInfo title="E-mail" text="info@handeyes.org" />
          <ModalDonationsTextEmphasis
            css={`
              align-self: center;
              margin-top: 0.5rem;
              font-size: 18px;
              text-transform: uppercase;
            `}
          >
            Muchas gracias!
          </ModalDonationsTextEmphasis>
          <ModalDonationsButton
            href="https://api.whatsapp.com/send?phone=593991621937&text=Hola,%20quiero%20SUMAR%20mi%20granito%20de%20arena%20para%20los%20ni%C3%B1os%20de%20la%20misi%C3%B3n2700"
            target="_blank"
            rel="noopener noreferrer"
          >
            SUMAR por WhatsApp
          </ModalDonationsButton>
        </ModalDonationsContent>
      </ModalDonationsContainer>
    </ScrollableContainer>
  </Modal>
);
ModalDonations.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired
};
ModalDonations.defaultProps = {
  open: false
};

const ModalDonationsInfo = ({ title, text }) => (
  <ModalDonationsText>
    <ModalDonationsTextEmphasis>{title}: </ModalDonationsTextEmphasis>
    {text}
  </ModalDonationsText>
);
ModalDonationsInfo.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

export default ModalDonations;
