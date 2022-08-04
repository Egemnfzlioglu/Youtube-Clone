import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.css";
import { YoutubeProvider } from "./context/Context";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
    <YoutubeProvider>
      <App />
    </YoutubeProvider>
  // </React.StrictMode>
);
