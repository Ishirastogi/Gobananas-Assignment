import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { CssBaseline } from "@mui/material";

const container = document.getElementById("root");
const root = createRoot(container); // Create a root.

root.render(
  <React.StrictMode>
    {/* CssBaseline for consistent styling across browsers */}
    <CssBaseline />
    <App />
  </React.StrictMode>
);
