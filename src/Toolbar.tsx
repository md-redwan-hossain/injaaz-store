import { use } from "react";
import { ThemeContext } from "./contexts";

export function Toolbar() {
  const theme = use(ThemeContext);

  return (
    <div style={{ background: theme === "light" ? "white" : "black" }}>
      <h1 style={{ color: theme === "light" ? "black" : "white" }}>I am a toolbar</h1>
    </div>
  );
}
