import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, isCompleted, deadline }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/
// TODO: make this checkbox toggle the isCompleted state
function Todo({ todo, toggleComplete }) {
  const { title, description, priority, isCompleted, deadline } = todo;
  const renderPriority = () => {
    switch (priority) {
      case 1:
        return "High";
      case 2:
        return "Medium";
      case 3:
        return "Low";
      default:
        return "Unknown";
    }
  }

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
        <small>Priority: {renderPriority()}</small>
      </div>
      <div>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default Todo;
