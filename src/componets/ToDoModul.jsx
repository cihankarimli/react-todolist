import React from "react";

function ToDoModul({ openModul, closeModul, todo }) {
  const { content } = todo;
  return (
    <>
      {openModul && (
        <div className="modul">
          <div className="modul-border">
            <h2>Modul</h2>
            <p> {content}</p>
            <button className="modul-close" onClick={closeModul}>
              close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
export default ToDoModul;
