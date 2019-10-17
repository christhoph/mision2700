import React from "react";

import { EyeClipIconContainer, EyeClipIconButtons } from "./styles";

const EyeClipIcon = ({ css, iconSize, iconColor }) => (
  <EyeClipIconContainer css={css} iconSize={iconSize} iconColor={iconColor}>
    <EyeClipIconButtons iconSize={iconSize} iconColor={iconColor} />
    <EyeClipIconButtons iconSize={iconSize} iconColor={iconColor} />
  </EyeClipIconContainer>
);
EyeClipIcon.defaultProps = {
  css: "",
  iconSize: 32,
  iconColor: "#000"
};

export default EyeClipIcon;
