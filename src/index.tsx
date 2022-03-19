import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "react-loading-skeleton/dist/skeleton.css";

import {
  ToastContainer,
  // toast
} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AppProviders from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer className="font-sans font-semibold" />
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById("hyphen-widget-app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
