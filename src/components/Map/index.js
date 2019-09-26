import React, { useEffect } from "react";

import { setChart } from "./setChart";
import { MapContainer, MapChart } from "./styles";

const Map = ({ containerCss }) => {
  useEffect(() => {
    const chart = setChart();

    return () => chart.dispose();
  }, []);

  return (
    <MapContainer css={containerCss}>
      <MapChart id="chartdiv" />
    </MapContainer>
  );
}

export default Map;