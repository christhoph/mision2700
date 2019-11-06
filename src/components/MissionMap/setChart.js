import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";

import { SVGS } from "../../core";

export const setChart = (
  provinces,
  toggleOpenModal,
  handleSetCitySelected,
  citiesData
) => {
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

  // Agregamos las ciudades para mostrar el icono marker en el mapa
  // Pasamos a la funccion addCity() las coordenadas y el nombre de la ciudad
  const setCities = citiesData.map(({ name, coords }) => addCity(coords, name));

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

  // Agregamos las lineas entre los iconos de cada ciudad
  // Estas lineas sirven para la animacion del icono del auto
  setCities.map(
    (_, i) =>
      i < setCities.length - 1 && addLine(setCities[i], setCities[i + 1])
  );

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
