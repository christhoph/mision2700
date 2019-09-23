import React, { useState, useCallback } from "react";

import { YearsBarContainer, YearsButtonContainer, YearsBarTitle, YearsButton } from "./styles";

const missionYears = ["2018", "2019"];

const YearsBar = () => {
  const [active, setActive] = useState(0);

  const hanldeSetActive = useCallback(index => () => setActive(index), []);

  return (
    <YearsBarContainer>
      <YearsButtonContainer>
       <YearsBarTitle>Años</YearsBarTitle>
       {missionYears.map((year, index) => (
         <YearsButton
          key={year}
          className={active === index ? "active" : ""}
          onClick={hanldeSetActive(index)}
          >
            {year}
          </YearsButton>
       ))}
      </YearsButtonContainer>
    </YearsBarContainer>
   );
}

export default YearsBar;
