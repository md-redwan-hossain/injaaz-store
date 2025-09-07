import { Toolbar } from "./Toolbar";
import { ThemeProvider } from "../providers/ThemeProvider";

export function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}
