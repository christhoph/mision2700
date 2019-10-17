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

export const EyeClipIconButtons = styled.div`
  height: ${({ iconSize }) => iconSize / 4}px;
  width: 2px;
  background: ${({ iconColor }) => iconColor};
  position: absolute;
  top: ${({ iconSize }) => iconSize / 6.5}px;
  right: -2px;

  &:nth-child(2) {
    top: ${({ iconSize }) => (iconSize / 6.5) * 3.5}px;
  }
`;
