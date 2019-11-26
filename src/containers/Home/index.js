import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import { HomeContainer, DonateButtonContainer, DonateButton } from "./styles";
import { ContentSize, breakpoints } from "../../core";
import MissionMap from "../../components/MissionMap";
import Information from "../../components/Information";
import AboutMission from "../../components/AboutMission";
import Partners from "../../components/Partners";
import ModalMission from "../../components/ModalMission";

const URL_API = process.env.REACT_APP_MISSIONS_API;

const Home = () => {
  const [mission, setMission] = useState({});
  const [openModal, setOpenModal] = useState(false);
  const [openPopupModal, setOpenPopupModal] = useState(true);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);

  const toggleOpenPopupModal = useCallback(
    () => setOpenPopupModal(val => !val),
    []
  );

  useEffect(() => {
    axios(`${URL_API}/missions/`).then(res => {
      const { data } = res;
      const { countries } = data[0];
      const findCountry = countries.find(({ name }) => name === "Ecuador");
      setMission(findCountry);
    });
  }, []);

  const filterStates =
    mission &&
    mission.states &&
    mission.states.filter(({ cities }) => cities && cities.length);

  const renderDonateButton = (
    <DonateButton onClick={toggleOpenModal}>Súmate</DonateButton>
  );

  return (
    <HomeContainer>
      <ContentSize
        css={`
          min-height: 600px;

          @media (max-width: ${breakpoints.sm}px) {
            flex-direction: column-reverse;
            align-items: center;
          }
        `}
      >
        <MissionMap
          containerCss={`
            width: 60%;

            @media (max-width: ${breakpoints.sm}px) {
              height: 400px;
              width: 100%;
            }
          `}
          allStates={mission && mission.states}
          states={filterStates && filterStates}
        />
        <Information
          containerCss={`
            width: 40%;

            @media (max-width: ${breakpoints.sm}px) {
              height: 600px;
              width: 100%;
            }
          `}
          visitCities={filterStates && filterStates.length}
          openModal={openModal}
          toggleOpenModal={toggleOpenModal}
          renderDonateButton={renderDonateButton}
        />
      </ContentSize>
      <AboutMission />
      <Partners />
      <DonateButtonContainer>{renderDonateButton}</DonateButtonContainer>
      <ModalMission open={openPopupModal} onClose={toggleOpenPopupModal} />
    </HomeContainer>
  );
};

export default Home;
