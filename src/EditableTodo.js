import React, { useState } from "react";
import Todo from "./Todo";
import TodoForm from "./TodoForm";

/** Show editable todo item.
 *
 * Props
 * - todo
 * - update(): fn to call to update a todo
 * - remove(): fn to call to remove a todo
 *
 * EditableTodoList -> EditableTodo -> { Todo, TodoForm }
 */

function EditableTodo({ todo, update, remove }) {
  const [isEditing, setIsEditing] = useState(false);
  const { id } = todo;

  /** Toggle if this is being edited */
  function toggleEdit() {

    /* setIsEditing(edit => !edit);
    */
    setIsEditing(true);
  }

  /** Call remove fn passed to this. */
  function handleDelete() {
    remove(id);
  }

  /** Edit form saved; toggle isEditing and update in ancestor. */
  function handleSave(formData) {
    setIsEditing(false);
    update(formData);
  }

  return (
    <div className="EditableTodo">

      {isEditing ?
        < TodoForm handleSave={handleSave} initialFormData={todo} id={id} />
        :
        (< div className="mb-3">
          <div className="float-end text-sm-end">
            <button
              className={`EditableTodo-toggle-${id} btn-link btn btn-sm`}
              onClick={toggleEdit}>
              Edit
            </button>
            <button
              className={`EditableTodo-delBtn-${id} btn-link btn btn-sm text-danger`}
              onClick={handleDelete}>
              Del
            </button>
          </div>
          <Todo todo={todo} />
        </div>)
      }
    </div >
  );
}

export default EditableTodo;
