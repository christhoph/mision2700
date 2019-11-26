import React from "react";

import {
  ModalDonationsContainer,
  ModalDonationsImage,
  ModalDonationsContent,
  ModalDonationsHashtag,
  ModalDonationsText,
  ModalDonationsTextEmphasis
} from "./styles";
import { Modal, ScrollableContainer, breakpoints } from "../../core";

const ModalDonations = ({ open, onClose }) => {
  const w = window.innerWidth;
  let modalImage;

  if (w < breakpoints.sm)
    modalImage =
      "https://s3.us-east-2.amazonaws.com/mision20700.2018/FOTOS+MACHALA/optimizado/machala5.png";
  if (w > breakpoints.md)
    modalImage =
      "https://s3.us-east-2.amazonaws.com/mision20700.2018/FOTOS+ESMERALDAS/optimizadas/esmeraldas1.png";

  return (
    <Modal
      open={open}
      onClose={onClose}
      css={`
        height: max-content;
        width: max-content;
        padding: 0;
      `}
    >
      <ModalDonationsContainer>
        <ScrollableContainer
          css={`
            flex-direction: row;

            @media (max-width: ${breakpoints.sm}px) {
              flex-direction: column;
            }
          `}
        >
          <ModalDonationsImage src={modalImage} alt="hand eyes - mision 2700" />
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
          </ModalDonationsContent>
        </ScrollableContainer>
      </ModalDonationsContainer>
    </Modal>
  );
};

const ModalDonationsInfo = ({ title, text }) => (
  <ModalDonationsText>
    <ModalDonationsTextEmphasis>{title}: </ModalDonationsTextEmphasis>
    {text}
  </ModalDonationsText>
);

export default ModalDonations;
