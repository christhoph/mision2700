import React, { useState, useCallback, useEffect } from "react";

import {
  SVGIcons,
  EyeClipIcon,
  Modal,
  ScrollableContainer,
  VideoYoutube,
  breakpoints,
  colors
} from "../../core";
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

const MissionMap = ({ containerCss, allStates, states }) => {
  const [openModal, setOpenModal] = useState(false);
  const [stateSelected, setStateSelected] = useState(null);
  const [showSlide, setShowSlide] = useState(null);

  const findImages =
    stateSelected && stateSelected.cities && stateSelected.cities[0].images;

  const toggleOpenModal = useCallback(() => setOpenModal(val => !val), []);
  const handleSetStateSelected = useCallback(
    state => setStateSelected(state),
    []
  );
  const handleSetShowSlide = useCallback(
    imageId => () => setShowSlide(findImages.find(({ id }) => id === imageId)),
    [findImages]
  );

  useEffect(() => {
    if (findImages && findImages.length && !showSlide)
      setShowSlide(findImages[0]);
    if (showSlide && !openModal) {
      setStateSelected(null);
      setShowSlide(null);
    }
  }, [findImages, showSlide, openModal]);

  const setAllStates =
    allStates && allStates.map(({ map_id, value }) => ({ id: map_id, value }));

  // El metodo filter() es solo por la data local
  // Cuando se tenga la data desde la API se debe remover el metodo filter()
  // y usar el prop states, para obtener las ciudad
  const getCities = disVisual.states
    .filter(({ cities }) => cities && cities.length)
    .map(({ cities }) =>
      cities.reduce((prev, curr) => ({ ...prev, ...curr }), null)
    )
    .sort((a, b) => (a.position > b.position ? 1 : -1));

  useEffect(() => {
    const chart = setChart(
      setAllStates,
      toggleOpenModal,
      handleSetStateSelected,
      getCities,
      disVisual.states
    );

    return () => chart.dispose();
  }, [setAllStates, toggleOpenModal, handleSetStateSelected, getCities]);

  const w = window.innerWidth;
  let opts;

  if (w < breakpoints.sm) opts = { height: "200", width: "360" };
  if (w > breakpoints.md) opts = { height: "475", width: "695" };

  return (
    <MissionMapContainer css={containerCss}>
      <SVGIcons
        wrapperClass="city-arrow-icon-container"
        iconClass="city-arrow-icon"
        iconName="city_arrow_icon"
      />
      <MissionMapChart id="chartdiv" />
      <Modal
        open={openModal}
        onClose={toggleOpenModal}
        css={`
          flex-direction: column;
          padding-bottom: 0;

          @media (max-width: ${breakpoints.sm}px) {
            height: 85vh !important;
            max-height: 90vh !important;
            padding: 0;
          }
        `}
      >
        <ScrollableContainer>
          <ModalContentUp>
            {showSlide && (
              <ModalView>
                {showSlide && showSlide.videoId ? (
                  <VideoYoutube video={showSlide.videoId} opts={opts} />
                ) : (
                  <ModalViewImage
                    isVertical={showSlide.height > showSlide.width}
                    src={showSlide.url}
                    alt="modal_view"
                  />
                )}
              </ModalView>
            )}
            <ModalInfo>
              <ModalInfoTitle>
                {stateSelected && stateSelected.name}
              </ModalInfoTitle>
              <ModalInfoContent>
                <ModalInfoContentItem>
                  <SVGIcons
                    wrapperClass="modal-info-icon-container"
                    iconClass="modal-info-icon"
                    iconName="blind_person_icon"
                  />
                  <span>
                    {stateSelected && stateSelected.men + stateSelected.women}{" "}
                  </span>
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
                  <span>{stateSelected && stateSelected.beneficiaries}</span>
                  <p>Personas Beneficiadas</p>
                </ModalInfoContentItem>
              </ModalInfoContent>
            </ModalInfo>
          </ModalContentUp>
          <ModalContentDown>
            <ScrollableContainer
              css={`
                flex-flow: row nowrap;
                overflow: auto hidden;
              `}
            >
              {findImages && (
                <ModalSlide
                  key={findImages[0].id}
                  isVertical={findImages[0].height > findImages[0].width}
                  onClick={handleSetShowSlide(findImages[0].id)}
                >
                  <SVGIcons
                    wrapperClass="play-icon-container"
                    iconClass="play-icon"
                    iconName="play_icon"
                  />
                  <ModalSlideImage
                    isVertical={findImages[0].height > findImages[0].width}
                    src={`https://img.youtube.com/vi/${findImages[0].videoId}/0.jpg`}
                    alt="modal_slide"
                  />
                </ModalSlide>
              )}
              {findImages &&
                findImages.map(
                  ({ id, url, height, width }) =>
                    url && (
                      <ModalSlide
                        key={id}
                        isVertical={height > width}
                        onClick={handleSetShowSlide(id)}
                      >
                        <ModalSlideImage
                          isVertical={height > width}
                          src={url}
                          alt="modal_slide"
                        />
                      </ModalSlide>
                    )
                )}
            </ScrollableContainer>
          </ModalContentDown>
        </ScrollableContainer>
      </Modal>
    </MissionMapContainer>
  );
};
MissionMap.defaultProps = {
  allStates: [],
  states: []
};

export default MissionMap;
