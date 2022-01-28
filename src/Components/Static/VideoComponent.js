import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

import React, { forwardRef, useContext, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import PushPinSharpIcon from "@mui/icons-material/PushPinSharp";
import NotesInput from "./NotesInput";

// function
import { formatSecondsToMinutes } from "../Functions/Time";

import { AppContext } from "../../AppContext";
import Button from "@mui/material/Button";

const VideoComponent = forwardRef(({}, ref) => {
  // useContext
  const {
    videoUrl,
    submittedNotes,
    setSubmittedNotes,
    progress,
    setProgress,
    isAutoPause,
    setIsAutoPause,
  } = useContext(AppContext);
  // state

  const [duration, setDuration] = useState(0);

  // handlers
  const handleOnProgress = (state) => {
    setProgress(state);
  };
  const handleOnDuration = (duration) => {
    setDuration(formatSecondsToMinutes(duration));
  };
  const handleAutoPause = () => {
    setIsAutoPause(!isAutoPause);
  };

  return (
    <Box width={1} display={"flex"} flexDirection={"column"} rowGap={2}>
      <VideoPlayer
        ref={ref}
        url={videoUrl}
        onProgress={handleOnProgress}
        onDuration={handleOnDuration}
      />

      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography color={"text.light"}>
          {videoUrl
            ? `${formatSecondsToMinutes(progress.playedSeconds)} / ${duration}`
            : null}
        </Typography>
        <Box display={"flex"} rowGap={2}>
          <Box display={"flex"} alignItems={"center"}>
            <Typography
              color={"text.light"}
              fontWeight={500}
              fontSize={"0.875rem"}
            >
              AUTO PAUSE
            </Typography>
            <Switch
              disabled={!videoUrl ? true : false}
              checked={isAutoPause ? true : false}
              onChange={() => handleAutoPause()}
            />
          </Box>
          <Button
            disabled={!videoUrl ? true : false}
            startIcon={<PushPinSharpIcon />}
            sx={{ color: "text.light" }}
            onClick={() =>
              setSubmittedNotes([
                ...submittedNotes,
                {
                  time: progress.playedSeconds,
                  notes: "Pinned",
                },
              ])
            }
          >
            Pin time
          </Button>
        </Box>
      </Box>
      <NotesInput currentSeconds={progress.playedSeconds} />
    </Box>
  );
});

export default VideoComponent;
