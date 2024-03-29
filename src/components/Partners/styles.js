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
  margin-bottom: 1rem;

  @media (max-width: ${breakpoints.sm}px) {
    width: 100%;
    margin-top: 1rem;
  }
`;

export const PartnerImageContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${breakpoints.sm}px) {
    flex-direction: column;
  }
`;

export const PartnerImage = styled.img`
  margin: 2rem 1rem;

  @media (max-width: ${breakpoints.sm}px) {
    margin: 3rem 1rem;
  }

  ${({ css }) => css}
`;
