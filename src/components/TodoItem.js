import React from 'react'
import './TodoItem.css'
import {Checkbox} from '@mui/material'
import { setCheck } from '../features/todoSlice'
import { useDispatch } from 'react-redux'


const TodoItem = ({name,done,id}) => {
    const dispatch=useDispatch()
    
    const handleCheck=(id)=>{
        dispatch(setCheck(id))
    }
  return (
    <div className='todoItem'>
        <Checkbox
        checked={done}
        color='primary'
        onChange={()=>handleCheck(id)}
        inputProps={{'aria-label':'secondary checkbox'}}
        />
        <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  )
}

export default TodoItem