import React, { forwardRef } from "react";
import PropTypes from "prop-types";

import { ContentSizeContainer } from "./styles";

const ContentSize = forwardRef(({ children, css }, ref) => (
  <ContentSizeContainer css={css} ref={ref} tabIndex={0}>
    {children}
  </ContentSizeContainer>
));
ContentSize.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.object]).isRequired,
  css: PropTypes.string
};
ContentSize.defaultProps = {
  css: ""
};

export default ContentSize;
