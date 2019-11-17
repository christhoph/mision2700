import React from "react";

import {
  InformationContainer,
  InformationTitle,
  InformationContent,
  InformationContentItem
} from "./styles";
import { SVGIcons, EyeClipIcon, Divider, colors } from "../../core";
import ModalDonations from "../ModalDonations";

const { skyBlue } = colors;

const Information = ({
  containerCss,
  visitCities,
  openModal,
  toggleOpenModal,
  renderDonateButton
}) => (
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
        <span>{visitCities}</span> Ciudades
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
      {renderDonateButton}
    </InformationContent>
    <ModalDonations open={openModal} onClose={toggleOpenModal} />
  </InformationContainer>
);
Information.defaultProps = {
  visitCities: 0
};

export default Information;
