import type { FormEvent } from "react";
import type { UseFormHandleSubmit, FieldValues } from "react-hook-form";

export function useFormSubmit<T extends FieldValues>(
  handleSubmit: UseFormHandleSubmit<T>,
  onSubmit: (data: T) => void | Promise<void>,
  preventDefault = true
) {
  return (e: FormEvent) => {
    if (preventDefault) {
      e.preventDefault();
    }
    void handleSubmit(onSubmit)(e);
  };
}
