import React, {useState} from 'react'
import LAc from './Form.module.css'

import InputT from '../UI-Elements/InputT'
import Button from '../UI-Elements/Button'

function Form({add}) {

  const [data, setData] = useState({
    nameData: '',
    tel: '',
    id: ''
  })

  const addData = (e) =>{
    e.preventDefault();

    const newData = {
      ...data
    }
    add(newData)
    setData({nameData:'', tel:'', id:''})
  }

  return (
    <form action='#' method="post" name="form" autocomplete="off" className={LAc.form}>
    <div className={LAc.flexCol}>
      <div className={LAc.flexRow}>
        <label>Name</label>
        <InputT
        value={data.nameData}
        onChange= {e => setData({...data, nameData: e.target.value})}
        type='text'
        placeholder='name'
        />
      </div>

      <div className={LAc.flexRow}>
        <label>Tel</label>
        <InputT
        value={data.tel}
        onChange= {e => setData({...data, tel: e.target.value})}
        type='text'
        placeholder='tel'
        />
      </div>

      <div className={LAc.flexRow}>
        <label>Id</label>
        <InputT
        value={data.id}
        onChange= {e => setData({...data, id: e.target.value})}
        type='text'
        placeholder='id'
        />
      </div>

      <div className={LAc.flexRow}>
        <Button onClick={addData}>Добавить данные</Button>
        <Button>Удалить человека</Button>
      </div>
    </div>
  </form>
  )
}

export default Form
