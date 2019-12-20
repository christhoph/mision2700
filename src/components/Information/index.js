import React, { useState, useEffect } from "react";
import { useCountUp } from "react-countup";
import moment from "moment";
import PropTypes from "prop-types";

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

const InfoCountUp = ({ end, total }) => {
  const { countUp } = useCountUp({ end });

  return (
    <InformationContentSpan
      css={`
        color: ${donateGreen};
        font-size: 22px;
      `}
    >
      {`${countUp} / ${total}`}
    </InformationContentSpan>
  );
};
InfoCountUp.propTypes = {
  end: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

const Information = ({
  containerCss,
  visitCities,
  openModal,
  toggleOpenModal,
  renderDonateButton
}) => {
  const [missionDays, setMissionDays] = useState(0);
  const totalDays = 23;

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

  if (missionDays === 0) return null;

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
          <InfoCountUp end={300} total={300} />
          Beneficiados
        </InformationContentItem>
        <InformationContentItem>
          <SVGIcons
            wrapperClass="info-icon-container"
            iconClass="info-icon"
            iconName="calendar_icon"
          />
          <InfoCountUp end={missionDays} total={totalDays} />
          Días
        </InformationContentItem>
      </InformationContent>
      <Divider
        css={`
          margin: 1rem 0;
        `}
      />
      <InformationContent css="align-items: center;">
        {renderDonateButton}
      </InformationContent>
      <ModalDonations open={openModal} onClose={toggleOpenModal} />
    </InformationContainer>
  );
};
Information.propTypes = {
  containerCss: PropTypes.string,
  visitCities: PropTypes.number,
  openModal: PropTypes.bool,
  toggleOpenModal: PropTypes.func.isRequired,
  renderDonateButton: PropTypes.oneOfType([PropTypes.node, PropTypes.object])
    .isRequired
};
Information.defaultProps = {
  containerCss: "",
  visitCities: 0,
  openModal: false
};

export default Information;
