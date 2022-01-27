import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { AppContext } from "../../AppContext";
import { Button } from "@mui/material";

export default function HeaderLinkInput() {
  const { videoUrl, setVideoUrl } = useContext(AppContext);

  return (
    <Box>
      <TextField
        autoFocus={!videoUrl ? true : false}
        sx={{
          minWidth: 400,
        }}
        onChange={(e) => setVideoUrl(e.target.value)}
        defaultValue={videoUrl}
        placeholder="Video URL"
        size="small"
        hiddenLabel
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <VideocamOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
}
