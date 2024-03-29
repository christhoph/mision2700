import styled from "styled-components";

import { colors, breakpoints } from "../../core";

const { donateGreen, white } = colors;

export const ModalDonationsContainer = styled.div`
  height: 550px;
  width: 850px;
  display: flex;

  @media (max-width: ${breakpoints.sm}px) {
    height: 600px;
    width: 100%;
    max-width: 360px;
    flex-direction: column;
  }
`;

export const ModalDonationsImage = styled.img`
  height: initial;
  width: 400px;

  @media (max-width: ${breakpoints.sm}px) {
    width: 200px;
    align-self: center;
  }
`;

export const ModalDonationsContent = styled.div`
  height: 100%;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1rem 2rem;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const ModalDonationsHashtag = styled.img`
  width: 300px;
  align-self: center;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const ModalDonationsText = styled.div`
  margin: 0.75rem 0;
`;

export const ModalDonationsTextEmphasis = styled.p`
  min-width: 85px;
  display: inline-block;
  color: ${donateGreen};
  font-weight: bold;

  ${({ css }) => css}
`;

export const ModalDonationsButton = styled.a`
  background: ${donateGreen};
  display: flex;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 1rem 0;
  color: ${white};
  font-weight: bold;
`;
