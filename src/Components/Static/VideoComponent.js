import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import React, { useContext, useEffect, useState } from "react";
import VideoPlayer from "./VideoPlayer";
import PushPinSharpIcon from "@mui/icons-material/PushPinSharp";

// function
import { formatSecondsToMinutes } from "../Functions/Time";
import NotesInput from "./NotesInput";

import { AppContext } from "../../AppContext";
import Button from "@mui/material/Button";

export default function VideoComponent() {
  // useContext
  const { videoUrl, submittedNotes, setSubmittedNotes } =
    useContext(AppContext);
  // state
  const [progress, setProgress] = useState({
    played: 0,
    playedSeconds: 0,
    loaded: 0,
    loadedSeconds: 0,
  });
  // return as object {played, playedSeconds, loaded, loadedSeconds}

  const [duration, setDuration] = useState(0);

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
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Typography color={"text.light"}>
          {`${formatSecondsToMinutes(progress.playedSeconds)} / ${duration}`}
        </Typography>
        <Button
          startIcon={<PushPinSharpIcon />}
          sx={{ color: "text.light" }}
          onClick={() =>
            setSubmittedNotes([
              ...submittedNotes,
              {
                time: formatSecondsToMinutes(progress.playedSeconds),
                notes: "Pinned",
              },
            ])
          }
        >
          Pin time
        </Button>
      </Box>
      <NotesInput
        currentSeconds={formatSecondsToMinutes(progress.playedSeconds)}
      />
    </Box>
  );
}
