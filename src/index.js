import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import GitHubProvider from "./context/context";

ReactDOM.render(
  <GitHubProvider>
    <App />
  </GitHubProvider>,
  document.getElementById("root")
);
