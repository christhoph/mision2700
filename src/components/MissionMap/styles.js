import styled from "styled-components";

import { colors, breakpoints } from "../../core";

const { darkBlue, skyBlue, white } = colors;

export const MissionMapContainer = styled.div`
  position: relative;

  .city-arrow-icon-container {
    height: 200px;
    width: 200px;
    position: absolute;
    top: 5px;
    left: -90px;

    &::after {
      content: "Iniciamos aquí";
      font-size: 1.5rem;
    }

    .city-arrow-icon {
      height: 100%;
      width: 100%;
      z-index: 1000;
      fill: ${skyBlue};
    }
  }

  @media (max-width: 1150px) {
    .city-arrow-icon-container {
      display: none;
    }
  }

  ${({ css }) => css}
`;

export const MissionMapChart = styled.div`
  height: 100%;
  width: 100%;
`;

export const ModalContentContainer = styled.div`
  height: 650px;
  width: 100%;
`;

export const ModalContentUp = styled.div`
  height: 75%;
  min-height: 480px;
  width: 100%;
  display: flex;
  padding-top: 1rem;

  @media (max-width: ${breakpoints.sm}px) {
    height: max-content;
    flex-direction: column;
  }
`;

export const ModalView = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;

  @media (max-width: ${breakpoints.sm}px) {
    height: max-content;
    width: 100%;
    align-items: center;
  }
`;

export const ModalViewImage = styled.img`
  ${({ isVertical }) =>
    isVertical
      ? `
        height: 100%;

        @media (max-width: ${breakpoints.sm}px) {
          max-height: 500px;
        }
      `
      : `
        width: 100%;
      `}
`;

export const ModalInfo = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;

  @media (max-width: ${breakpoints.sm}px) {
    height: 300px;
    width: 100%;
  }
`;

export const ModalInfoTitle = styled.div`
  width: 100%;
  border-bottom: 1.5px solid ${darkBlue};
  padding: 0 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  line-height: 2.5rem;
`;

export const ModalInfoContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem 0;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 1rem 0;
  }

  ${({ css }) => css}
`;

export const ModalInfoContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;

  span {
    margin-right: 1rem;
  }

  .modal-info-icon-container {
    height: 30px;
    width: 30px;
    margin-right: 1rem;

    .modal-info-icon {
      height: 30px;
      width: 30px;
      fill: ${skyBlue};
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    padding: 1rem 0;

    p {
      width: 160px;
    }
  }
`;

export const ModalContentDown = styled.div`
  height: 25%;
  min-height: 160px;
  width: 100%;
  padding: 0 1rem;

  @media (max-width: ${breakpoints.sm}px) {
    min-height: 160px;
  }
`;

export const ModalSlide = styled.div`
  min-width: ${({ isVertical }) => (isVertical ? "75px" : "155px")};
  width: min-content;
  max-width: 180px;
  display: flex;
  justify-content: center;
  margin: 1.5rem 1rem;
  position: relative;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  .play-icon-container {
    height: 30px;
    width: 30px;
    margin-right: 1rem;
    position: absolute;
    align-self: center;

    .play-icon {
      height: 30px;
      width: 30px;
      fill: ${white};
    }
  }
`;

export const ModalSlideImage = styled.img`
  max-height: 110px;
  ${({ isVertical }) =>
    isVertical
      ? `
        height: 100%;
      `
      : `
        width: 100%;
      `}
`;
