import { Toolbar } from "./Toolbar";
import { ThemeProvider } from "../providers/ThemeProvider";
import { ContactForm } from "./ContactForm";

export function App() {
  return (
    <ThemeProvider>
      <Toolbar />
      <ContactForm />
    </ThemeProvider>
  );
}
