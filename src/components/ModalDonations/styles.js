import styled from "styled-components";

import { colors, convertHexToRgba } from "../../core";

const { white, darkBlue, skyBlue } = colors;

export const DonationCard = styled.div`
  height: 480px;
  width: 300px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${darkBlue};
  border-radius: 1rem;
  padding: 2rem 1rem;
  margin: 1rem;
`;

export const DonationCardTitle = styled.h4`
  color: ${skyBlue};
`;

export const DonationCardPrice = styled.p`
  font-size: 4rem;
`;

export const DonationCounter = styled.div`
  display: flex;
  align-items: center;s
`;

export const DonationCounterButton = styled.button`
  background: none;
  border: none;
  padding: 0.8rem;
  color: ${convertHexToRgba(skyBlue, 0.3)};
  font-size: 1.6rem;
  outline: none;
  cursor: pointer;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: ${skyBlue};
  }
`;

export const DonationInputWrapper = styled.div`
  width: 4rem;
  height: 4rem;
  border-radius: 0.6rem/0.8rem;
  background-color: ${skyBlue};
  overflow: hidden;
  box-shadow: inset 0 0 0.8rem 0.1rem ${convertHexToRgba(darkBlue, 0.2)},
    0 20px 30px -10px ${convertHexToRgba(darkBlue, 0.26)};

  &.change-price {
    width: 200px;
  }
`;

export const DonationInput = styled.input`
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  outline: none;
  transition-property: transform, opacity;
  transition-duration: 0.25s;
  color: #fff;
  text-align: center;
  font-size: 2rem;
  font-weight: 900;
  text-transform: linear;
`;

export const DonationButton = styled.a`
  width: 200px;
  background-color: ${skyBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  padding: 1rem 0;
  color: ${white};
`;
