import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import AppContainer from "./Theme/Structure/AppContainer";

import React from "react";
import HeaderLinkInput from "./Static/HeaderLinkInput";

export default function Header() {
  return (
    <AppContainer
      sx={{
        borderBottom: 2,
        borderColor: "line.main",
      }}
    >
      <Box
        height={70}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <Box
          typography={"body"}
          fontSize={"1.8rem"}
          fontWeight={"bold"}
          color={"text.main"}
        >
          vidnotes
        </Box>
        <Box display={"flex"} columnGap={1}>
          <HeaderLinkInput />
          <Button variant="contained" disableElevation>
            Sign in
          </Button>
        </Box>
      </Box>
    </AppContainer>
  );
}
