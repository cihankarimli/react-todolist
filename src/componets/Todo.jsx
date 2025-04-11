import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
function Todo({todo,removeTodo,openPage}) {
      const{id,content}=todo
    const onRemovetodo=()=>{
       removeTodo(id)
    }
  return (
    
   <>
   {openPage &&(
     <div style={{display:'flex', flexDirection:'row', width:'500px',alignItems:'center',justifyContent:'space-between',border:'1px solid gray', width:'100%',padding:'10px', marginTop:'10px'} }>
     <div>{content}</div>
     <div>
     <CiCircleRemove className='todo-icons' onClick={onRemovetodo} style={{cursor:'pointer'}}/>
   

     </div>
  </div>
   )}

   </>
  )
}

export default Todo