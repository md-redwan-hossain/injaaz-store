import { createBrowserRouter } from "react-router";
import { App } from "./components/App.tsx";
import { StrictMode } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <StrictMode>
        <App />
      </StrictMode>
    )
  }
]);
