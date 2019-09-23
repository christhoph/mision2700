import styled from "styled-components";

import { colors } from "../../core";

const { white, whiteDark, skyBlue } = colors;

export const YearsBarContainer = styled.div`
  height: 65px;
  width: 100%;
  background: ${whiteDark};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const YearsButtonContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const YearsBarTitle = styled.p`
  margin: 0 1rem;
  font-size: 1.1rem;
`;

export const YearsButton = styled.button`
  background: transparent;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 0 1rem;
  color: ${skyBlue};
  transition: border-color 0.25s linear;

  &:hover {
    border-color: ${skyBlue};
  }

  &.active {
    background: ${skyBlue};
    color: ${white};
  }
`;
