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
const TODAY = new Date(new Date().toLocaleDateString()).toISOString().slice(0, 10);
const NO_DEADLINE = "9999-12-31";

function EditableTodoList({ todos, updateTodo, removeTodo }) {

  const groupedTodosByDeadline = (todos)=> {
    const grouped = {};

    for (const todo of todos) {

        if (!grouped[todo.deadline]) {
          grouped[todo.deadline] = [];
        }
        grouped[todo.deadline].push(todo);

    }
    return grouped;
  }

  const sortedTodosByDeadline = Object.entries(groupedTodosByDeadline(todos)).sort((a, b) => {
    return new Date(a[0]) - new Date(b[0]);
  });

  function renderGroupedTodos() {
    return sortedTodosByDeadline.map((grouped) =>{
      const [deadline, todos] = grouped;

      const TodayOrNoDeadline = () => {
        if (deadline === TODAY) {
          return 'Today';
        }
        if (deadline === NO_DEADLINE) {
          return 'No Deadline';
        }
        return deadline
      }

      return (
         <div key={deadline}>
          <h3>{TodayOrNoDeadline()}</h3>
          <br/>
          {todos.map(todo => (
            <EditableTodo
              key={todo.id}
              todo={todo}
              updateTodo={updateTodo}
              removeTodo={removeTodo}
            />
          ))}
         </div>
      );

    })
  }

  return (
    <div>
      {renderGroupedTodos()}
    </div>
  );
}

export default EditableTodoList;
