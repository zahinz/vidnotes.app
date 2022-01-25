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
      main: "#2563eb",
      dark: "#1e40af",
      light: "#60a5fa",
      contrastText: "#fff",
    },
    // text color
    text: {
      main: "#18181b",
      light: "#52525b",
    },
    line: {
      main: "#e5e7eb",
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
