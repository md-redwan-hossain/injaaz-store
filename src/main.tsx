import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.scss";
import { router } from "./router";
import { StrictMode } from "react";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
}
