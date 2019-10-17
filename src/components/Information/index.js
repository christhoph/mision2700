import React, { useState, useCallback } from "react";

import {
  InformationContainer,
  InformationTitle,
  InformationContent,
  InformationContentItem,
  DonationsCounter,
  DonateButton
} from "./styles";
import { SVGIcons, EyeClipIcon, colors } from "../../core";
import ModalDonations from "../ModalDonations";

const { skyBlue } = colors;

const Information = ({ containerCss }) => {
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);

  return (
    <InformationContainer css={containerCss}>
      <InformationTitle>Información</InformationTitle>
      <InformationContent>
        <InformationContentItem>
          <SVGIcons
            wrapperClass="info-icon-container"
            iconClass="info-icon"
            iconName="road_icon"
          />
          <span>2700</span> KM Recorridos
        </InformationContentItem>
        <InformationContentItem>
          <SVGIcons
            wrapperClass="info-icon-container"
            iconClass="info-icon"
            iconName="map_icon"
          />
          <span>15</span> Ciudades
        </InformationContentItem>
        <InformationContentItem>
          <EyeClipIcon
            css={`
              margin-right: 1rem;
            `}
            iconSize={28}
            iconColor={skyBlue}
          />
          <span>105</span> Beneficiarios
        </InformationContentItem>
      </InformationContent>
      <InformationTitle>DONACIONES</InformationTitle>
      <InformationContent css="align-items: center;">
        <DonationsCounter>200,000</DonationsCounter>
        <DonateButton onClick={toggleOpenModal}>
          Ayúdanos con tu donación
        </DonateButton>
      </InformationContent>
      <ModalDonations open={openModal} onClose={toggleOpenModal} />
    </InformationContainer>
  );
};

export default Information;
