import { type PropsWithChildren } from "react";
import { ThemeContext } from "../hooks/useThemeContext";

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeContext value="dark">{children}</ThemeContext>
    </>
  );
}
