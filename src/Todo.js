import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo }) {
  //TODO: handle case where todo is completed, add isCompleted prop
  // Add toggle function for completed todo and update in parent
  // add onClick event listener to toggle completed todo
  const { title, description, priority } = todo;
  return (
      <div className="Todo">
        <div><b>{ title }</b> <small>priority: { priority }</small></div>
        <div><small>{ description }</small></div>
      </div>
  );
}

export default Todo;
