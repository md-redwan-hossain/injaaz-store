import { useThemeContext } from "../hooks/useThemeContext";

export function Toolbar() {
  const theme = useThemeContext();

  return (
    <div style={{ background: theme === "light" ? "white" : "black" }}>
      <h1 style={{ color: theme === "light" ? "black" : "white" }}>I am a toolbar</h1>
    </div>
  );
}
