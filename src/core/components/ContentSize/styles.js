import styled from "styled-components";

import { contentSizeBreakpoints, breakpoints } from "../../constants";

export const ContentSizeContainer = styled.div`
  min-width: ${contentSizeBreakpoints.lg}px;
  max-width: ${contentSizeBreakpoints.lg}px;
  display: flex;
  outline: none;

  @media (max-width: ${breakpoints.md}px) {
    min-width: ${contentSizeBreakpoints.sm}px;
    max-width: ${contentSizeBreakpoints.md}px;
  }

  @media (max-width: ${breakpoints.sm}px) {
    min-width: 300px;
    max-width: ${contentSizeBreakpoints.sm}px;
  }

  ${({ css }) => css}
`;
