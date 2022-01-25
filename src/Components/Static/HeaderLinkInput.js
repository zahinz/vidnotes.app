import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { AppContext } from "../../AppContext";

export default function HeaderLinkInput() {
  const { videoUrl, setVideoUrl } = useContext(AppContext);
  const [linkInput, setLinkInput] = useState("");

  const handleLinkSubmit = (e) => {
    e.preventDefault();
    setVideoUrl(linkInput);
  };
  return (
    <Box>
      <form noValidate autoComplete="off" onSubmit={handleLinkSubmit}>
        <TextField
          sx={{ minWidth: 400 }}
          onChange={(e) => setLinkInput(e.target.value)}
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
      </form>
    </Box>
  );
}
