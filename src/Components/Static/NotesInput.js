import React, { useContext, useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { submitArrayNotes } from "../Functions/Storages";
import { AppContext } from "../../AppContext";

export default function NotesInput({ currentSeconds }) {
  const [notes, setNotes] = useState("");
  const [notesError, setNotesError] = useState(false);
  const { submittedNotes, setSubmittedNotes } = useContext(AppContext);

  // handlers
  const handleNotesSubmit = (e) => {
    //   validate empty input
    setNotesError(false);
    if (notes === "") {
      setNotesError(true);
    } else {
      console.log(currentSeconds, notes);
      setSubmittedNotes([
        ...submittedNotes,
        { time: currentSeconds, notes: notes },
      ]);
    }
    e.preventDefault();
  };

  const handleKeyDownSubmit = (e) => {
    if (e.keyCode === 13 && e.shiftKey) {
      handleNotesSubmit(e);
      e.preventDefault();
      setNotes("");
    }
  };

  return (
    <Box display={"flex"} flexDirection={"column"} rowGap={1}>
      <form noValidate autoComplete="off" onSubmit={handleNotesSubmit}>
        <TextField
          autoFocus
          placeholder="Press 'Shift' + 'Enter' to submit notes."
          onChange={(e) => setNotes(e.target.value)}
          fullWidth
          multiline
          rows={7}
          onKeyDown={handleKeyDownSubmit}
          value={notes}
          error={notesError}
          sx={{ backgroundColor: "#fff" }}
        />
      </form>
    </Box>
  );
}
