import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/App";
import reportWebVitals from "../src/reportWebVitals";
// import Login from "components/siteHelper/SiteLogin";
// import HomePage from "components/HomePage";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("page-top")
);

reportWebVitals();
