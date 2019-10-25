import styled from "styled-components";

import { colors } from "../../styles";

const { darkBlue } = colors;

export const DividerContainer = styled.div`
  width: 100%;
  border-bottom: 2px solid ${darkBlue};
  margin: 2rem 0;

  ${({ css }) => css}
`;
