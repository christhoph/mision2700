import React from "react";

import {
  PartnersContainer,
  PartnerImageContent,
  PartnerImage,
  PartnersHashtag
} from "./styles";
import { ContentSize, breakpoints } from "../../core";

const Partners = () => (
  <PartnersContainer>
    <PartnersHashtag
      src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/hashtag_ya_me_sume.png"
      alt="hashtag ya me sumé"
    />
    <ContentSize
      css={`
        flex-wrap: wrap;
        justify-content: space-evenly;

        @media (max-width: ${breakpoints.sm}px) {
          flex-direction: column;
          align-items: center;
        }
      `}
    >
      <PartnerImageContent>
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/espe.png"
          css={`
            height: 78px;
            width: 301px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/tesalia_cbc.png"
          css={`
            height: 73px;
            width: 301px;
          `}
        />
      </PartnerImageContent>
      <PartnerImageContent>
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/ccq.png"
          css={`
            height: 86px;
            width: 299px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/minerva.png"
          css={`
            height: 248px;
            width: 296px;
          `}
        />
      </PartnerImageContent>
      <PartnerImageContent>
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/maquinas_ec.png"
          css={`
            height: 132px;
            width: 200px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/cyzone.png"
          css={`
            height: 62px;
            width: 197px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/silverti.png"
          css={`
            height: 76px;
            width: 199px;
          `}
        />
      </PartnerImageContent>
      <PartnerImageContent>
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/oscus.png"
          css={`
            height: 196px;
            width: 200px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/banchis.png"
          css={`
            height: 96px;
            width: 200px;
          `}
        />
        <PartnerImage
          src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/hoja_verde.png"
          css={`
            height: 198px;
            width: 201px;
          `}
        />
      </PartnerImageContent>
    </ContentSize>
  </PartnersContainer>
);

export default Partners;
