import React from "react";

import {
  InformationContainer,
  InformationTitle,
  InformationContent,
  InformationContentItem,
  DonationsCounter,
  DonateButton
} from "./styles";

const Information = ({ containerCss }) => (
  <InformationContainer css={containerCss}>
    <InformationTitle>Información</InformationTitle>
    <InformationContent>
      <InformationContentItem>
        <span>2700</span> KM Recorridos
      </InformationContentItem>
      <InformationContentItem>
        <span>15</span> Provincias
      </InformationContentItem>
      <InformationContentItem>
        <span>105</span> No Videntes Beneficiados
      </InformationContentItem>
    </InformationContent>
    <InformationTitle>DONACIONES</InformationTitle>
    <InformationContent css="align-items: center;">
      <DonationsCounter>200,000</DonationsCounter>
      <DonateButton>Ayúdanos con tu donación</DonateButton>
    </InformationContent>
  </InformationContainer>
);

export default Information;
