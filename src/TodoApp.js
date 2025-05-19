import React, { useState } from "react";
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
// TODO: set default todos to []
function TodoApp({ initialTodos }) {
  const [todos, setTodos] = useState(initialTodos);

  console.log("HERE ARE OUR TODOS ===> ", todos);

  /** add a new todo to list */
  function create(newTodo) {
    newTodo.priority = Number(newTodo.priority);

    let newTD = { ...newTodo, id: uuid() };

    setTodos(currTodos => [...currTodos, newTD]);
  }

  /** update a todo with updatedTodo */
  function update(updatedTodo) {
    // make a copy of the todos
    const todosCopy = todos.map(todo => ({ ...todo }));
    console.log('in TodoAPP update updatedTodo=', updatedTodo);
    // maybe ternary
    const updatedTodos = todosCopy.map(todo => {
      if (todo.id === updatedTodo.id) {
        return { ...todo, ...updatedTodo };
      } else {
        return { ...todo };
      }
    });

    setTodos(updatedTodos);
  }

  /** delete a todo by id */
  function remove(id) {
    setTodos(currTodos => currTodos.filter(currTodo => currTodo.id !== id));
  }

  return (
    <main className="TodoApp">
      <div className="row">

        <div className="col-md-6">
          {todos.length !== 0
            ? <EditableTodoList
              todos={todos}
              update={update}
              remove={remove} />
            : <span className="text-muted">You have no todos.</span>
          }
        </div>


        <div className="col-md-6">
          {todos.length !== 0 &&
            <section className="mb-4">
              <h3>Top Todo</h3>
              <TopTodo todos={todos} />
            </section>
          }
          <section>
            <h3 className="mb-3">Add Nü</h3>
            <TodoForm handleSave={create} />
          </section>
        </div>

      </div>
    </main>
  );
}

export default TodoApp;