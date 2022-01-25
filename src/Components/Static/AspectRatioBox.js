import * as React from "react";
import Box from "@mui/system/Box";

const AspectRatioBox = ({ children, ratio = 1 }) => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "& > *": { height: "100%", width: "100%" },
        }}
      >
        {children}
      </Box>
      <Box sx={{ paddingBottom: (1 / ratio) * 100 + "%" }} />
    </Box>
  );
};

export default AspectRatioBox;
