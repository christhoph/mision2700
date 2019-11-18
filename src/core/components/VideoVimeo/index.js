import React from "react";
import Vimeo from "@u-wave/react-vimeo";

const VideoVimeo = ({ video, ...rest }) => (
  <Vimeo
    video={video}
    showTitle={false}
    showByline={false}
    showPortrait={false}
    {...rest}
  />
);

export default VideoVimeo;
