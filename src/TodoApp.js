import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import TodoForm from "./TodoForm";

/** App for managing a todo list.
 *
 * Props:
 * - initialTodos: possible array of [ todo, ... ]
 *
 * State:
 * - todos: array of [ todo, ... ]
 *
 * App -> TodoApp -> { TodoForm, EditableTodoList }
 */
function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : initialTodos;
  });

  useEffect(() => {
    // Save todos to localStorage whenever they change
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  , [todos]);

  /** add a new todo to list */
  function createTodo(formData) {
    setTodos(currTodos => [...currTodos, { ...formData, id: uuid(), isCompleted: false }]);

  }

  /** update a todo with updatedTodo */
  function updateTodo(updatedTodo) {
    setTodos(currTodos => currTodos.map(todo => {
      if (todo.id === updatedTodo.id) {
        return { ...todo, ...updatedTodo };
      }
      return todo;
    }));
  }

  /** delete a todo by id */
  function removeTodo(id) {
    setTodos(currTodos => currTodos.filter(currTodo => currTodo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length > 0 ? (
            <EditableTodoList
              todos={todos}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ) : (
            <span className="text-muted">You have no todos.</span>
          )}
        </div>

        <div className="col-md-6">
          {todos.length > 0 && (
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          )}
          <section>
            <h3 className="mb-3">Add New</h3>
            <TodoForm onSubmit={createTodo} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;