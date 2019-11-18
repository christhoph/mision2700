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

const paypal = "https://www.paypal.me/HANDEYES/";

const ModalDonations = ({ open, onClose }) => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(0);

  const handleSetCount = useCallback(
    val => () => setCount(val < 1 ? 1 : val),
    []
  );

  const handleOnChangeCount = useCallback(
    ({ target: { value } }) => setCount(value < 1 ? 1 : parseInt(value, 10)),
    []
  );

  const handleOnChangePrice = useCallback(
    ({ target: { value } }) =>
      setPrice(
        Number.isInteger(parseInt(value, 10)) ? parseInt(value, 10) : price
      ),
    [price]
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
        <DonationCardPrice>{`$${200 * count}`}</DonationCardPrice>
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
        <DonationButton
          href={`${paypal}${200 * count}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donar
        </DonationButton>
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
        <DonationButton
          href={`${paypal}${price}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Donar
        </DonationButton>
      </DonationCard>
    </Modal>
  );
};

export default ModalDonations;
