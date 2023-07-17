import React from 'react'
import LAc from './Navigation.module.css'

function Navigation() {
  return (
    <nav>
      <ul>
        <li className={[LAc.flexMarg, LAc.fzNav].join(' ')}>
          <a href='#'>Главная</a>
          <a href='#'>Форма</a>
          <a href='#'>Выбор данных</a>
        </li>
      </ul>
      </nav>
  )
}

export default Navigation
