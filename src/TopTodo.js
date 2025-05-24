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
  let top = todos.reduce(
    (acc, cur) =>
      cur.priority < acc.priority ? cur : acc, todos[0]
  );

  return (
    <div>
      <Todo todo={top} />
    </div>
  );
}

export default TopTodo;