import React from "react";

import { HomeContainer, HomeContent } from "./styles";
import YearsBar from "../../components/YearsBar";
import Map from "../../components/Map";
import Information from "../../components/Information";
import Partners from "../../components/Partners";

const Home = () => (
  <HomeContainer>
    <YearsBar />
    <HomeContent>
      <Map containerCss="width: 60%;" />
      <Information containerCss="width: 40%;" />
    </HomeContent>
    <Partners />
  </HomeContainer>
);

export default Home;
