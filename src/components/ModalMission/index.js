import React from "react";

import { Modal, VideoVimeo } from "../../core";

const ModalMission = ({ open, onClose }) => (
  <Modal
    open={open}
    onClose={onClose}
    css={`
      background: none;

      .mission-video {
        height: 100%;
        width: 100%;

        iframe {
          height: 100%;
          width: 100%;
        }
      }
    `}
  >
    <VideoVimeo className="mission-video" video={373764053} />
  </Modal>
);

export default ModalMission;
