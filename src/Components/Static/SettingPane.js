import React, { useContext, useEffect, useRef, useState } from "react";
import Box from "@mui/material/Box";
import Popper from "@mui/material/Popper";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Fade from "@mui/material/Fade";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SaveAltOutlinedIcon from "@mui/icons-material/SaveAltOutlined";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { AppContext } from "../../AppContext";
import { downloadCsvFile } from "../Functions/Storages";

export default function SettingPane() {
  const { videoUrl, submittedNotes, setSubmittedNotes } =
    useContext(AppContext);
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect((e) => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (isPaneOpen && ref.current && !ref.current.contains(e.target)) {
        setIsPaneOpen(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  });

  const ref = useRef("ref");

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setIsPaneOpen(!isPaneOpen);
  };
  return (
    <Box display={"flex"} alignItems={"center"}>
      <IconButton
        onClick={(e) => handleClick(e)}
        disabled={!videoUrl ? true : false}
      >
        <MoreVertIcon color="text.light" />
      </IconButton>
      <Popper open={isPaneOpen} anchorEl={anchorEl} placement="bottom-end">
        <Fade in={isPaneOpen}>
          <Box
            bgcolor={"#fff"}
            border={"2px solid"}
            borderColor={"line.main"}
            borderRadius={1}
            marginTop={1}
            paddingTop={1}
            paddingBottom={2}
            paddingX={2.5}
            ref={ref}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton alignItems={"center"} disabled>
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <InfoOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Software changelogs"
                    sx={{ color: "text.light" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  alignItems={"center"}
                  onClick={() => downloadCsvFile(submittedNotes, videoUrl)}
                  disabled={submittedNotes.length === 0}
                >
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    <SaveAltOutlinedIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Download notes"
                    sx={{ color: "text.light" }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem
                disablePadding
                sx={{
                  border: "2px solid",
                  borderColor: "primary.main",
                  borderRadius: 2,
                  mt: 1.5,
                }}
              >
                <ListItemButton
                  color="primary"
                  alignItems={"center"}
                  onClick={() => setSubmittedNotes([])}
                  disabled={submittedNotes.length === 0}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 40,
                      color: "primary.main",
                    }}
                  >
                    <DeleteOutlineIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Clear all"
                    sx={{ color: "primary.main" }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Fade>
      </Popper>
    </Box>
  );
}
