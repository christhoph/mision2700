import React, { useState, useEffect } from "react";
import * as moment from "moment";

import {
  InformationContainer,
  InformationTitle,
  InformationContent,
  InformationContentItem,
  InformationContentSpan
} from "./styles";
import { SVGIcons, EyeClipIcon, Divider, colors } from "../../core";
import ModalDonations from "../ModalDonations";

const { skyBlue, donateGreen } = colors;

const Information = ({
  containerCss,
  visitCities,
  openModal,
  toggleOpenModal,
  renderDonateButton
}) => {
  const [missionDays, setMissionDays] = useState(0);
  const totalDays = 17;

  useEffect(() => {
    const now = moment()
      .format("YYYY/MM/DD")
      .split("/");
    const setNow = moment([
      parseInt(now[0], 10),
      parseInt(now[1], 10) - 1,
      parseInt(now[2], 10)
    ]);
    const missionInit = moment([2019, 10, 27]);
    const getDays = setNow.diff(missionInit, "days");
    setMissionDays(getDays < totalDays + 1 ? getDays : totalDays);
  }, []);

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
          <InformationContentSpan>2700</InformationContentSpan> KM Recorridos
        </InformationContentItem>
        <InformationContentItem>
          <SVGIcons
            wrapperClass="info-icon-container"
            iconClass="info-icon"
            iconName="map_icon"
          />
          <InformationContentSpan>{visitCities}</InformationContentSpan>
          Ciudades
        </InformationContentItem>
        <InformationContentItem>
          <EyeClipIcon
            css={`
              margin-right: 1rem;
            `}
            iconSize={28}
            iconColor={skyBlue}
          />
          <InformationContentSpan
            css={`
              color: ${donateGreen};
              font-size: 18px;
            `}
          >
            0 / 300
          </InformationContentSpan>
          Beneficiados
        </InformationContentItem>
        <InformationContentItem>
          <SVGIcons
            wrapperClass="info-icon-container"
            iconClass="info-icon"
            iconName="calendar_icon"
          />
          <InformationContentSpan
            css={`
              color: ${donateGreen};
              font-size: 18px;
            `}
          >
            {missionDays} / {totalDays}
          </InformationContentSpan>
          Días
        </InformationContentItem>
      </InformationContent>
      <Divider />
      <InformationContent css="align-items: center;">
        {renderDonateButton}
      </InformationContent>
      <ModalDonations open={openModal} onClose={toggleOpenModal} />
    </InformationContainer>
  );
};
Information.defaultProps = {
  visitCities: 0
};

export default Information;
