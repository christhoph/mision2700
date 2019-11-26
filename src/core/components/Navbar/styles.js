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
  z-index: 10;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 0.5rem;
  }
`;

export const NavbarTitle = styled.h1`
  margin: 0 0.5rem;
  font-size: 1.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  white-space: nowrap;
`;

export const LogoContainer = styled.div`
  height: 100%;
`;

export const LogoImage = styled.img`
  height: 100%;

  ${({ css }) => css}
`;
