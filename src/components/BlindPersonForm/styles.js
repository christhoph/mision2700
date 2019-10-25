import styled from "styled-components";

export const BlindPersonFormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
`;

export const BlindPersonFormDescription = styled.p`
  padding: 1rem 0;
  font-size: 1.5rem;
  font-weight: 300;

  ${({ css }) => css}
`;

export const BlindPersonFormulary = styled.form`
  width: 100%;
  max-width: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 3rem;
`;

export const BlindPersonFormGroup = styled.div`
  width: 100%;
  display: flex;
`;
