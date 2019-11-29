import styled from "styled-components";

import { breakpoints } from "../../constants";

export const NavbarContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 2px 2px -2px gray;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.sm}px) {
    height: 110px;
    justify-content: center;
    align-items: flex-start;
    padding: 0.5rem 1rem;
  }
`;

export const NavbarTitle = styled.h1`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  white-space: nowrap;

  @media (max-width: ${breakpoints.sm}px) {
    margin-bottom: 0.5rem;
    position: absolute;
    bottom: 0;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;

  @media (max-width: ${breakpoints.sm}px) {
    height: 60px;
  }

  ${({ css }) => css}
`;

export const LogoImage = styled.img`
  height: 100%;
`;
