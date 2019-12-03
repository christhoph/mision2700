import React from "react";
import YouTube from "react-youtube";
import PropTypes from "prop-types";

const VideoYoutube = ({ video, ...rest }) => (
  <YouTube videoId={video} {...rest} />
);
VideoYoutube.propTypes = {
  video: PropTypes.string.isRequired,
  rest: PropTypes.object
};
VideoYoutube.defaultProp = {
  rest: {}
};

export default VideoYoutube;
