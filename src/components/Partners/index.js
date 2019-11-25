import React from "react";

import { PartnersContainer, PartnerImage, PartnersHashtag } from "./styles";
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
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/tesalia_cbc.png"
        css={`
          height: 125px;
          width: 300px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/ccq.png"
        css={`
          height: 125px;
          width: 300px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/minerva.png"
        css={`
          height: 125px;
          width: 200px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/maquinas_ec.png"
        css={`
          height: 60px;
          width: 200px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/cyzone_quierete.png"
        css={`
          height: 60px;
          width: 200px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/silverti.png"
        css={`
          height: 60px;
          width: 200px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/oscus.png"
        css={`
          height: 100px;
          width: 100px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/banchis.jpg"
        css={`
          height: 60px;
          width: 200px;
        `}
      />
      <PartnerImage
        src="https://s3.us-east-2.amazonaws.com/mision20700.2018/page/sponsors/hoja_verde.png"
        css={`
          height: 100px;
          width: 100px;
        `}
      />
    </ContentSize>
  </PartnersContainer>
);

export default Partners;
