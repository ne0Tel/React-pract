import React from 'react'
import LAc from './Button.module.css';

function Button({children, ...props}) {
  return (
    <button {...props} className={LAc.btn}>
      {children}
    </button>
  )
}

export default Button
