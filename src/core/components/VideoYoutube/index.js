import React from "react";
import YouTube from "react-youtube";

const VideoYoutube = ({ video, ...rest }) => (
  <YouTube videoId={video} {...rest} />
);

export default VideoYoutube;
