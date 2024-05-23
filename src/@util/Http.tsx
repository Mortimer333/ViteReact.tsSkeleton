import { ApiError } from "@type/http"
import { UseFormReturn, MultipleFieldErrors, FieldValues, Path } from "react-hook-form";

export function applyErrors<T extends FieldValues> (
  errors: ApiError|string[],
  form: UseFormReturn<T>,
  name: Path<T>|null = null,
): void {
  const { setError } = form;
  if (Array.isArray(errors) && name) {
    const messages: MultipleFieldErrors = {};
    errors.forEach((error, i) => {
      messages['server' + String(i)] = error;
    });
    setError(name, {
      types: messages,
    });
    return;
  }

  Object.keys(errors).forEach((fieldName: string) => {
    applyErrors((errors as ApiError)[fieldName], form, fieldName as Path<T>)
  })
}
