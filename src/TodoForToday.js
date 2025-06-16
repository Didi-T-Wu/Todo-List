import React from "react";

import Todo from "./Todo";


/** Shows the today's todos.
 *
 * Props: - todos
 *
 * State :none
 *
 * TodoApp -> TodoForToday
 */

function  TodoForToday({ todos }) {
  // lowest-priority # is the highest priority
  // earliest deadline is the highest priority
  function findTodoForToday(todos) {
    if (todos.length === 0) return null;

    // Filter out completed todos
    const incompleteTodos = todos.filter(todo => !todo.isCompleted);

    if (incompleteTodos.length === 0) return null;

    // Find the incomplete todos for today
    const today = new Date(new Date().toLocaleDateString()).toISOString().slice(0, 10);
    return incompleteTodos.filter(todo => {
      return todo.deadline === today;
    });
  }

  const todoForToday = findTodoForToday(todos);
  if ( !todoForToday || todoForToday.length === 0 ) {
    return <div className="TopTodo">No active todos.</div>;
  }

  const renderTodoForToday = () => {

    return todoForToday.map(todo => (
      <div className="me-3 mt-3 mb-3 p-3 bg-warning-subtle rounded shadow">
        <Todo key={todo.id} todo={todo} />
      </div>

    ));
  }


  return (
    <div>{renderTodoForToday()}</div>

  );
}

export default  TodoForToday;