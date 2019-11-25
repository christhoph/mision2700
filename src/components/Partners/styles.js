import styled from "styled-components";

import { constants, breakpoints } from "../../core";

const { dotBg } = constants;

export const PartnersContainer = styled.div`
  width: 100%;
  background: url(${dotBg}) 0 0 repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;

  @media (max-width: ${breakpoints.sm}px) {
    padding: 1rem;
  }
`;

export const PartnersHashtag = styled.img`
  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
  }
`;

export const PartnerImage = styled.img`
  margin: 2rem 1rem;

  ${({ css }) => css}
`;
