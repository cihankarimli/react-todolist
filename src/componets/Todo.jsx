import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
function Todo({todo}) {
  return (
    <div style={{display:'flex', flexDirection:'row', width:'500px',alignItems:'center',justifyContent:'space-between',border:'1px solid gray', width:'100%'} }>
       <div>{todo.content}</div>
       <div>
       <CiCircleRemove className='todo-icons'  style={{cursor:'pointer'}}/>

       </div>

    </div>
  )
}

export default Todo