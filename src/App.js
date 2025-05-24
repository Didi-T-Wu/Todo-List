import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

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
    <main className="App">
      <header className="container-fluid pt-4 pb-1">
        <div className="container">
          <h1>My Todos</h1>
        </div>
      </header>

      <section className="container mt-4">
        <TodoApp initialTodos={[]} />
        <Footer />
      </section>
    </main>
  );
}

export default App;
