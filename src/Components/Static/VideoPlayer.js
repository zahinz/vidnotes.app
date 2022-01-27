import React, { forwardRef } from "react";
import ReactPlayer from "react-player";
import AspectRatioBox from "./AspectRatioBox";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SentimentVeryDissatisfiedOutlinedIcon from "@mui/icons-material/SentimentVeryDissatisfiedOutlined";

const VideoPlayer = forwardRef(({ url, onProgress, onDuration }, ref) => {
  return (
    <AspectRatioBox ratio={16 / 9}>
      {url ? (
        <ReactPlayer
          ref={ref}
          url={url}
          height={"100%"}
          width={"100%"}
          onProgress={onProgress}
          onDuration={onDuration}
          playing={true}
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
});

export default VideoPlayer;
