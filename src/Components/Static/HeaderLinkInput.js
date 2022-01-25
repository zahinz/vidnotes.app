import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";

export default function HeaderLinkInput() {
  const [videoLink, setVideoLink] = useState("");

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    window.location.reload();
    localStorage.setItem("videoLink", videoLink);
  };
  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={handleLinkSubmit}>
        <TextField
          onChange={(e) => setVideoLink(e.target.value)}
          defaultValue={localStorage.getItem("videoLink")}
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
      </form>
    </Box>
  );
}
