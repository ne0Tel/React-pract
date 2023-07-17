import React from 'react'
import LAc from './ViewData.module.css'

function ViewData({data}) {

  return (
    <div className={[LAc.viewData, LAc.flexCol].join(' ')}>
        {data.map((d) => 
        <div>
          <div>Name: {d.nameData}</div>
          <div>Tel: {d.tel}</div>
          <div>Id: {d.id}</div>
        </div>
        )}
    </div>
  )
}

export default ViewData
