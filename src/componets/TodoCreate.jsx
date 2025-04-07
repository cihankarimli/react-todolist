import React, { useState } from 'react'
import '../App.css'; 
function TodoCreate({createTodo}) {
       const[todo,setTodo]=useState('')
        const inputClear=()=>{
              setTodo('')
        }
       const createNewtodo=()=>{
              if(!todo) return;
              const request={
                content : todo
              } 

              createTodo(request);
              inputClear();
              
       }

  return (
    <div>

          <div className='TodoCreate'>
       <input
       value={todo}
       onChange={e=>setTodo(e.target.value)} 
       type="text" placeholder='Write...'/>
       <button onClick={createNewtodo}>Save</button>
    </div>
    </div>
  )
}

export default TodoCreate
