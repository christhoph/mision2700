import { keyframes } from "styled-components";

import { colors } from "../styles";

const { red, orange, yellow, olive, green, teal, blue, indigo } = colors;

const definePercentValue = (percent, condition, color) => `
  ${percent}% {
    ${
      condition
        ? `background: ${color};`
        : `
        border-color: ${color};
        color: ${color};
      `
    }
  }
`;

export const useColorCycle = isHover => keyframes`
  ${definePercentValue(0, isHover, red)}
  ${definePercentValue(15, isHover, orange)}
  ${definePercentValue(30, isHover, yellow)}
  ${definePercentValue(45, isHover, olive)}
  ${definePercentValue(60, isHover, green)}
  ${definePercentValue(75, isHover, teal)}
  ${definePercentValue(90, isHover, blue)}
  ${definePercentValue(100, isHover, indigo)}
`;

export const convertHexToRgba = (hex, alpha = 1) => {
  const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
