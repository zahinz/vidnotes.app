import React from "react";
import ReactPlayer from "react-player/youtube";
import AspectRatioBox from "./AspectRatioBox";

export default function VideoPlayer({ url, onProgress, onDuration }) {
  return (
    <AspectRatioBox ratio={16 / 9}>
      <ReactPlayer
        url={url}
        height={"100%"}
        width={"100%"}
        onProgress={onProgress}
        onDuration={onDuration}
        controls
      />
    </AspectRatioBox>
  );
}
