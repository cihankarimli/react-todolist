import React, { useState } from "react";
import { CiCircleRemove } from "react-icons/ci";
import { IoEyeOff } from "react-icons/io5";
import ToDoModul from "./ToDoModul";
function Todo({ todo, removeTodo, openPage }) {
  const [openModul, setOpenModul] = useState(null);
  const { id, content } = todo;
  const onRemovetodo = () => {
    removeTodo(id);
  };
  const openingModul = () => {
    setOpenModul(todo);
  };
  const closeModul = () => {
    setOpenModul(null);
  };
  return (
    <>
      {openPage && (
        <div
          className="todo"
          style={{
            display: "flex",
            flexDirection: "row",
            width: "500px",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid gray",
            width: "100%",
            padding: "10px",
            marginTop: "10px",
          }}
        >
          <div>{content}</div>
          <div>
            <CiCircleRemove
              className="todo-delete"
              onClick={onRemovetodo}
              style={{ cursor: "pointer" }}
            />
          </div>
          <IoEyeOff className="open-modul-button" onClick={openingModul} />
        </div>
      )}
      <ToDoModul closeModul={closeModul} openModul={openModul} todo={todo} />
    </>
  );
}

export default Todo;
