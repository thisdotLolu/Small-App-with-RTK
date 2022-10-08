import React from 'react';
import { useSelector } from 'react-redux';
// import { Counter } from './features/counter/Counter';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';
// import Input from './components/input';

function App() {
  const todoList = useSelector(state=>state.todos.todoList)
  return (
    <div className="App">
      {/* todo list       */}
      <div className='app_container'>
        <div className='app_todoContainer'>
        {
          todoList?.map((item)=>{
           return(
            <TodoItem
            name={item.item}
            done={item.done}
            id={item.id}
            />
           ) 
          })
        }
        </div>
        <Input/>
      </div>
      {/* done */}
      {/* input */}
    </div>
  );
}

export default App;
