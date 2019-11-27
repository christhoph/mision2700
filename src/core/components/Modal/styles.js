import styled from "styled-components";
import Modal from "@material-ui/core/Modal";

import { colors } from "../../styles";
import { breakpoints } from "../../constants";

const { white } = colors;

export const ModalContainer = styled(Modal)`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  height: 650px;
  width: 100%;
  background: ${white};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 1rem;
  outline: none;
  position: relative;

  .close-icon-container {
    height: 30px;
    width: 30px;
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;

    ${({ closeIconCss }) => closeIconCss}

    .close-icon {
      height: 30px;
      width: 30px;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    height: 100%;
  }

  ${({ css }) => css}
`;
