import React from 'react'
import Todo from './Todo'

function TodoList({todos, removeTodo}) {
  return (
    <div style={{width:'100%',marginTop:'50px', padding:'10px 0'}} > {todos && todos.map((todo)=>(
       <Todo key={todo.id} todo={todo} removeTodo={removeTodo}/>
    ))}
       
    </div>
  )
}

export default TodoList