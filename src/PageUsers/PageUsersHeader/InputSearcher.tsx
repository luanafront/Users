import React from "react";
import './style.css';
interface InputSearcherProps {
  label: string
}


const InputSearcher = ({label}: InputSearcherProps) => {
  return <input type="text" className='inputSearcher' placeholder={label}/>
}

export default InputSearcher
