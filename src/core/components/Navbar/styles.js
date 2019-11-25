import styled from "styled-components";

import { breakpoints } from "../../constants";

export const NavbarContainer = styled.div`
  height: 65px;
  width: 100%;
  display: flex;
  padding: 0 2rem;
  box-shadow: 0 2px 2px -2px gray;
  z-index: 10;

  @media (max-width: ${breakpoints.sm}px) {
    justify-content: center;
  }
`;

export const LogoContainer = styled.div`
  height: 100%;
  padding: 0.5rem 0;
`;

export const LogoImage = styled.img`
  height: 100%;

  &.hand-eyes-logo {
    margin-left: 2rem;
  }
`;

export const MenuContainer = styled.nav`
  height: 100%;
  width: max-content;
  display: flex;
`;

export const MenuItem = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1rem;
  margin: 0 1rem;
`;
