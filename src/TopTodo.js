import React from "react";

import Todo from "./Todo";


/** Shows the top todo.
 *
 * Props: - todos
 *
 * State :none
 *
 * TodoApp -> TopTodo
 */

function TopTodo({ todos }) {
  // lowest-priority # is the highest priority
  // earliest deadline is the highest priority
  function findTopTodo(todos) {
    if (todos.length === 0) return null;

    // Filter out completed todos
    const incompleteTodos = todos.filter(todo => !todo.isCompleted);

    if (incompleteTodos.length === 0) return null;

    // Find the todo with the highest priority (lowest priority number)
    return incompleteTodos.reduce((highestPriorityTodo, currentTodo) => {
      const isEarlierDeadline = new Date(currentTodo.deadline) <= new Date(highestPriorityTodo.deadline);
      const isHigherPriority = currentTodo.priority <= highestPriorityTodo.priority;

      return isEarlierDeadline && isHigherPriority
      ? currentTodo
      : highestPriorityTodo;
    });

  }

  const topTodo = findTopTodo(todos);
  if (!topTodo) {
    return <div className="TopTodo">No active todos.</div>;
  }


  return (
    <div>
      <Todo todo={topTodo}/>
    </div>
  );
}

export default TopTodo;