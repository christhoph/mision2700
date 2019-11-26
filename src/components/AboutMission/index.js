import React from "react";

import {
  AboutMissionContainer,
  AboutMissionInfo,
  AboutMissionInfoTitle,
  AboutMissionInfoText,
  AboutMissionVideo
} from "./styles";
import { ContentSize, VideoYoutube, breakpoints } from "../../core";

const AboutMission = () => {
  const w = window.innerWidth;
  let opts;

  if (w < breakpoints.sm) opts = { height: "180", width: "325" };
  if (w > breakpoints.md) opts = { height: "240", width: "430" };

  return (
    <AboutMissionContainer>
      <ContentSize
        css={`
          @media (max-width: ${breakpoints.sm}px) {
            flex-direction: column;
          }
        `}
      >
        <AboutMissionInfo>
          <AboutMissionInfoTitle>¿Qué es la Misión 2700?</AboutMissionInfoTitle>
          <AboutMissionInfoText>
            Es un recorrido en el cual ayudamos a más de 300 niños con
            discapacidad visual de escasos recursos económicos.
          </AboutMissionInfoText>
          <AboutMissionInfoText>
            Recorremos 15 ciudades durante 17 días por todo el Ecuador.
          </AboutMissionInfoText>
          <AboutMissionInfoText>
            Entregamos de manera gratuita nuestro dispositivo Eyeclip para
            mejorar autonomía, movilidad y calidad de vida de nuestros niños.
          </AboutMissionInfoText>
          <AboutMissionInfoText
            css={`
              text-align: center;
            `}
          >
            SÚMATE tú también!
          </AboutMissionInfoText>
        </AboutMissionInfo>
        <AboutMissionVideo>
          <VideoYoutube video="1Pmcofa1rEw" opts={opts} />
        </AboutMissionVideo>
      </ContentSize>
    </AboutMissionContainer>
  );
};

export default AboutMission;
