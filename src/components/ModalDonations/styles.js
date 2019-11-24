import styled from "styled-components";

import { colors } from "../../core";

const { darkBlue } = colors;

export const ModalDonationsContainer = styled.div`
  height: 450px;
  width: 700px;
  display: flex;
`;

export const ModalDonationsImage = styled.img`
  height: 100%;
  width: 300px;
`;

export const ModalDonationsContent = styled.div`
  height: 100%;
  width: 400px;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
`;

export const ModalDonationsTitle = styled.h3`
  margin: 0.5rem 0;
  color: ${darkBlue};
  text-align: center;
`;

export const ModalDonationsText = styled.p`
  margin: 0.75rem 0;
`;

export const ModalDonationsTextEmphasis = styled.span`
  color: ${darkBlue};
  font-weight: bold;

  ${({ css }) => css}
`;
