import React from "react";
import EditableTodo from "./EditableTodo";

/** Show list of editable todos.
 *
 * Props:
 * - todos: array of [ todo, ... ]
 * - updateTodo(): fn to call to update a todo
 * - removeTodo(): fn to call to remove a todo
 *
 * TodoApp -> EditableTodoList -> [ EditableTodo, ... ]
 */

function EditableTodoList({ todos, updateTodo, removeTodo }) {

  function renderTodos() {
    return todos.map(
      todo =>
        <EditableTodo
          key={todo.id}
          todo={todo}
          updateTodo={updateTodo}
          removeTodo={removeTodo}
        />
    );
  }

  return (
    <div>
      {renderTodos()}
    </div>
  );
}

export default EditableTodoList;
