import React, { useState, useCallback, useEffect } from "react";
import PropTypes from "prop-types";

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
  ModalContentContainer,
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

const MissionMap = ({ containerCss, allStates, visitCities }) => {
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

  const setAllStates = allStates.map(({ map_id, men, women, cities }) => ({
    id: map_id,
    value: men + women,
    hasCities: !!(cities && cities.length)
  }));

  useEffect(() => {
    const chart = setChart(
      setAllStates,
      toggleOpenModal,
      handleSetStateSelected,
      visitCities,
      allStates
    );

    return () => chart.dispose();
  }, [
    setAllStates,
    toggleOpenModal,
    handleSetStateSelected,
    visitCities,
    allStates
  ]);

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
          padding: 0;

          @media (max-width: ${breakpoints.sm}px) {
            height: max-content;
            max-height: 90vh;
            padding: 0;
          }
        `}
      >
        <ScrollableContainer>
          <ModalContentContainer>
            <ModalContentUp>
              {showSlide && (
                <ModalView>
                  {showSlide && showSlide.video ? (
                    <VideoYoutube video={showSlide.video} opts={opts} />
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
                      src={`https://img.youtube.com/vi/${findImages[0].video}/0.jpg`}
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
          </ModalContentContainer>
        </ScrollableContainer>
      </Modal>
    </MissionMapContainer>
  );
};
MissionMap.propTypes = {
  containerCss: PropTypes.string,
  allStates: PropTypes.array,
  visitCities: PropTypes.array
};
MissionMap.defaultProps = {
  containerCss: "",
  allStates: [],
  visitCities: []
};

export default MissionMap;
