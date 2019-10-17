import React, { useState, useCallback } from "react";

import {
  ModalDonationsContainer,
  ModalContent,
  DonationCard,
  DonationCardTitle,
  DonationCardPrice,
  DonationButton,
  DonationCounter,
  DonationCounterButton,
  DonationInputWrapper,
  DonationInput
} from "./styles";
import { SVGIcons } from "../../core";

const ModalDonations = ({ open, onClose }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(1);

  const handleSetCount = useCallback(
    val => () => setCount(val < 1 ? 1 : val),
    []
  );

  const handleOnChangeCount = useCallback(
    ({ target: { value } }) => setCount(value < 1 ? 1 : parseInt(value, 10)),
    []
  );

  const handleOnChangePrice = useCallback(
    ({ target: { value } }) => setPrice(value === "" ? 1 : parseInt(value, 10)),
    []
  );

  return (
    <ModalDonationsContainer open={open} onClose={onClose}>
      <ModalContent>
        <SVGIcons
          wrapperClass="close-icon-container"
          iconClass="close-icon"
          iconName="close_icon"
          iconAction={onClose}
        />
        <DonationCard>
          <DonationCardTitle>Dispositivo EyeClip</DonationCardTitle>
          <DonationCardPrice>{`$${150 * count}`}</DonationCardPrice>
          <DonationCounter>
            <DonationCounterButton onClick={handleSetCount(count - 1)}>
              -
            </DonationCounterButton>
            <DonationInputWrapper>
              <DonationInput
                type="text"
                maxlength="2"
                value={count}
                onChange={handleOnChangeCount}
              />
            </DonationInputWrapper>
            <DonationCounterButton onClick={handleSetCount(count + 1)}>
              +
            </DonationCounterButton>
          </DonationCounter>
          <DonationButton>Donar</DonationButton>
        </DonationCard>
        <DonationCard>
          <DonationCardTitle>Apadrina mensualmente</DonationCardTitle>
          <DonationCardPrice>$18,99</DonationCardPrice>
          <DonationButton>Donar</DonationButton>
        </DonationCard>
        <DonationCard>
          <DonationCardTitle>Cantidad Deseada</DonationCardTitle>
          <DonationCardPrice>{`$${price}`}</DonationCardPrice>
          <DonationInputWrapper className="change-price">
            <DonationInput
              type="text"
              value={price}
              onChange={handleOnChangePrice}
            />
          </DonationInputWrapper>
          <DonationButton>Donar</DonationButton>
        </DonationCard>
      </ModalContent>
    </ModalDonationsContainer>
  );
};

export default ModalDonations;
