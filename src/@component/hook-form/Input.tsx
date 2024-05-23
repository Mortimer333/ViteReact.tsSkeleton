import React, { useId } from 'react'
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@component/hook-form/ErrorMessage.tsx";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'password' | 'hidden';
  conClass?: string;
}

const Input: React.FC<IInputProps> = (
  {
    label,
    name,
    placeholder = '',
    type = 'text',
    conClass = ''
  }
) => {
  const id = useId(),
    { register } = useFormContext()
  ;

  return <div className={"w-full " + conClass}>
    <ErrorMessage name={name}/>
    <label
      className="inline-flex items-center justify-center w-[100px] rounded-l-xl text-[--white] bg-[--secondary]
        py-2 align-top text-md uppercase"
      htmlFor={id}>
      {label}
    </label>
    <input className="inline-block px-4 py-2 rounded-r-xl w-[calc(100%_-_100px)] box-border"
      {...register(name)}
      id={id}
      type={type}
      placeholder={placeholder} />
  </div>
};

export default Input
