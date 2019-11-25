import React from "react";

import { Modal, VideoYoutube, breakpoints } from "../../core";

const ModalMission = ({ open, onClose }) => {
  const w = window.innerWidth;
  let opts;

  if (w < breakpoints.sm) opts = { height: "180", width: "325" };
  if (w > breakpoints.md) opts = { height: "500", width: "900" };

  return (
    <Modal
      open={open}
      onClose={onClose}
      css={`
        background: none;
      `}
      closeIconCss={`
        top: 40px;
        right: 0;
  
        svg {
          fill: white;
        }

        @media (max-width: ${breakpoints.sm}px) {
          top: -20px;
        }
      `}
    >
      <VideoYoutube video="eNqHbEOhfqo" opts={opts} />
    </Modal>
  );
};

export default ModalMission;
