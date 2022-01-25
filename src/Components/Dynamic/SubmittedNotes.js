import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export default function SubmittedNotes() {
  return (
    <Box display={"flex"} rowGap={2} flexDirection={"column"}>
      <Button variant="outlined" fullWidth startIcon={<DeleteOutlineIcon />}>
        Clear notes
      </Button>
      <Typography color={"text.main"}>Submitted notes</Typography>
    </Box>
  );
}
