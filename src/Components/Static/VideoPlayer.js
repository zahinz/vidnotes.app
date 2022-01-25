import React from "react";
import ReactPlayer from "react-player";
import AspectRatioBox from "./AspectRatioBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";

export default function VideoPlayer({ url, onProgress, onDuration }) {
  return (
    <AspectRatioBox ratio={16 / 9}>
      {url ? (
        <ReactPlayer
          url={url}
          height={"100%"}
          width={"100%"}
          onProgress={onProgress}
          onDuration={onDuration}
          controls
        />
      ) : (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Box
            display={"flex"}
            flexDirection={"column"}
            rowGap={2}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SentimentVeryDissatisfiedOutlinedIcon
              sx={{ fontSize: 80, color: "text.light" }}
            />
            <Typography color={"text.light"}>No video detected...</Typography>
          </Box>
        </Box>
      )}
    </AspectRatioBox>
  );
}
