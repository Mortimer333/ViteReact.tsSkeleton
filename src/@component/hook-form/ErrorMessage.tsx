import React from 'react'
import { useFormContext } from "react-hook-form";

interface IErrorMessageProps {
  name: string;
}

const ErrorMessage: React.FC<IErrorMessageProps> = (
  {
    name
  }
) => {
  const { formState: { errors } } = useFormContext();
  console.log(errors[name])
  return <>
    {errors[name]?.message && (
      <p className="text-red-800">{String(errors[name]?.message)}</p>
    )}
    {Object.values(errors[name]?.types ?? []).map((error: string) => <p
      className="text-red-800">{error}
    </p>)}
  </>
};

export default ErrorMessage
