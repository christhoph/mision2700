import styled from "styled-components";

import { colors, useColorCycle } from "../../core";

const { darkBlue, skyBlue, white } = colors;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 6rem 3rem;

  ${({ css }) => css}
`;

export const InformationTitle = styled.div`
  width: 100%;
  border-bottom: 1.5px solid ${darkBlue};
  padding: 0 0.5rem;
  font-size: 1.2rem;
  letter-spacing: 0.05rem;
  line-height: 2.5rem;
`;

export const InformationContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;

  ${({ css }) => css}
`;

export const InformationContentItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1rem;
`;

export const DonationsCounter = styled.div`
  padding: 1.5rem 1rem;
  color: ${skyBlue};
  font-size: 2rem;
  font-weight: bolder;
`;

export const DonateButton = styled.button`
  background: transparent;
  border: 2px solid transparent;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  margin: 1rem 0;
  color: ${white};
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
  animation: ${useColorCycle(true)} 5s ease-in-out alternate infinite;

  &:hover {
    animation: ${useColorCycle()} 5s ease-in-out alternate infinite;
  }
`;
