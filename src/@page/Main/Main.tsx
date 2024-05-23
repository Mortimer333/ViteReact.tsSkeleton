import React, { useEffect } from 'react'
import './Main.css'

const Main: React.FC = () => {

  useEffect(() => {
    document.title = 'Skeleton';
  }, []);

  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}
export default Main
