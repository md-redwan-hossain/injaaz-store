import { ThemeProvider } from "./ThemeProvider";
import { Toolbar } from "./Toolbar";

export function App() {
  return (
    <ThemeProvider>
      <Toolbar />
    </ThemeProvider>
  );
}
