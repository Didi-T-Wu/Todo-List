import React from "react";
import TodoApp from "./TodoApp";
import "bootstrap/dist/css/bootstrap.css";
import "./styles/style.scss";


/** Site application.
 *
 *  Props: none
 *
 *  State: none
 *
 * App -> TodoApp
 **/
function App() {
  return (
    <main className="container-fluid bg-secondary min-vh-100 d-flex flex-column">
      <header className="text-center py-3 text-light">
        <h1>My Todos</h1>
        <p>Manage your todos efficiently!</p>
      </header>
      <div className="container mb-2 bg-white rounded shadow-lg p-3">
        <TodoApp initialTodos={[]} />
      </div>
    </main>
  );
}

export default App;
