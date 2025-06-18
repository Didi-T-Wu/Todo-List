import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, isCompleted, deadline }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/
function Todo({ todo }) {
  const { title, description, isCompleted } = todo;

  // Dynamically render line-through style based on isCompleted
  const toggleLineThroughStyle = () => {
    return isCompleted ? "line-through text-body-tertiary" : "none";
  }
  return (
    <div className="Todo">
      <div className = {`Todo-title ${toggleLineThroughStyle()}`}>{title}</div>
      <div className = {`Todo-description ${toggleLineThroughStyle()}`}>{description}</div>
    </div>
  );
}

export default Todo;
