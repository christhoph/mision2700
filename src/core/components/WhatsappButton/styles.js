import styled from "styled-components";

import { colors } from "../../styles";

const { whatsappColor, white } = colors;

export const WhatsappButtonContainer = styled.a`
  height: 55px;
  width: 55px;
  background: ${whatsappColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  cursor: pointer;
  z-index: 20;

  svg {
    height: 30px;
    width: 30px;
    fill: ${white};
  }
`;