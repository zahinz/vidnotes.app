import React, { useContext } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { AppContext } from "../../AppContext";
import { downloadCsvFile } from "../Functions/Storages";

// function
import { formatSecondsToMinutes } from "../Functions/Time";

export default function SubmittedNotes({ handleSecondsClick }) {
  const { submittedNotes, setSubmittedNotes, videoUrl } =
    useContext(AppContext);
  return (
    <Box display={"flex"} rowGap={2} flexDirection={"column"} height={1}>
      <Box display={"flex"} columnGap={1} variant={"text"}>
        <Button
          disabled={!videoUrl ? true : false}
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
        <Button
          disabled={!videoUrl ? true : false}
          onClick={() => setSubmittedNotes([])}
        >
          <DeleteOutlinedIcon /> Delete
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
        {submittedNotes.map((list, index) => (
          <Box
            key={index}
            bgcolor={"white"}
            borderRadius={1}
            border={"1px solid"}
            borderColor={"line.main"}
            display={"flex"}
            flexDirection={"column"}
            rowGap={1}
            padding={2}
          >
            <Link
              fontSize={14}
              underline="hover"
              color={"text.light"}
              sx={{ cursor: "pointer" }}
              onClick={() => {
                handleSecondsClick(list.time);
              }}
            >
              {formatSecondsToMinutes(list.time)}
            </Link>
            <Typography fontSize={16} color={"text.main"}>
              {list.notes}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
