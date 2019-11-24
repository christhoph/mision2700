import React from "react";

import {
  ModalDonationsContainer,
  ModalDonationsImage,
  ModalDonationsContent,
  ModalDonationsTitle,
  ModalDonationsText,
  ModalDonationsTextEmphasis
} from "./styles";
import { Modal } from "../../core";

/**
  BANCO PICHINCHA CORRIENTE
  2100194583
  FABCAD SA
  RUC 1792742986001
  CEL: 098 444 9647
  TEL: 022554162
  DIR: TOLEDO N23 158 Y MADRID ESQUINA
  MAIL contabilidad@sais3d.com
 */

const ModalDonations = ({ open, onClose }) => (
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
      <ModalDonationsImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/FOTOS+ESMERALDAS/optimizadas/esmeraldas1.png"
        alt=""
      />
      <ModalDonationsContent>
        <ModalDonationsTitle>Ayúdalos con tu donación</ModalDonationsTitle>
        <ModalDonationsTextEmphasis
          css={`
            margin: 0.75rem 0;
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
        <ModalDonationsInfo title="E-mail" text="contabilidad@sais3d.com" />
      </ModalDonationsContent>
    </ModalDonationsContainer>
  </Modal>
);

const ModalDonationsInfo = ({ title, text }) => (
  <ModalDonationsText>
    <ModalDonationsTextEmphasis>{title}: </ModalDonationsTextEmphasis>
    {text}
  </ModalDonationsText>
);

export default ModalDonations;
