import styled from "styled-components";

import { colors, breakpoints } from "../../core";

const { darkBlue, skyBlue } = colors;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem;

  ${({ css }) => css}

  @media (max-width: ${breakpoints.sm}px) {
    padding: 1rem 2rem;
  }
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
  padding: 1rem 0;

  ${({ css }) => css}
`;

export const InformationContentItem = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 1.5rem 0;

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

export const InformationContentSpan = styled.span`
  margin: 0 1rem;

  ${({ css }) => css}
`;
