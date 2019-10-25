import React from "react";
import PropTypes from "prop-types";

import { DividerContainer } from "./styles";

const Divider = ({ css }) => <DividerContainer css={css} />;
Divider.propTypes = { css: PropTypes.string };
Divider.defaultProps = { css: "" };

export default Divider;
