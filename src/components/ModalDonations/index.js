import React, { useState, useCallback } from "react";

import {
  DonationCard,
  DonationCardTitle,
  DonationCardPrice,
  DonationButton,
  DonationCounter,
  DonationCounterButton,
  DonationInputWrapper,
  DonationInput
} from "./styles";
import { Modal } from "../../core";

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
    <Modal
      open={open}
      onClose={onClose}
      css={`
        height: max-content;
        width: max-content;
      `}
    >
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
    </Modal>
  );
};

export default ModalDonations;
