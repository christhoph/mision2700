import React from "react";

import { HomeContainer } from "./styles";
import { ContentSize } from "../../core";
import YearsBar from "../../components/YearsBar";
import MissionMap from "../../components/MissionMap";
import Information from "../../components/Information";
import AboutMission from "../../components/AboutMission";
import Partners from "../../components/Partners";
import BlindPersonForm from "../../components/BlindPersonForm";

const Home = () => (
  <HomeContainer>
    <YearsBar />
    <ContentSize>
      <MissionMap containerCss="width: 60%;" />
      <Information containerCss="width: 40%;" />
    </ContentSize>
    <AboutMission />
    <Partners />
    <BlindPersonForm />
  </HomeContainer>
);

export default Home;
