import styled from "styled-components";

import { colors } from "../../core";

const { white, donateGreen } = colors;

export const HomeContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

export const HomeContent = styled.div`
  width: 100%;
  display: flex;
`;

export const DonateButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

export const DonateButton = styled.button`
  background: ${donateGreen};
  border: 2px solid ${donateGreen};
  border-radius: 5px;
  padding: 0.75rem 5rem;
  color: ${white};
  font-size: 1.6rem;
  letter-spacing: 0.05rem;
`;
