import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";
import { Router } from "react-router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
