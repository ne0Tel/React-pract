import React from 'react'
import LAc from './InputT.module.css';

function Input({...props}) {
  return (
    <input {...props} className={LAc.inputT}/>
  )
}

export default Input
