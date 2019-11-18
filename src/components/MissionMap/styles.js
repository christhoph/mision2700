import styled from "styled-components";

import { colors } from "../../core";

const { darkBlue, skyBlue } = colors;

export const MissionMapContainer = styled.div`
  .city-arrow-icon-container {
    height: 200px;
    width: 200px;
    position: absolute;
    z-index: 1000;
    top: 120px;
    left: 100px;

    &::after {
      content: "Iniciamos aqui";
      font-size: 1.5rem;
    }

    .city-arrow-icon {
      height: 100%;
      width: 100%;
      z-index: 1000;
      fill: ${skyBlue};
    }
  }

  ${({ css }) => css}
`;

export const MissionMapChart = styled.div`
  height: 100%;
  width: 100%;
`;

export const ModalContentUp = styled.div`
  height: 75%;
  width: 100%;
  display: flex;
`;

export const ModalView = styled.div`
  height: 100%;
  width: 75%;
  display: flex;
  justify-content: center;
`;

export const ModalViewImage = styled.img`
  height: inherit;
  width: 100%;
`;

export const ModalInfo = styled.div`
  height: 100%;
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1.5rem;
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
`;

export const ModalContentDown = styled.div`
  height: 25%;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const ModalSlide = styled.div`
  width: 300px;
  display: flex;
  margin: 1.5rem 1rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin: right: 0;
  }
`;

export const ModalSlideImage = styled.img`
  height: inherit;
  width: 100%;
`;
