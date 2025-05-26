import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - updateTodo(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, updateTodo, removeTodo }) {
  const [isEditing, setIsEditing] = useState(false);

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
          <Todo todo={todo} />
        </div>
      )}
    </div>
  );
}

export default EditableTodo;
