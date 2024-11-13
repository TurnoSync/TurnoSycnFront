import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@css/general/index.css";
import App from "@professionalC/App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
