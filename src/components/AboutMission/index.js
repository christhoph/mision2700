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
            Es un recorrido en el cuál visitamos 15 ciudades del Ecuador durante
            23 días para entregar de manera gratuita nuestra tecnología EyeClip
            que mejora la autonomía, la movilidad y la calidad de vida de niños
            y jóvenes con discapacidad visual de escasos recursos económicos.
          </AboutMissionInfoText>
          <AboutMissionInfoText
            css={`
              text-align: center;
            `}
          >
            ÚNETE tú también!
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
