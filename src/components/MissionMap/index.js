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

const MissionMap = ({ containerCss }) => {
  const [openModal, setOpenModal] = useState(false);
  const [citySelected, setCitySelected] = useState(initialState);
  const [showSlide, setShowSlide] = useState(modalSlider[0]);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);
  const handleSetCitySelected = useCallback(city => setCitySelected(city), []);
  const handleSetShowSlide = useCallback(
    imageId => () => setShowSlide(modalSlider.find(({ id }) => id === imageId)),
    []
  );

  useEffect(() => {
    const chart = setChart(toggleOpenModal, handleSetCitySelected);

    return () => chart.dispose();
  }, [toggleOpenModal, handleSetCitySelected]);

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
                <span>300 </span>
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
                <span>100</span>
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

export default MissionMap;
