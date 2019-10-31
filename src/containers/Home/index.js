import React, { useState, useEffect } from "react";
import axios from "axios";

import { HomeContainer } from "./styles";
import { ContentSize } from "../../core";
import YearsBar from "../../components/YearsBar";
import MissionMap from "../../components/MissionMap";
import Information from "../../components/Information";
import AboutMission from "../../components/AboutMission";
import Partners from "../../components/Partners";
import BlindPersonForm from "../../components/BlindPersonForm";

const URL_API = process.env.REACT_APP_MISSIONS_API;

const Home = () => {
  const [mission, setMission] = useState({});

  useEffect(() => {
    axios(`${URL_API}/missions/`).then(res => {
      const { data } = res;
      const { countries } = data[0];
      const findCountry = countries.find(({ name }) => name === "Ecuador");
      setMission(findCountry);
    });
  }, []);

  console.log("mission: ", mission);

  const filterStates =
    mission &&
    mission.states &&
    mission.states.filter(({ cities }) => cities && cities.length);

  return (
    <HomeContainer>
      <YearsBar />
      <ContentSize>
        <MissionMap
          containerCss="width: 60%;"
          allStates={mission && mission.states}
          states={filterStates && filterStates}
        />
        <Information
          containerCss="width: 40%;"
          visitCities={filterStates && filterStates.length}
        />
      </ContentSize>
      <AboutMission />
      <Partners />
      <BlindPersonForm />
    </HomeContainer>
  );
};

export default Home;
