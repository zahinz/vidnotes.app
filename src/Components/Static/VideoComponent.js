import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
  const { videoUrl, submittedNotes, setSubmittedNotes, progress, setProgress } =
    useContext(AppContext);
  // state

  const [duration, setDuration] = useState(0);

  // handlers
  const handleOnProgress = (state) => {
    setProgress(state);
  };
  const handleOnDuration = (duration) => {
    setDuration(formatSecondsToMinutes(duration));
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
      <NotesInput currentSeconds={progress.playedSeconds} />
    </Box>
  );
});

export default VideoComponent;
