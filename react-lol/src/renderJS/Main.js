import React, { useState } from 'react'
import Button from '../сomponents/UI-Elements/Button'
import Form from '../сomponents/Commmon-Components/Form'
import ViewData from '../сomponents/Commmon-Components/ViewData'

function Main() {

  // Данные
  const [formData, setFormData] = useState([])

  // Состояния
  const [form, setForm] = useState(true)
  const [data, setData] = useState(false)

  // Функции
  const addData = (newData) => {
    setFormData([...formData, newData]) 
  }

  return (
    <main>
      <seciton className='_container _flex main__seciton-1'>
        <Button onClick={() => setForm(!form)}>Форма</Button>
        <Button onClick={() => setData(!data)}>Данные</Button>
      </seciton>

      <section className='_container _flex _flex-center'>
        {
          form ? <Form add={addData}/> 
          : null
        }
        {
          data ? <ViewData data={formData}/> 
          : null
        }
      </section>
    </main>
  )
}

export default Main
