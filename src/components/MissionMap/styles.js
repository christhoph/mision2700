import styled from "styled-components";
import Modal from '@material-ui/core/Modal';

import { colors } from "../../core";

const { white, darkBlue } = colors;

export const MissionMapContainer = styled.div`
  padding: 1rem;

  ${({ css }) => css}
`;

export const MissionMapChart = styled.div`
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled(Modal)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  height: 90%;
  width: 90%;
  background: ${white};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 1rem;
  outline: none;
  position: relative;

  .close-icon-container {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    .close-icon {
      height: 30px;
      width: 30px;
    }
  }
`;

export const ModalContentUp = styled.div`
  height: max-content;
  width: 100%;
  display: flex;
`;

export const ModalView = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: center;
`;

export const ModalViewImage = styled.img`
  width: 100%;
`;

export const ModalInfo = styled.div`
  height: 100%;
  width: 20%;
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
  padding: 2rem 1.5rem;

  ${({ css }) => css}
`;

export const ModalInfoContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;

  span {
    margin-right: 2rem;
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
  margin: 2rem 1rem;
  cursor: pointer;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin: right: 0;
  }
`;

export const ModalSlideImage = styled.img`
  width: 100%;
`;
