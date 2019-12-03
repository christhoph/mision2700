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

const sorting = el => el.sort((a, b) => (a.position > b.position ? 1 : -1));

const Home = () => {
  const [mission, setMission] = useState({});
  const [visitCities, setVisitCities] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);

  const handleFetchMissions = async () => {
    await axios(`${URL_API}/missions/`).then(res =>
      setMission(res.data[0].countries[0])
    );
  };

  const handleFetchCities = async () => {
    await axios(`${URL_API}/cities/`).then(res => setVisitCities(res.data));
  };

  useEffect(() => {
    handleFetchMissions();
    handleFetchCities();
  }, []);

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
          visitCities={visitCities && visitCities.length}
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
        visitCities={visitCities && sorting(visitCities)}
      />
      <Partners />
      <DonateButtonContainer>{renderDonateButton}</DonateButtonContainer>
    </HomeContainer>
  );
};

export default Home;
