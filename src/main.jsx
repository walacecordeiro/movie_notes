import React from "react";
import ReactDOM from "react-dom/client";

import { ThemeProvider } from "styled-components";

import GlobalStyleComponent from "./styles/global";
import theme from "./styles/theme";

import { LoggedContext } from "./loggedContext";
import { Routes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyleComponent />
      <LoggedContext.Provider
        value={{ name: "Walace", email: "walace@gmail.com" }}
      >
        <Routes />
      </LoggedContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
