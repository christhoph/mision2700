import React, { useState, useCallback, useEffect } from "react";

import { SVGIcons } from "../../core";
import { setChart } from "./setChart";
import {
  MissionMapContainer,
  MissionMapChart,
  ModalContainer,
  ModalContent,
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

const initialState = {
  id: "",
  name: "",
};

const MissionMap = ({ containerCss }) => {
  const [openModal, setOpenModal] = useState(false);
  const [citySelected, setCitySelected] = useState(initialState);

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);
  const handleSetCitySelected = useCallback(city => setCitySelected(city), []);

  useEffect(() => {
    const chart = setChart(toggleOpenModal, handleSetCitySelected);

    return () => chart.dispose();
  }, [toggleOpenModal, handleSetCitySelected]);

  return (
    <MissionMapContainer css={containerCss}>
      <MissionMapChart id="chartdiv" />
      <ModalContainer open={openModal} onClose={toggleOpenModal}>
        <ModalContent>
          <SVGIcons wrapperClass="close-icon-container" iconClass="close-icon" iconName="close_icon" iconAction={toggleOpenModal} />
          <ModalContentUp>
            <ModalView>
              <ModalViewImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png" alt="modal_view" />
            </ModalView>
            <ModalInfo>
              <ModalInfoTitle>{citySelected.name}</ModalInfoTitle>
              <ModalInfoContent>
                <ModalInfoContentItem>
                  <span>300 </span>
                  <p>Personas No Videntes</p>
                </ModalInfoContentItem>
                <ModalInfoContentItem>
                  <span>100</span>
                  <p>No Videntes Beneficiados</p>
                </ModalInfoContentItem>
              </ModalInfoContent>
            </ModalInfo>
          </ModalContentUp>
          <ModalContentDown>
            <ModalSlide>
              <ModalSlideImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyesvideo.png" alt="modal_slide" />
            </ModalSlide>
            <ModalSlide>
              <ModalSlideImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg" alt="modal_slide" />
            </ModalSlide>
            <ModalSlide>
              <ModalSlideImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg" alt="modal_slide" />
            </ModalSlide>
            <ModalSlide>
              <ModalSlideImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg" alt="modal_slide" />
            </ModalSlide>
            <ModalSlide>
              <ModalSlideImage src="https://storage.googleapis.com/flexbox-180917.appspot.com/mision2700/handeyes_help.jpg" alt="modal_slide" />
            </ModalSlide>
          </ModalContentDown>
        </ModalContent>
      </ModalContainer>
    </MissionMapContainer>
  );
}

export default MissionMap;