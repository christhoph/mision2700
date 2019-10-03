import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";

import { SVGS } from "../../core";

export const setChart = (toggleOpenModal, handleSetCitySelected) => {
  const { map_marker_path, car_path } = SVGS;

  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_ecuadorLow;
  chart.projection = new am4maps.projections.Miller();
  chart.homeZoomLevel = 2;
  chart.homeGeoPoint = {
    latitude: -1.428822,
    longitude: -78.121138
  };
  
  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.mapPolygons.template.fill = chart.colors
    .getIndex(0)
    .lighten(0.5);
  polygonSeries.mapPolygons.template.nonScalingStroke = true;

  polygonSeries.data = [
    {
      // Azuay
      id: "EC-A",
      value: 100
    },
    {
      // Bolivar
      id: "EC-B",
      value: 110
    },
    {
      // Carchi
      id: "EC-C",
      value: 120
    },
    {
      // Orellana
      id: "EC-D",
      value: 130
    },
    {
      // Esmeraldas
      id: "EC-E",
      value: 140
    },
    {
      // Cañar
      id: "EC-F",
      value: 150
    },
    {
      // Guayas
      id: "EC-G",
      value: 160
    },
    {
      // Chimborazo
      id: "EC-H",
      value: 170
    },
    {
      // Imbabura
      id: "EC-I",
      value: 180
    },
    {
      // Loja
      id: "EC-L",
      value: 190
    },
    {
      // Manabi
      id: "EC-M",
      value: 200
    },
    {
      // Napo
      id: "EC-N",
      value: 210
    },
    {
      // El Oro
      id: "EC-O",
      value: 220
    },
    {
      // Pichincha
      id: "EC-P",
      value: 230
    },
    {
      // Los Rios
      id: "EC-R",
      value: 240
    },
    {
      // Morona Santiago
      id: "EC-S",
      value: 250
    },
    {
      // Santo Domingo de los Tsáchilas
      id: "EC-SD",
      value: 260
    },
    {
      // Santa Elena
      id: "EC-SE",
      value: 270
    },
    {
      // Tungurahua
      id: "EC-T",
      value: 280
    },
    {
      // Sucumbios
      id: "EC-U",
      value: 290
    },
    {
      // Galapagos
      id: "EC-W",
      value: 300
    },
    {
      // Cotopaxi
      id: "EC-X",
      value: 310
    },
    {
      // Pastaza
      id: "EC-Y",
      value: 320
    },
    {
      // Zamora Chinchipe
      id: "EC-Z",
      value: 330
    }
  ];
  
  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = `{name}\n
    Personas
    No videntes: {value}
  `;
  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#3c5bdc");

  let cities = chart.series.push(new am4maps.MapImageSeries());
  cities.mapImages.template.nonScaling = true;

  let city = cities.mapImages.template.createChild(am4core.Sprite);
  city.path = map_marker_path;
  city.scale = 0.065;
  city.horizontalCenter = "middle";
  city.verticalCenter = "bottom";
  city.fill = chart.colors.getIndex(7);
  var cityHs = city.states.create("hover");
  cityHs.properties.fill = chart.colors.getIndex(10);

  const addCity = (coords, title) => {
    let city = cities.mapImages.create();
    city.events.on("hit", () => {
      toggleOpenModal();
      handleSetCitySelected({
        id: title,
        name: title
      });
    });
    city.latitude = coords.latitude;
    city.longitude = coords.longitude;
    city.tooltip.dy = -30;
    city.tooltipText = title;
    city.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    return city;
  };

  const tulcan = addCity(
    { latitude: 0.81382, longitude: -77.711794 },
    "Tulcán"
  );
  const esmeraldas = addCity(
    { latitude: 0.968094, longitude: -79.647516 },
    "Esmeraldas"
  );
  const pedernales = addCity(
    { latitude: 0.068226, longitude: -80.044485 },
    "Pedernales"
  );
  const portoviejo = addCity(
    { latitude: -1.055685, longitude: -80.451366 },
    "Portoviejo"
  );
  const guayaquil = addCity(
    { latitude: -2.195601, longitude: -79.883435 },
    "Guayaquil"
  );
  const machala = addCity(
    { latitude: -3.258923, longitude: -79.955163 },
    "Machala"
  );
  const loja = addCity(
    { latitude: -4.008082, longitude: -79.210965 },
    "Loja"
  );
  const cuenca = addCity(
    { latitude: -2.900074, longitude: -79.005900 },
    "Cuenca"
  );
  const riobamba = addCity(
    { latitude: -1.656577, longitude: -78.657716 },
    "Riobamba"
  );
  const puyo = addCity(
    { latitude: -1.493190, longitude: -77.999795 },
    "Puyo"
  );
  const ambato = addCity(
    { latitude: -1.253755, longitude: -78.619298 },
    "Ambato"
  );
  const latacunga = addCity(
    { latitude: -0.931815, longitude: -78.604514 },
    "Latacunga"
  );
  const santoDomingo = addCity(
    { latitude: -0.255764, longitude: -79.174124 },
    "Santo Domingo"
  );
  const quito = addCity(
    { latitude: -0.091251, longitude: -78.429166 },
    "Quito"
  );
  const ibarra = addCity(
    { latitude: 0.346717, longitude: -78.131669 },
    "Ibarra"
  );

  let lineSeries = chart.series.push(new am4maps.MapArcSeries());
  lineSeries.mapLines.template.line.strokeWidth = 2;
  lineSeries.mapLines.template.line.strokeOpacity = 0.5;
  lineSeries.mapLines.template.line.stroke = chart.colors.getIndex(2).brighten(-0.2);
  lineSeries.mapLines.template.line.nonScalingStroke = true;
  lineSeries.mapLines.template.line.strokeDasharray = "2";
  lineSeries.zIndex = 10;

  let shadowLineSeries = chart.series.push(new am4maps.MapLineSeries());
  shadowLineSeries.mapLines.template.line.strokeOpacity = 0;
  shadowLineSeries.mapLines.template.line.nonScalingStroke = true;
  shadowLineSeries.mapLines.template.shortestDistance = false;
  shadowLineSeries.zIndex = 5;

  const addLine = (from, to) => {
    let line = lineSeries.mapLines.create();
    line.imagesToConnect = [from, to];
    line.line.controlPointDistance = 0;

    return line;
  };

  addLine(tulcan, esmeraldas);
  addLine(esmeraldas, pedernales);
  addLine(pedernales, portoviejo);
  addLine(portoviejo, guayaquil);
  addLine(guayaquil, machala);
  addLine(machala, loja);
  addLine(loja, cuenca);
  addLine(cuenca, riobamba);
  addLine(riobamba, puyo);
  addLine(puyo, ambato);
  addLine(ambato, latacunga);
  addLine(latacunga, santoDomingo);
  addLine(santoDomingo, quito);
  addLine(quito, ibarra);
  addLine(ibarra, tulcan);

  let car = lineSeries.mapLines.getIndex(0).lineObjects.create();
  car.position = 0;
  car.width = 512;
  car.height = 512;

  let carImage = car.createChild(am4core.Sprite);
  carImage.scale = 0.025;
  carImage.horizontalCenter = "middle";
  carImage.verticalCenter = "middle";
  carImage.path = car_path;
  carImage.fill = chart.colors.getIndex(2).brighten(-0.2);
  carImage.strokeOpacity = 0;

  const direction = 1;
  let currentLine = 0;

  const driveCar = () => {
    car.mapLine = lineSeries.mapLines.getIndex(currentLine);
    car.parent = lineSeries;

    if (carImage.rotation !== 270) {
      carImage
        .animate({ to: 270, property: "rotation" }, 1000)
        .events.on("animationended", driveCar);
      return;
    }

    let animation = car.animate(
      { from: 0, to: 1, property: "position" },
      2000,
      am4core.ease.sinInOut
    );
    animation.events.on("animationended", driveCar);

    currentLine += direction;
    if (currentLine + 1 > lineSeries.mapLines.length) currentLine = 0;
  };

  driveCar();
  
  return chart;
};
