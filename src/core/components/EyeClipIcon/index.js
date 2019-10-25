import React from "react";

import { EyeClipIconContainer } from "./styles";

const EyeClipIcon = ({ css, iconSize, iconColor }) => (
  <EyeClipIconContainer css={css} iconSize={iconSize} iconColor={iconColor} />
);
EyeClipIcon.defaultProps = {
  css: "",
  iconSize: 32,
  iconColor: "#000"
};

export default EyeClipIcon;
