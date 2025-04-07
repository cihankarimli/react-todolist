import React from 'react'
import Todo from './Todo'

function TodoList({todos}) {
  return (
    <div style={{width:'100%',marginTop:'50px', padding:'10px 0'}} > {todos && todos.map((todo)=>(
       <Todo todo={todo}/>
    ))}
       
    </div>
  )
}

export default TodoList