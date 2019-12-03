import React from "react";
import PropTypes from "prop-types";

import { EyeClipIconContainer } from "./styles";

const EyeClipIcon = ({ css, iconSize, iconColor }) => (
  <EyeClipIconContainer css={css} iconSize={iconSize} iconColor={iconColor} />
);
EyeClipIcon.propTypes = {
  css: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string
};
EyeClipIcon.defaultProps = {
  css: "",
  iconSize: 32,
  iconColor: "#000"
};

export default EyeClipIcon;
