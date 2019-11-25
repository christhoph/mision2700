import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_ecuadorLow from "@amcharts/amcharts4-geodata/ecuadorLow";

import { SVGS } from "../../core";

export const setChart = (
  provinces,
  toggleOpenModal,
  handleSetStateSelected,
  citiesData,
  states
) => {
  const { map_marker_path } = SVGS;

  let chart = am4core.create("chartdiv", am4maps.MapChart);
  chart.geodata = am4geodata_ecuadorLow;
  chart.projection = new am4maps.projections.Mercator();
  chart.homeZoomLevel = 2.5;
  chart.homeGeoPoint = {
    latitude: -1.738111,
    longitude: -78.323052
  };
  // disabled map user interaction
  chart.chartContainer.wheelable = false;
  chart.seriesContainer.resizable = false;
  chart.seriesContainer.draggable = false;
  chart.seriesContainer.resizable = false;
  chart.minZoomLevel = 2.5;
  chart.maxZoomLevel = 2.5;

  let polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());
  polygonSeries.useGeodata = true;
  polygonSeries.mapPolygons.template.nonScalingStroke = true;

  polygonSeries.data = provinces;

  var polygonTemplate = polygonSeries.mapPolygons.template;
  polygonTemplate.fill = am4core.color("#b3caee");
  polygonTemplate.tooltipText = `{name}\n
    Personas con
    Discapacidad Visual: {value}
  `;
  polygonTemplate.nonScalingStroke = true;
  polygonTemplate.strokeWidth = 0.5;
  polygonTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
  polygonTemplate.events.on("hit", e => {
    const selectName = e.target.dataItem.dataContext.name;
    const findState = states.find(({ name }) => name === selectName);
    if (findState && findState.cities) {
      toggleOpenModal();
      handleSetStateSelected(findState);
    }
  });
  var hs = polygonTemplate.states.create("hover");
  hs.properties.fill = am4core.color("#3c5bdc");

  let cities = chart.series.push(new am4maps.MapImageSeries());
  cities.mapImages.template.nonScaling = true;

  let city = cities.mapImages.template.createChild(am4core.Sprite);
  city.path = map_marker_path;
  city.scale = 0.065;
  city.horizontalCenter = "middle";
  city.verticalCenter = "bottom";
  city.fill = am4core.color("#1e75b8");

  const addCity = (coords, title, index) => {
    let city = cities.mapImages.create();
    city.latitude = coords.latitude;
    city.longitude = coords.longitude;
    city.tooltip.dy = -30;
    city.tooltipText = `${index} - ${title}`;
    return city;
  };

  const setCities = citiesData.map(({ name, coords }, index) =>
    addCity(coords, name, index + 1)
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

  setCities.map(
    (_, i) =>
      i < setCities.length - 1 && addLine(setCities[i], setCities[i + 1])
  );

  return chart;
};
