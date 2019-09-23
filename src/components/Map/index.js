import React from "react";

import { MapContainer, MapImage } from "./styles";

const Map = ({ containerCss }) => (
  <MapContainer css={containerCss}>
    <MapImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/mapa.jpg" alt="map" />
  </MapContainer>
);

export default Map;