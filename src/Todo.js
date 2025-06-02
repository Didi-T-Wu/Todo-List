import React from "react";

/** Simple presentation component for a todo.
 *
 * Props:
 * - todo: like { id, title, description, priority, isCompleted, deadline }
 *
 * { EditableTodo, TopTodo } -> Todo
 **/
function Todo({ todo }) {
  const { title, description, priority, isCompleted } = todo;
  const renderPriority = () => {
    switch (priority) {
      case '1':
        return "High";
      case '2':
        return "Medium";
      case '3':
        return "Low";
      default:
        return "Unknown";
    }
  }
  const getPriorityClass = () => {
    switch(priority) {
      case '1':
        return "priority-high";
      case '2':
        return "priority-medium";
      case '3':
        return "priority-low";
      default:
        return "priority-unknown";
    }
  }
  return (
    <div >
      <div >
        <div
          style={{
            textDecoration: isCompleted ? "line-through" : "none",
            cursor: "pointer",
          }}
        >
          {title}
        </div>
        <small>{description}</small>
      </div>
      <div className={`priority-badge ${getPriorityClass()}`}>
        {renderPriority()}
      </div>
    </div>
  );
}

export default Todo;
