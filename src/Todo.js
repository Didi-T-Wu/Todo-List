import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, isCompleted }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/

function Todo({ todo, toggleComplete }) {
  const { title, description, priority, isCompleted } = todo;

  return (
    <div className="Todo">
      <div>
        <div
          onClick={toggleComplete}
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          <b>{title}</b>
        </div>
        <small>Priority: {priority}</small>
      </div>
      <div>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Todo;
``