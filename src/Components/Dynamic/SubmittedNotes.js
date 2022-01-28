import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import { AppContext } from "../../AppContext";
import { downloadCsvFile } from "../Functions/Storages";
import NoteCard from "../Static/NoteCard";

export default function SubmittedNotes({ handleSecondsClick }) {
  const { submittedNotes, setSubmittedNotes, videoUrl } =
    useContext(AppContext);

  useEffect(() => {}, [submittedNotes]);

  return (
    <Box display={"flex"} rowGap={2} flexDirection={"column"} height={1}>
      <Box
        display={"flex"}
        columnGap={1}
        variant={"text"}
        width={1}
        justifyContent={"space-between"}
      >
        <Button
          disabled={!videoUrl ? true : false}
          onClick={() => downloadCsvFile(submittedNotes, videoUrl)}
          variant="contained"
          disableElevation
          startIcon={<SaveAltOutlinedIcon />}
          color="secondary"
          sx={{
            width: "70%",
            paddingY: 2,
          }}
        >
          Download notes
        </Button>
        <Button
          sx={{
            width: "30%",
          }}
          disabled={!videoUrl ? true : false}
          onClick={() => setSubmittedNotes([])}
        >
          Clear all
        </Button>
      </Box>

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
