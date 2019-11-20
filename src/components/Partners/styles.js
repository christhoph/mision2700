import styled from "styled-components";

import { constants } from "../../core";

const { dotBg } = constants;

export const PartnersContainer = styled.div`
  width: 100%;
  background: url(${dotBg}) 0 0 repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
`;

export const PartnersHashtag = styled.h2`
  margin-bottom: 3rem;

  font-size: 3rem;
  font-style: italic;
  font-weigt: bolder;
`;

export const PartnerSite = styled.a`
  padding: 0.5rem;
`;

export const PartnerImage = styled.img`
  margin: 0 1rem;
`;
