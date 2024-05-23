import React, { useId } from 'react'
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@component/hook-form/ErrorMessage.tsx";

interface ITextareaProps {
  label: string;
  name: string;
  taClass?: string;
}

const Textarea: React.FC<ITextareaProps> = (
  {
    label,
    name,
    taClass = '',
  }
) => {
  const id = useId(),
    { register } = useFormContext()
  ;

  return <div className="w-full">
    <ErrorMessage name={name}/>
    <label className="block w-full bg-[--secondary] text-[--white] text-center py-2 rounded-t"
      htmlFor={id}>
      {label}
    </label>
    <textarea className={"p-2 box-border block resize-none w-full rounded-b " + taClass}
      {...register(name)}
      id={id}></textarea>
  </div>
};

export default Textarea
