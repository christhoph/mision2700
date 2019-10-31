import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";

import { SVGS } from "../../core";

export const setChart = (provinces, toggleOpenModal, handleSetCitySelected) => {
  const { map_marker_path, car_path } = SVGS;
  console.log("provinces: ", provinces);

  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_ecuadorLow;
  chart.projection = new am4maps.projections.Mercator();
  chart.homeZoomLevel = 2.5;
  chart.homeGeoPoint = {
    latitude: -1.738111,
    longitude: -78.323052
  };
  chart.seriesContainer.resizable = false;
  chart.minZoomLevel = 2.5;
  chart.maxZoomLevel = 3;

  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.mapPolygons.template.fill = chart.colors
    .getIndex(0)
    .lighten(0.5);
  polygonSeries.mapPolygons.template.nonScalingStroke = true;

  polygonSeries.data = provinces;

  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.tooltipText = `{name}\n
    Personas con
    Discapacidad Visual: {value}
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

  const ibarra = addCity(
    { latitude: 0.346642, longitude: -78.130284 },
    "Ibarra"
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
  const loja = addCity({ latitude: -4.008082, longitude: -79.210965 }, "Loja");
  const zamora = addCity(
    { latitude: -4.062284, longitude: -78.94814 },
    "Zamora"
  );
  const cuenca = addCity(
    { latitude: -2.900074, longitude: -79.0059 },
    "Cuenca"
  );
  const macas = addCity(
    { latitude: -2.307021, longitude: -78.118286 },
    "Macas"
  );
  const riobamba = addCity(
    { latitude: -1.656577, longitude: -78.657716 },
    "Riobamba"
  );
  const puyo = addCity({ latitude: -1.49319, longitude: -77.999795 }, "Puyo");
  const tena = addCity({ latitude: -0.996186, longitude: -77.812471 }, "Tena");
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

  let lineSeries = chart.series.push(new am4maps.MapArcSeries());
  lineSeries.mapLines.template.line.strokeWidth = 2;
  lineSeries.mapLines.template.line.strokeOpacity = 0.5;
  lineSeries.mapLines.template.line.stroke = chart.colors
    .getIndex(2)
    .brighten(-0.2);
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
    line.line.controlPointDistance = 0.05;

    return line;
  };

  addLine(ibarra, esmeraldas);
  addLine(esmeraldas, pedernales);
  addLine(pedernales, portoviejo);
  addLine(portoviejo, guayaquil);
  addLine(guayaquil, machala);
  addLine(machala, loja);
  addLine(loja, zamora);
  addLine(zamora, cuenca);
  addLine(cuenca, macas);
  addLine(macas, riobamba);
  addLine(riobamba, puyo);
  addLine(puyo, tena);
  addLine(tena, ambato);
  addLine(ambato, latacunga);
  addLine(latacunga, santoDomingo);
  addLine(santoDomingo, quito);

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
