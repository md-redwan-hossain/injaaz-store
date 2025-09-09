export type Theme = "dark" | "light";

export interface FormField {
  field: string;
  label?: string;
  required: boolean;
  type: "text" | "number" | "password" | "email" | "select";
}
