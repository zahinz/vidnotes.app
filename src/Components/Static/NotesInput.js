import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { AppContext } from "../../AppContext";

export default function NotesInput({ currentSeconds }) {
  const [notes, setNotes] = useState("");
  const [notesError, setNotesError] = useState(false);
  const {
    videoUrl,
    submittedNotes,
    setSubmittedNotes,
    isAutoPause,
    setIsPlaying,
  } = useContext(AppContext);

  // handlers
  const handleNotesSubmit = (e) => {
    //   validate empty input
    setNotesError(false);
    if (notes === "") {
      setNotesError(true);
    } else {
      setSubmittedNotes([
        ...submittedNotes,
        { time: currentSeconds, notes: notes },
      ]);
    }
    setIsPlaying(true);
    e.preventDefault();
  };

  const handleKeyDownSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
      handleNotesSubmit(e);
      e.preventDefault();
      setNotes("");
    }
  };

  const handleInputChange = (e) => {
    setNotes(e);
    if (isAutoPause) {
      setIsPlaying(false);
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={1}>
      <form noValidate autoComplete="off" onSubmit={handleNotesSubmit}>
        <TextField
          disabled={!videoUrl ? true : false}
          autoFocus={videoUrl ? true : false}
          placeholder="Press 'Shift' + 'Enter' to submit notes."
          onChange={(e) => handleInputChange(e.target.value)}
          onBlur={() => setIsPlaying(true)}
          fullWidth
          multiline
          rows={6}
          onKeyDown={handleKeyDownSubmit}
          value={notes}
          error={notesError}
          sx={{ backgroundColor: "#fff" }}
        />
      </form>
    </Box>
  );
}
