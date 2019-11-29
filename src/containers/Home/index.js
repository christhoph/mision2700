import React, { useState, useCallback, useEffect } from "react";
import axios from "axios";

import {
  HomeContainer,
  HomeContent,
  DonateButtonContainer,
  DonateButton
} from "./styles";
import { ContentSize, VideoYoutube, breakpoints } from "../../core";
import MissionMap from "../../components/MissionMap";
import Information from "../../components/Information";
import AboutMission from "../../components/AboutMission";
import Partners from "../../components/Partners";

const URL_API = process.env.REACT_APP_MISSIONS_API;

const Home = () => {
  const [mission, setMission] = useState({});
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);

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

  const w = window.innerWidth;
  let opts;

  if (w < breakpoints.sm) opts = { height: "180", width: "320" };
  if (w > breakpoints.md) opts = { height: "280", width: "500" };

  return (
    <HomeContainer>
      <ContentSize
        css={`
          min-height: 500px;

          @media (max-width: ${breakpoints.sm}px) {
            flex-direction: column-reverse;
            align-items: center;
          }
        `}
      >
        <HomeContent>
          <VideoYoutube video="-PcNvVDljXQ" opts={opts} />
        </HomeContent>
        <Information
          containerCss={`
            width: 40%;

            @media (max-width: ${breakpoints.sm}px) {
              height: 500px;
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
      <MissionMap
        containerCss={`
            height: 600px;
            width: 600px;
            margin: 1rem 0;

            @media (max-width: ${breakpoints.sm}px) {
              height: 400px;
              width: 100%;
            }
          `}
        allStates={mission && mission.states}
        states={filterStates && filterStates}
      />
      <Partners />
      <DonateButtonContainer>{renderDonateButton}</DonateButtonContainer>
    </HomeContainer>
  );
};

export default Home;
