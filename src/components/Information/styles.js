import styled from "styled-components";

import { colors } from "../../core";

const { darkBlue, skyBlue, white, donateGreen } = colors;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

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
  padding: 1rem;

  ${({ css }) => css}
`;

export const InformationContentItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 1rem;

  span {
    margin: 0 1rem;
  }

  .info-icon-container {
    height: 30px;
    width: 30px;
    margin-right: 1rem;

    .info-icon {
      height: 30px;
      width: 30px;
      fill: ${skyBlue};
    }
  }
`;

export const DonateButton = styled.button`
  background: ${donateGreen};
  border: 2px solid ${donateGreen};
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  margin: 1rem 0;
  color: ${white};
  font-size: 1.1rem;
  letter-spacing: 0.05rem;
`;
