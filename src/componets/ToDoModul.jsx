import React from "react";

function ToDoModul({ openModul, closeModul, removeTodo, todo }) {
  const { content, id } = todo;
  function onRemovetodo() {
    removeTodo(id);
  }

  return (
    <>
      {openModul && (
        <div className="modul">
          <div className="modul-border">
            <h2>Modul</h2>
            <p> {content}</p>
            <div className="modul-buttons">
              <button className="modul-close" onClick={closeModul}>
                close
              </button>
              <button onClick={onRemovetodo} className="remove-todo">
                remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default ToDoModul;
