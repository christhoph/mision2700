import React from "react";

import { ScrollableContainerWrapper } from "./styles";

const ScrollableContainer = ({ refElement, css, children }) => (
  <ScrollableContainerWrapper ref={refElement} css={css}>
    {children}
  </ScrollableContainerWrapper>
);
ScrollableContainer.defaultProps = {
  refElement: null,
  css: ""
};

export default ScrollableContainer;
