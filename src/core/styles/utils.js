import { keyframes } from "styled-components";

import { colors } from "../styles";

const { red, orange, yellow, olive, green, teal, blue } = colors;

const definePercentValue = (percent, condition, color) => `
  ${percent}% {
    ${condition ?
      `background: ${color};` :
      `
        border-color: ${color};
        color: ${color};
      `}
  }
`;

export const useColorCycle = isHover => keyframes`
  ${definePercentValue(0, isHover, red)}
  ${definePercentValue(20, isHover, orange)}
  ${definePercentValue(30, isHover, yellow)}
  ${definePercentValue(45, isHover, olive)}
  ${definePercentValue(60, isHover, green)}
  ${definePercentValue(80, isHover, teal)}
  ${definePercentValue(100, isHover, blue)}
`;