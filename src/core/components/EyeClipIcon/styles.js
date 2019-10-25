import styled from "styled-components";

export const EyeClipIconContainer = styled.div`
  height: ${({ iconSize }) => iconSize}px;
  min-height: ${({ iconSize }) => iconSize}px;
  width: ${({ iconSize }) => iconSize}px;
  min-width: ${({ iconSize }) => iconSize}px;
  background: ${({ iconColor }) => iconColor};
  border-radius: ${({ iconSize }) => iconSize / 5}px;
  position: relative;

  &::before {
    content: "";
    height: ${({ iconSize }) => iconSize / 3.33}px;
    width: ${({ iconSize }) => iconSize / 3.33}px;
    background: #fff;
    border-radius: 50%;
    position: absolute;
    left: ${({ iconSize }) => iconSize / 5}px;
    bottom: ${({ iconSize }) => iconSize / 5}px;
  }

  ${({ css }) => css}
`;
