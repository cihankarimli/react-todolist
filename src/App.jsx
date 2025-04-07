import { useState } from 'react'
import './App.css'
import TodoCreate from './componets/TodoCreate'
import TodoList from './componets/TodoList'

function App() {

const[todos,setTodos]=useState([])
const createNewtodo=(newTodo=>{
  setTodos([...todos,newTodo])
})
const removeTodo=((todoId)=>{
   setTodos([...todos.filter((todo)=>todo.id!==todoId)])

})
  return (
    <>
    <div className='main'>
    <TodoCreate  createTodo= {createNewtodo}/>
    <TodoList todos={todos} removeTodo={removeTodo}/>
    </div>
   
    </>
  )
}

export default App
