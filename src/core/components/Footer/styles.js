import styled from "styled-components";

import { breakpoints } from "../../constants";

export const FooterContainer = styled.footer`
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  box-shadow: 0 2px 2px 2px gray;
  position: relative;
  z-index: 10;

  @media (max-width: ${breakpoints.sm}px) {
    height: 100px;
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const FooterLabel = styled.p`
  padding: 1rem 0;
`;

export const FooterSocialContainer = styled.div`
  height: 100%;
  width: max-content;
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  bottom: 0;

  @media (max-width: ${breakpoints.sm}px) {
    height: 50%;
    position: relative;
  }
`;

export const FooterSocialItem = styled.a`
  margin: 0 1rem;

  .social-icon-container {
    height: 20px;
    width: 20px;
    cursor: pointer;

    .social-icon {
      height: 100%;
      width: 100%;
    }
  }
`;
