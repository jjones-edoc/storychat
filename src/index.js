import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ProjContextProvider } from "./context/ProjContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProjContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProjContextProvider>
);
