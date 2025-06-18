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

  const groupAndSortTodosByDeadline = (todos)=> {
    const grouped = {};

    for (const todo of todos) {
        if (!grouped[todo.deadline]) {
          grouped[todo.deadline] = [];
        }
        grouped[todo.deadline].push(todo);
    }

    for(const [deadline, todos] of Object.entries(grouped)) {
        // Sort todos by priority within each deadline group
        grouped[deadline]=   groupAndSortTodosByPriority(todos)
    }
    const sorted = Object.entries(grouped).sort((a, b) => {
      return new Date(a[0]) - new Date(b[0]);
    });
    return sorted;
  }

  const groupAndSortTodosByPriority = (todos) => {
    const grouped = {};
    const completed = '4' // Assuming '4' is the priority for completed todos
    const sortedTodos = []

    for (const todo of todos) {
      if (todo.isCompleted) {
        if(!grouped[completed]) {
          grouped[completed] = [];
        }
        grouped[completed].push(todo);
        continue; // Exit this iteration after adding completed todos
      }
      if (!grouped[todo.priority]) {
        grouped[todo.priority] = [];
      }
      grouped[todo.priority].push(todo);
    }

    let sorted = Object.entries(grouped).sort((a, b) => {
      return a[0] - b[0];
    });

    for(const items of sorted ) {
      sortedTodos.push(...items[1]);
    }
    return sortedTodos;
  }

  function getDeadlineStatus(deadline){

    const defaultDeadlineStatus ={
      date: deadline,
      status:deadline,
      label: deadline,
      color: "black"
    }

    if (deadline < TODAY) {
      return {...defaultDeadlineStatus,
        status: 'overdue',
        label: ' ⚠️ Overdue',
        color: 'red'};
    }
    if (deadline === TODAY) {
      return {...defaultDeadlineStatus,
        status: 'today',
        label: 'Today',
        color: 'black'};
    }
    if (deadline === NO_DEADLINE) {
      return {...defaultDeadlineStatus,
        status: 'no due date',
        label: 'No Deadline',
        color: 'black'};
    }
    return defaultDeadlineStatus
  }



  function renderGroupedTodos() {
    return groupAndSortTodosByDeadline(todos).map((grouped) =>{
      const [deadline, todos] = grouped;

      const renderDeadlineLabel = () => {
        const { label, color, date } = getDeadlineStatus(deadline);
        if (date < TODAY) {
          return <span style={{ color }}>{label} {date}</span>;
        }
        if (date === TODAY) {
          return <span style={{ color }}>{label} {date}</span>;
        }

        return <span style={{ color }}>{label}</span>;
      }

      return (
         <div key={deadline} style={{  "width": "90%" }} >
          <h4 className="mb-3 mt-5 border-bottom">{ renderDeadlineLabel()}</h4>
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
    <div className="overflow-scroll " style={{ maxHeight: "60vh" }}>
      {renderGroupedTodos()}
    </div>
  );
}

export default EditableTodoList;
