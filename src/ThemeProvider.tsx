import { type PropsWithChildren } from "react";
import { ThemeContext } from "./contexts";

export function ThemeProvider({ children }: PropsWithChildren) {
  return (
    <>
      <ThemeContext value="dark">{children}</ThemeContext>
    </>
  );
}
