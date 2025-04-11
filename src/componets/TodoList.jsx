import React, { useState } from "react";
import Todo from "./Todo";
import { useEffect } from "react";

function TodoList({ todos, removeTodo }) {
  const [openPage, setOpenPage] = useState(false);

  function openList() {
    setOpenPage(true);
  }
  function closeList() {
    setOpenPage(false);
  }
  return (
    <div style={{ width: "100%", marginTop: "50px", padding: "10px 0" }}>
      <div className="buttons">
        <button className="open-button" onClick={openList}>
          Open
        </button>
        <button className="closeButton" onClick={closeList}>
          {" "}
          Close
        </button>
      </div>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            openPage={openPage}
          />
        ))}
    </div>
  );
}

export default TodoList;
