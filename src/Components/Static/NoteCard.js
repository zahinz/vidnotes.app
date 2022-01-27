import React, { useContext, useState } from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

// function
import { formatSecondsToMinutes } from "../Functions/Time";
import { AppContext } from "../../AppContext";

export default function NoteCard({ index, list, handleSecondsClick }) {
  const { submittedNotes, setSubmittedNotes } = useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const handleDelete = (index) => {
    let items = submittedNotes;
    items.splice(index, 1);
    setSubmittedNotes(items);
    console.log(submittedNotes);
  };

  const handleChange = (value, index) => {
    let items = submittedNotes;
    let item = items[index];
    item.notes = value;
    items[index] = item;
    setSubmittedNotes(items);
  };
  return (
    <Box
      position={"relative"}
      key={index}
      bgcolor={"white"}
      borderRadius={1}
      border={"1px solid"}
      borderColor={"line.main"}
    >
      <Box display={"flex"} flexDirection={"column"} rowGap={1} padding={2}>
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
        <Input
          width="auto"
          variant="standard"
          fontSize={16}
          multiline
          defaultValue={list.notes}
          onBlur={() => setIsEdit(false)}
          InputProps={{
            disableUnderline: !isEdit ? true : false,
            readOnly: !isEdit ? true : false,
          }}
          onChange={(e) => handleChange(e.target.value, index)}
          sx={{ padding: 0, border: "none" }}
        />
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        rowGap={0.5}
        position={"absolute"}
        height={1}
        width={"auto"}
        right={0}
        top={0}
        boxSizing={"border-box"}
        bgcolor={"primary.light"}
        sx={{
          transition: "all 100ms ease-in",
          width: 50,
          opacity: 0,
          padding: 0,
          "&:hover": { width: 60, padding: 2, opacity: 1 },
        }}
      >
        <IconButton
          size="small"
          disableRipple
          onClick={() => setIsEdit(!isEdit)}
        >
          <ModeEditIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
        <IconButton
          size="small"
          disableRipple
          onClick={() => handleDelete(index)}
        >
          <DeleteIcon fontSize="small" sx={{ color: "white" }} />
        </IconButton>
      </Box>
    </Box>
  );
}
