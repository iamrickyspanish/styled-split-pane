import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

import App from "./App";
// import App from "./App2";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
