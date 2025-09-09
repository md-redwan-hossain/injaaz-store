import { useThemeContext } from "../hooks/useThemeContext";

export function Toolbar() {
  const theme = useThemeContext();

  return (
    // <div style={{ background: theme === "light" ? "white" : "black" }}>
    //   <h1 style={{ color: theme === "light" ? "black" : "white" }}>I am a toolbar</h1>
    // </div>

    <div>
      <h1 className="text-3xl font-bold underline">I am a toolbar</h1>
    </div>
  );
}
