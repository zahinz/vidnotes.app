import { createTheme } from "@mui/material/styles";

export const AppTheme = createTheme({
  palette: {
    // primary rose color
    primary: {
      main: "#b91c1c",
      dark: "#7f1d1d",
      light: "#dc2626",
      contrastText: "#fff",
    },
    // secondary color
    secondary: {
      main: "#1e40af",
      dark: "#1e3a8a",
      light: "#2563eb",
      contrastText: "#fff",
    },
    // text color
    text: {
      main: "#18181b",
      light: "#52525b",
    },
    line: {
      main: "#E7EBF0",
    },
  },

  components: {
    //   button
    MuiButton: {
      // alter default prop
      defaultProps: {
        disableRipple: true,
      },
    },
  },
});
