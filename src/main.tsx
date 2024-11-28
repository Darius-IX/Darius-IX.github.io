import { BrowserRouter } from "react-router-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { OverlayScrollbars, ClickScrollPlugin } from "overlayscrollbars";
import "overlayscrollbars/overlayscrollbars.css";
import App from "./App.tsx";
import "./index.css";
// import { OverlayScrollbarsComponent } from "overlayscrollbars-react";

OverlayScrollbars.plugin(ClickScrollPlugin);

createRoot(document.getElementById("root")!).render(
  // <OverlayScrollbarsComponent>
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>
  // </OverlayScrollbarsComponent>
);
