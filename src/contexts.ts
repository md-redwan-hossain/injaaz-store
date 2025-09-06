import { createContext } from "react";
import type { Theme } from "./models";

export const ThemeContext = createContext<Theme | null>(null);
