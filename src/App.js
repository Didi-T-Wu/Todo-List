import React from "react";
import TodoApp from "./TodoApp";
import Footer from "./Footer";
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
    <main className="container-fluid">
      <header className="text-center py-3">
        <h1>My Todos</h1>
        <p>Manage your todos efficiently!</p>
      </header>
      <section className="container mt-2">
        <TodoApp initialTodos={[]} />
      </section>
      <section className="container-fluid pt-4 pb-1">
        <div className="container">
          <Footer />
        </div>
      </section>
    </main>
  );
}

export default App;
