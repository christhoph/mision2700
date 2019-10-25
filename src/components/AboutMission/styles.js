import styled from "styled-components";

import { colors } from "../../core";

const { white } = colors;

export const AboutMissionContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const AboutMissionInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 1rem 2rem;
`;

export const AboutMissionInfoTitle = styled.h3`
  margin: 1rem 0;
  text-align: center;
`;

export const AboutMissionInfoText = styled.p`
  margin: 1rem 0;
  letter-spacing: 0.01rem;
  line-height: 1.5rem;
  text-align: justify;
`;

export const AboutMissionVideo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  .play-icon-container {
    height: 50px;
    width: 50px;
    margin-right: 1rem;
    position: absolute;
    cursor: pointer;

    .play-icon {
      height: 50px;
      width: 50px;
      fill: ${white};
    }
  }
`;

export const AboutMissionVideoImg = styled.img`
  height: inherit;
  width: 100%;
  cursor: pointer;
`;
