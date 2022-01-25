import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import React from "react";

export default function AppContainer({ children, sx }) {
  return (
    <Box sx={sx}>
      <Container maxWidth="lg" sx={{ px: "1rem" }}>
        {children}
      </Container>
    </Box>
  );
}
