import React from "react";

import { PartnersContainer, PartnerSite, PartnerImage } from "./styles";

const Partners = () => (
  <PartnersContainer>
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
  </PartnersContainer>
);

export default Partners;
