import type { FormEvent } from "react";
import type { UseFormHandleSubmit, FieldValues } from "react-hook-form";

export function useFormSubmitWithPreventDefault<T extends FieldValues>(
  handleSubmit: UseFormHandleSubmit<T>,
  onSubmit: (data: T) => void | Promise<void>
) {
  return (e: FormEvent) => {
    e.preventDefault();
    void handleSubmit(onSubmit)(e);
  };
}
