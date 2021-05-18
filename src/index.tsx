import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import { Helmet } from "react-helmet";
import ReactMapboxFactory from "react-mapbox-gl/lib/map";

ReactDOM.render(
  <React.Fragment>
    <Helmet>
      <meta name="description" content="Somsekhar Dash Personal Portfolio" />
    </Helmet>
    <App />
  </React.Fragment>,
  document.getElementById("page-top")
);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js")
      .then((registration) => {
        console.log("SW registered: ", registration);
      })
      .catch((registrationError) => {
        console.log("SW registration failed: ", registrationError);
      });
  });
}
