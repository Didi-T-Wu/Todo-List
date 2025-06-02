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
  const { priority } = todo;

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

  return (
    <div className="EditableTodo">
      {isEditing ? (
        <TodoForm
          onSubmit={updateTodoAndToggleEdit}
          todo={todo}
        />
      ) : (
        <div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className='EditableTodo-toggle btn-link btn btn-sm'
              onClick={toggleEdit}
            >
              Edit
            </button>
            <button
              className='EditableTodo-delBtn btn-link btn btn-sm text-danger'
              onClick={handleDelete}
            >
              Del
            </button>
          </div>
          <input type='checkbox' checked={todo.isCompleted} onChange={updateTodoAndToggleCompleted} />
          <Todo todo={todo}/>
          <div className={`priority-badge ${getPriorityClass()}`}>
        {renderPriority()}
      </div>
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
