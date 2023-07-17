import React from 'react'
import LAc from './Logo.module.css'
import logo from '../../img/react.1024x912.png'

function Logo() {
  return (
    <a href='#'>
        <img src={logo} className={LAc.logo}/>
    </a>
  )
}

export default Logo
