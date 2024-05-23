import React, { useId } from 'react'
import { useFormContext } from "react-hook-form";
import ErrorMessage from "@component/hook-form/ErrorMessage.tsx";

interface IMultiSelectProps {
  label: string,
  name: string;
  options: string[][];
  selectClass?: string;
}

const MultiSelect: React.FC<IMultiSelectProps> = (
  {
    label,
    name,
    options,
    selectClass = '',
  }
) => {
  const id = useId(),
    { register } = useFormContext()
  ;
  return <div className="w-full">
    <ErrorMessage name={name}/>
    <label className="block bg-[--secondary] text-[--white] text-center rounded-t py-2"
      htmlFor={id}>
      {label}
    </label>
    <select className={"block w-full rounded-b " + selectClass}
      {...register(name)}
      multiple
      id={id}>
      {options.map((option: string[], i) =>
        <option key={i} value={option[0]} className="text-center px-4 py-2">
          {option[1]}
        </option>
      )}
    </select>
  </div>
};

export default MultiSelect
