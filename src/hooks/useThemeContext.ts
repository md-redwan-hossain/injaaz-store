import { createContext, use } from "react";
import type { Theme } from "../shared/shared-models";

export const ThemeContext = createContext<Theme | null>(null);

export function useThemeContext() {
  const theme = use(ThemeContext);
  if (!theme) {
    throw new Error("Context is out of scope");
  }
  return theme;
}
