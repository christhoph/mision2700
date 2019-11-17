import React from "react";

import {
  PartnersContainer,
  PartnerSite,
  PartnerImage,
  PartnersHashtag
} from "./styles";
import { ContentSize } from "../../core";

const Partners = () => (
  <PartnersContainer>
    <PartnersHashtag>#YAMESUME</PartnersHashtag>
    <ContentSize
      css={`
        justify-content: space-evenly;
      `}
    >
      <PartnerSite href="/">
        <PartnerImage src="http://paul-themes.com/html/bauhaus/demo/light/images/partners/2.png" />
      </PartnerSite>
      <PartnerSite href="/">
        <PartnerImage src="http://paul-themes.com/html/bauhaus/demo/light/images/partners/3.png" />
      </PartnerSite>
      <PartnerSite href="/">
        <PartnerImage src="http://paul-themes.com/html/bauhaus/demo/light/images/partners/4.png" />
      </PartnerSite>
      <PartnerSite href="/">
        <PartnerImage src="http://paul-themes.com/html/bauhaus/demo/light/images/partners/5.png" />
      </PartnerSite>
    </ContentSize>
  </PartnersContainer>
);

export default Partners;
