import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React, { useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";

// function
import { formatSecondsToMinutes } from "../Functions/Time";
import NotesInput from "./NotesInput";

export default function VideoComponent() {
  // state
  const [progress, setProgress] = useState({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  });
  // return as object {played, playedSeconds, loaded, loadedSeconds}

  const [duration, setDuration] = useState(0);
  const [videoUrl, setVideoUrl] = useState("");

  // useEffect
  useEffect(() => {
    handleVideoUrl();
  }, []);

  const handleVideoUrl = () => {
    setVideoUrl(localStorage.getItem("videoLink"));
  };

  const handleOnProgress = (state) => {
    setProgress(state);
  };

  const handleOnDuration = (duration) => {
    setDuration(formatSecondsToMinutes(duration));
  };

  return (
    <Box width={1} display={"flex"} flexDirection={"column"} rowGap={2}>
      <VideoPlayer
        url={videoUrl}
        onProgress={handleOnProgress}
        onDuration={handleOnDuration}
      />
      <Box>
        <Typography color={"text.light"}>
          {`${formatSecondsToMinutes(progress.playedSeconds)} / ${duration}`}
        </Typography>
      </Box>
      <NotesInput
        currentSeconds={formatSecondsToMinutes(progress.playedSeconds)}
      />
    </Box>
  );
}
