import React, { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import TopTodo from "./TopTodo";
import EditableTodoList from "./EditableTodoList";
import ModalForm from "./ModalForm";
import QuoteApp from "./QuoteApp";
import TodoForToday from "./TodoForToday";

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
// TODO: live-clock instead of static date
const NO_DEADLINE = "9999-12-31"; // Placeholder for no deadline
const TODAY = new Date(new Date().toLocaleDateString()).toISOString().slice(0, 10);

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
    // Ensure deadline is set to a default value if not provided
    if (!formData.deadline) {
      formData.deadline = NO_DEADLINE; // Set to no deadline if not provided
    }
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
    <main className="TodoApp d-flex flex-wrap" >

        <div className="col-md-6 d-flex flex-column justify-content-between p-2" style={{ height: "70vh" }}>
          <h3 className="border-bottom">All To-Dos</h3>
          <br/>
          <div >
              {todos.length > 0 ? (
                <div>
                  <EditableTodoList
                    todos={todos}
                    updateTodo={updateTodo}
                    removeTodo={removeTodo}
                  />
                </div>
              ) : (
                <h5 className="text-muted">You have no todos.</h5>
              )}
          </div>
          <div >
            <ModalForm onSubmit={createTodo} />
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-between p-2" style={{ height: "70vh" }}>
             <div>
              <h3 className="border-bottom">Top To-Do</h3>
              {todos.length === 0 ? (
                <h5 className="text-muted">You have no to-dos.</h5>
              ) : (
                <TopTodo todos={todos} />
              )}
              </div>
              <div>
                <h3 className="border-bottom">Today's To-Dos</h3>
                <TodoForToday todos={todos} />
              </div>
              <div>
                <QuoteApp />
              </div>

        </div>
    </main>
  );
}

export default TodoApp;