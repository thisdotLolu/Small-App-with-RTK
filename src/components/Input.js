import React, { useState } from 'react'
import './Input.css'
import { useDispatch } from 'react-redux'
import { saveTodo } from '../features/todoSlice'


const Input = () => {
    const[input,setInput]=useState('')
    const dispatch=useDispatch()

    const addTodo=()=>{
        // console.log()

        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()
        }))
    }
  return (
    <div className='input'>
        
        <input
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        type='text'
        />
        <button onClick={addTodo}>Add</button>
    </div>
  )
}

export default Input;