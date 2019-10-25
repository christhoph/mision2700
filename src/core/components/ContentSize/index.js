import React, { forwardRef } from "react";

import { ContentSizeContainer } from "./styles";

const ContentSize = forwardRef(({ children, css }, ref) => (
  <ContentSizeContainer css={css} ref={ref} tabIndex={0}>
    {children}
  </ContentSizeContainer>
));
ContentSize.defaultProps = {
  css: ""
};

export default ContentSize;
