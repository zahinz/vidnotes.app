import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ThemeProvider
import { ThemeProvider } from "@mui/material/styles";
import { AppTheme } from "./Components/Theme/Palette/Palette";
import Provider from "./AppContext";

ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <ThemeProvider theme={AppTheme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
