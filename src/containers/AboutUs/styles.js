import styled from "styled-components";

export const AboutUsContainer = styled.div`
  height: 100%;
  width: 100%;
  background: #f5f7fa;
  display: flex;
  justify-content: center;
`;

export const AboutUsContent = styled.div`
  width: 100%;
  display: flex;
  background: #fff;
  flex-direction: column;
  align-items: center;
  padding: 1rem 4rem;
  margin: 1rem 0;

  &:first-child {
    margin-top: 0;
  }
`;

export const AboutUsTitle = styled.h2`
  margin: 1rem 0;
`;

export const AboutUsDescription = styled.p`
  margin: 1rem 0;
`;

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const MemberBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 0.5rem;
`;

export const MemberImage = styled.img`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  margin: 0.5rem 0;
`;

export const MemberName = styled.h3`
  margin: 0.5rem 0;
`;

export const MemberText = styled.p`
  margin: 0.5rem 0;
  text-align: center;
  letter-spacing: 0.025rem;
  ${({ css }) => css}
`;
