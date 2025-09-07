import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router";
import "./index.scss";
import { router } from "./router";

const root = document.getElementById("root");

if (root) {
  createRoot(root).render(<RouterProvider router={router} />);
}
