import React from "react";

// Material UI
import Box from "@mui/material/Box";

import AppContainer from "../Components/Theme/Structure/AppContainer";

import VideoComponent from "../Components/Static/VideoComponent";
import SubmittedNotes from "../Components/Dynamic/SubmittedNotes";

export default function Home() {
  return (
    <Box bgcolor={"#f3f4f6"} height={"100vh"}>
      <AppContainer sx={{ paddingTop: "2rem" }}>
        <Box
          display={"flex"}
          columnGap={2}
          rowGap={{ xs: 2, md: 0 }}
          flexDirection={{
            xs: "column",
            md: "row",
          }}
          height={"calc(100vh - 150px)"}
        >
          <Box width={{ md: 2 / 3 }}>
            <VideoComponent />
          </Box>
          <Box width={{ md: 1 / 3 }}>
            <SubmittedNotes />
          </Box>
        </Box>
      </AppContainer>
    </Box>
  );
}
