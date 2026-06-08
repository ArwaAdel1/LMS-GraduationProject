import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@/i18n/i18n"; // initialize i18next before first render
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
