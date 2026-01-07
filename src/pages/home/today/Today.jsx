import React from 'react'
import './today.scss'
import { Add } from '@mui/icons-material'
const Today = () => {
  return (
    <div className='today'>
      <p className="title">Today</p>
      <ul>
        <li style={{border:"1px solid #e6e6e6"}}>
            <Add/>
            <span style={{marginLeft: "10px"}}>Add New Task</span>
        </li>
        <li>
            <input type="checkbox" id="" />
            <label htmlFor="" >
                Finish your Backend project</label>
        </li>
        <li>
            <input type="checkbox" id="" />
            <label htmlFor="" >
                Finish your Backend project</label>
        </li>
        <li>
            <input type="checkbox" id="" />
            <label htmlFor="" >
                Finish your Backend project</label>
        </li>
        <li>
            <input type="checkbox" id="" />
            <label htmlFor="" >
                Finish your Backend project</label>
        </li>
      </ul>
    </div>
  )
}

export default Today
