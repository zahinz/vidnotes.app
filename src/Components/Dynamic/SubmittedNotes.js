import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AppContext } from "../../AppContext";
import { downloadCsvFile } from "../Functions/Storages";

export default function SubmittedNotes() {
  const { submittedNotes, setSubmittedNotes, videoUrl } =
    useContext(AppContext);
  return (
    <Box display={"flex"} rowGap={2} flexDirection={"column"} height={1}>
      <Box display={"flex"} columnGap={1} variant={"text"}>
        <Button
          onClick={() => downloadCsvFile(submittedNotes, videoUrl)}
          variant="contained"
          disableElevation
          fullWidth
          startIcon={<SaveAltOutlinedIcon />}
          size="large"
          color="secondary"
        >
          Download notes
        </Button>
        <Button onClick={() => setSubmittedNotes([])}>
          <DeleteOutlinedIcon /> Delete
        </Button>
      </Box>

      <Box
        height={9 / 10}
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
        {submittedNotes.map((list, index) => (
          <Box
            bgcolor={"white"}
            borderRadius={1}
            border={"1px solid"}
            borderColor={"line.main"}
            padding={2}
          >
            <Typography fontSize={14} color={"text.light"} marginBottom={1}>
              {list.time}
            </Typography>
            <Typography fontSize={16} color={"text.main"}>
              {list.notes}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
