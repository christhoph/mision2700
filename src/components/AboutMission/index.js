import React from "react";

import {
  AboutMissionContainer,
  AboutMissionInfo,
  AboutMissionInfoTitle,
  AboutMissionInfoText,
  AboutMissionVideo,
  AboutMissionVideoImg
} from "./styles";
import { ContentSize, SVGIcons } from "../../core";

const AboutMission = () => (
  <AboutMissionContainer>
    <ContentSize>
      <AboutMissionInfo>
        <AboutMissionInfoTitle>Que es la Mision 2700?</AboutMissionInfoTitle>
        <AboutMissionInfoText>
          Es una iniciativa de HandEyes para la Navidad, recorremos 2700
          kilómetros (Costa, Sierra y Oriente) entregando de manera gratuita más
          de 105 dispositivos a niños y jóvenes con discapacidad visual de
          escasos recursos.
        </AboutMissionInfoText>
        <AboutMissionInfoText>
          Las entregas estarán llenas de magia y de motivos Navideños para que
          esta experiencia sea algo inolvidable. LLevaremos nuestros
          dispositivos y otras sorpresas.
        </AboutMissionInfoText>
      </AboutMissionInfo>
      <AboutMissionVideo>
        <SVGIcons
          wrapperClass="play-icon-container"
          iconClass="play-icon"
          iconName="play_icon"
        />
        <AboutMissionVideoImg
          src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png"
          alt="mision 2700"
        />
      </AboutMissionVideo>
    </ContentSize>
  </AboutMissionContainer>
);

export default AboutMission;
