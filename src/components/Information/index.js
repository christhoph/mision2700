import React, { useState, useCallback } from "react";

import {
  InformationContainer,
  InformationTitle,
  InformationContent,
  InformationContentItem,
  DonateButton
} from "./styles";
import { SVGIcons, EyeClipIcon, Divider, colors } from "../../core";
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
          <span>105</span> Beneficiados
        </InformationContentItem>
      </InformationContent>
      <Divider />
      <InformationContent css="align-items: center;">
        <DonateButton onClick={toggleOpenModal}>DONA</DonateButton>
      </InformationContent>
      <ModalDonations open={openModal} onClose={toggleOpenModal} />
    </InformationContainer>
  );
};

export default Information;
