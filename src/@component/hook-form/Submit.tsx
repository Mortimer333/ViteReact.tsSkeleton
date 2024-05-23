import React from 'react'
import Loading from "@component/Loading.tsx";

interface ISubmitProps {
  value: string;
  loading: boolean;
  replaceClass?: string;
}

const Submit: React.FC<ISubmitProps> = (
  {
    value,
    loading,
    replaceClass = null
  }
) => {
  const className = `mx-auto text-center text-xl max-w-[200px] bg-[--secondary] rounded-xl
        text-[--white] w-full block hover:brightness-125 relative`;
  return <span className={ replaceClass ?? className }>
    {loading && <Loading size={25} unit='px'/>}
    <input type="submit"
      value={value}
      className={"w-full block cursor-pointer py-2 " + (loading ? 'hidden' : '')}
      disabled={loading}/>
  </span>
};

export default Submit
