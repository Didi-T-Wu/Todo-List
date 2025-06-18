import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - updateTodo(): fn to call to update a todo
 * - removeTodo(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, updateTodo, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const { priority, isCompleted } = todo;

  /** Toggle if this is being edited */
  function toggleEdit() {
    setIsEditing(isEditing => !isEditing);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    removeTodo(todo.id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function updateTodoAndToggleEdit(formData) {
    const updatedTodo = {
      ...todo,
      ...formData
    };
    updateTodo(updatedTodo);
    toggleEdit();
  }

  /** toggle isCompleted and update in ancestor */
  const updateTodoAndToggleCompleted = () => {
    const updatedTodo = {
      ...todo,
      isCompleted:!todo.isCompleted
    };
    updateTodo(updatedTodo);

  }
  // Dynamically render priority and apply corresponding color
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

  const toggleGrayOutStyle= () => {
    return isCompleted ? "opacity-50" : "";
  }

  return (
    <div className="EditableTodo">
      {isEditing ? (
        <TodoForm
          onSubmit={updateTodoAndToggleEdit}
          todo={todo}
        />
      ) : (
        <div className={`editable-todo-item  ${toggleGrayOutStyle()}`}>
          <div className="top-side">
              <input
                    className="editable-todo-checkbox"
                    type='checkbox'
                    checked={todo.isCompleted}
                    onChange={updateTodoAndToggleCompleted}
              />
              <Todo todo={todo}/>
          </div>
          <div className="bottom-side">
              <div className={`priority-badge ${getPriorityClass()}`}>{renderPriority()}</div>
              <div className="editable-todo-buttons">
                  <button
                    className='EditableTodo-toggle'
                    onClick={toggleEdit}
                  >
                    Edit
                  </button>
                  <button
                    className='EditableTodo-delBtn'
                    onClick={handleDelete}
                  >
                    Del
                  </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
