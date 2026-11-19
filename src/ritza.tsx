import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RitzaPage from "./pages/RitzaPage";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RitzaPage />
  </StrictMode>
);
