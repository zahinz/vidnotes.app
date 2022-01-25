import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

// ThemeProvider
import { ThemeProvider } from "@mui/material/styles";
import {AppTheme} from './Components/Theme/Palette/Palette'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={AppTheme}>
    <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
