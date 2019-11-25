import styled from "styled-components";

import { colors } from "../../core";

const { whiteDark, white, donateGreen } = colors;

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

export const HomeTitleContainer = styled.div`
  height: 65px;
  width: 100%;
  background: ${whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HomeTitle = styled.h1`
  margin: 0 1rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
