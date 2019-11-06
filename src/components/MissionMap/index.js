import React, { useState, useCallback, useEffect } from "react";

import { SVGIcons, EyeClipIcon, Modal, colors } from "../../core";
import { setChart } from "./setChart";
import {
  MissionMapContainer,
  MissionMapChart,
  ModalContentUp,
  ModalView,
  ModalViewImage,
  ModalInfo,
  ModalInfoTitle,
  ModalInfoContent,
  ModalInfoContentItem,
  ModalContentDown,
  ModalSlide,
  ModalSlideImage
} from "./styles";

import { disVisual } from "./data";

const { skyBlue } = colors;

const initialState = {
  id: "",
  name: ""
};

const modalSlider = [
  {
    id: "ms-01",
    src:
      "https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png"
  },
  {
    id: "ms-02",
    src:
      "https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg"
  },
  {
    id: "ms-03",
    src:
      "https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png"
  },
  {
    id: "ms-04",
    src:
      "https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg"
  },
  {
    id: "ms-05",
    src:
      "https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png"
  }
];

const MissionMap = ({ containerCss, allStates, states }) => {
  const [openModal, setOpenModal] = useState(false);
  const [citySelected, setCitySelected] = useState(initialState);
  const [showSlide, setShowSlide] = useState(modalSlider[0]);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);
  const handleSetCitySelected = useCallback(city => setCitySelected(city), []);
  const handleSetShowSlide = useCallback(
    imageId => () => setShowSlide(modalSlider.find(({ id }) => id === imageId)),
    []
  );

  const setAllStates =
    allStates && allStates.map(({ map_id, value }) => ({ id: map_id, value }));

  console.log("states: ", states);
  console.log("disVisual: ", disVisual.states);

  // El metodo filter() es solo por la data local
  // Cuando se tenga la data desde la API se debe remover el metodo filter()
  // y usar el prop states, para obtener las ciudad
  const getCities = disVisual.states
    .filter(({ cities }) => cities && cities.length)
    .map(({ cities }) =>
      cities.reduce((prev, curr) => ({ ...prev, ...curr }), null)
    )
    .sort((a, b) => (a.position > b.position ? 1 : -1));

  console.log("getCities: ", getCities);

  const getCity =
    states &&
    states
      .map(({ cities }) =>
        cities.reduce((prev, curr) => ({ ...prev, ...curr }), null)
      )
      .find(({ name }) => name === citySelected.name);

  useEffect(() => {
    const chart = setChart(
      setAllStates,
      toggleOpenModal,
      handleSetCitySelected,
      getCities
    );

    return () => chart.dispose();
  }, [setAllStates, toggleOpenModal, handleSetCitySelected, getCities]);

  return (
    <MissionMapContainer css={containerCss}>
      <MissionMapChart id="chartdiv" />
      <Modal
        open={openModal}
        onClose={toggleOpenModal}
        css={`
          flex-direction: column;
        `}
      >
        <ModalContentUp>
          <ModalView>
            <ModalViewImage src={showSlide.src} alt="modal_view" />
          </ModalView>
          <ModalInfo>
            <ModalInfoTitle>{citySelected.name}</ModalInfoTitle>
            <ModalInfoContent>
              <ModalInfoContentItem>
                <SVGIcons
                  wrapperClass="modal-info-icon-container"
                  iconClass="modal-info-icon"
                  iconName="blind_person_icon"
                />
                <span>{getCity && getCity.men + getCity.women} </span>
                <p>Personas con Discapacidad Visual</p>
              </ModalInfoContentItem>
              <ModalInfoContentItem>
                <EyeClipIcon
                  css={`
                    margin-right: 1rem;
                  `}
                  iconSize={28}
                  iconColor={skyBlue}
                />
                <span>{getCity && getCity.beneficiaries}</span>
                <p>Personas Beneficiadas</p>
              </ModalInfoContentItem>
            </ModalInfoContent>
          </ModalInfo>
        </ModalContentUp>
        <ModalContentDown>
          {modalSlider.map(({ id, src }) => (
            <ModalSlide key={id} onClick={handleSetShowSlide(id)}>
              <ModalSlideImage src={src} alt="modal_slide" />
            </ModalSlide>
          ))}
        </ModalContentDown>
      </Modal>
    </MissionMapContainer>
  );
};
MissionMap.defaultProps = {
  allStates: [],
  states: []
};

export default MissionMap;
