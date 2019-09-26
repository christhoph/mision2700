import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";

export const setChart = () => {
  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_ecuadorLow;
  chart.projection = new am4maps.projections.Miller();
  // disabled map user interaction
  chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;
  chart.maxZoomLevel = 1;

  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.mapPolygons.template.fill = chart.colors
    .getIndex(0)
    .lighten(0.5);
  polygonSeries.mapPolygons.template.nonScalingStroke = true;
  polygonSeries.exclude = ["EC-W"];

  let cities = chart.series.push(new am4maps.MapImageSeries());
  cities.mapImages.template.nonScaling = true;

  let city = cities.mapImages.template.createChild(am4core.Circle);
  city.radius = 6;
  city.fill = chart.colors.getIndex(0).brighten(-0.2);
  city.strokeWidth = 2;
  city.stroke = am4core.color("#fff");

  const addCity = (coords, title) => {
    let city = cities.mapImages.create();
    city.latitude = coords.latitude;
    city.longitude = coords.longitude;
    city.tooltipText = title;
    return city;
  };

  const quito = addCity(
    { latitude: -0.091251, longitude: -78.429166 },
    "Quito"
  );
  const tulcan = addCity(
    { latitude: 0.81382, longitude: -77.711794 },
    "Tulcán"
  );
  const esmeraldas = addCity(
    { latitude: 0.968094, longitude: -79.647516 },
    "Esmeraldas"
  );
  const guayaquil = addCity(
    { latitude: -2.195601, longitude: -79.883435 },
    "Guayaquil"
  );

  let lineSeries = chart.series.push(new am4maps.MapArcSeries());
  lineSeries.mapLines.template.line.strokeWidth = 2;
  lineSeries.mapLines.template.line.strokeOpacity = 0.5;
  lineSeries.mapLines.template.line.stroke = city.fill;
  lineSeries.mapLines.template.line.nonScalingStroke = true;
  lineSeries.mapLines.template.line.strokeDasharray = "1,1";
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

  addLine(quito, tulcan);
  addLine(tulcan, esmeraldas);
  addLine(esmeraldas, guayaquil);
  addLine(guayaquil, quito);

  let car = lineSeries.mapLines.getIndex(0).lineObjects.create();
  car.position = 0;
  car.width = 48;
  car.height = 48;

  let carImage = car.createChild(am4core.Sprite);
  carImage.scale = 0.05;
  carImage.horizontalCenter = "middle";
  carImage.verticalCenter = "middle";
  carImage.path =
    "M499.99 176h-59.87l-16.64-41.6C406.38 91.63 365.57 64 319.5 64h-127c-46.06 0-86.88 27.63-103.99 70.4L71.87 176H12.01C4.2 176-1.53 183.34.37 190.91l6 24C7.7 220.25 12.5 224 18.01 224h20.07C24.65 235.73 16 252.78 16 272v48c0 16.12 6.16 30.67 16 41.93V416c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-32h256v32c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32v-54.07c9.84-11.25 16-25.8 16-41.93v-48c0-19.22-8.65-36.27-22.07-48H494c5.51 0 10.31-3.75 11.64-9.09l6-24c1.89-7.57-3.84-14.91-11.65-14.91zm-352.06-17.83c7.29-18.22 24.94-30.17 44.57-30.17h127c19.63 0 37.28 11.95 44.57 30.17L384 208H128l19.93-49.83zM96 319.8c-19.2 0-32-12.76-32-31.9S76.8 256 96 256s48 28.71 48 47.85-28.8 15.95-48 15.95zm320 0c-19.2 0-48 3.19-48-15.95S396.8 256 416 256s32 12.76 32 31.9-12.8 31.9-32 31.9z";
  carImage.fill = chart.colors.getIndex(2).brighten(-0.2);
  carImage.strokeOpacity = 0;

  let currentLine = 0;
  let direction = 1;

  const driveCar = () => {
    car.mapLine = lineSeries.mapLines.getIndex(currentLine);
    car.parent = lineSeries;

    let from, to;
    let numLines = lineSeries.mapLines.length;
    if (direction === 1) {
      from = 0;
      to = 1;
      if (carImage.rotation !== 0) {
        carImage
          .animate({ to: 0, property: "rotation" }, 1000)
          .events.on("animationended", driveCar);
        return;
      }
    } else {
      from = 1;
      to = 0;
      if (carImage.rotation !== 180) {
        carImage
          .animate({ to: 180, property: "rotation" }, 1000)
          .events.on("animationended", driveCar);
        return;
      }
    }

    let animation = car.animate(
      {
        from: from,
        to: to,
        property: "position"
      },
      3000,
      am4core.ease.sinInOut
    );
    animation.events.on("animationended", driveCar);

    currentLine += direction;
    if (currentLine < 0) {
      currentLine = 0;
      direction = 1;
    } else if (currentLine + 1 > numLines) {
      currentLine = numLines - 1;
      direction = -1;
    }
  };

  driveCar();
  
  return chart;
};
