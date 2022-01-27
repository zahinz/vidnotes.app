import React, { useRef } from "react";

// Material UI
import Box from "@mui/material/Box";

import AppContainer from "../Components/Theme/Structure/AppContainer";

import VideoComponent from "../Components/Static/VideoComponent";
import SubmittedNotes from "../Components/Dynamic/SubmittedNotes";

export default function Home() {
  const player = useRef();

  const handleSecondsClick = (second) => {
    player.current.seekTo(second, "seconds");
    console.log(player.current);
  };

  return (
    <Box bgcolor={"#f3f4f6"} height={{ xs: "auto", md: "calc(100vh - 70px)" }}>
      <AppContainer sx={{ paddingTop: "1.5rem" }}>
        <Box
          display={"flex"}
          columnGap={2}
          rowGap={{ xs: 2, md: 0 }}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
        >
          <Box width={{ md: 2 / 3 }}>
            <VideoComponent ref={player} />
          </Box>
          <Box width={{ md: 1 / 3 }}>
            <SubmittedNotes handleSecondsClick={handleSecondsClick} />
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
