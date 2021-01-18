import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import GitHubProvider from "./context/context";

ReactDOM.render(
  <Auth0Provider
    domain="mcperera.auth0.com"
    clientId="so5wj89zjBXc61YUlJ2Y3HxMCWx7ji6I"
    redirectUri={window.location.origin}
    cacheLocation="localstorage">
    <GitHubProvider>
      <App />
    </GitHubProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
