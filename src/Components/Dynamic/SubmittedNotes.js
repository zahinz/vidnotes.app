import React, { useContext } from "react";
import Box from "@mui/material/Box";

import { AppContext } from "../../AppContext";

import NoteCard from "../Static/NoteCard";

export default function SubmittedNotes({ handleSecondsClick }) {
  const { submittedNotes } = useContext(AppContext);

  return (
    <Box display={"flex"} rowGap={2} flexDirection={"column"} height={1}>
      <Box
        height={{ xs: "auto", md: "calc(100vh - 200px)" }}
        paddingBottom={0}
        overflow={"scroll"}
        display={"flex"}
        rowGap={1.5}
        flexDirection={"column"}
        sx={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {submittedNotes
          .map((list, index) => (
            <NoteCard
              index={index}
              list={list}
              handleSecondsClick={handleSecondsClick}
            />
          ))
          .reverse()}
      </Box>
    </Box>
  );
}
