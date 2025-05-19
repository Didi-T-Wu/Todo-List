import React, { useState } from "react";


/** Form for adding.
 *
 * Props:
 * - initialFormData
 * - handleSave: function to call in parent.
 *
 * State: formData { title, description, priority }
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */
const initialState = {
  title: "",
  description: "",
  priority: 1
};

function TodoForm({ handleSave, initialFormData = initialState, id }) {

  const [formData, setFormData] = useState(initialFormData);

  console.log("HERE IS OUR FORM DATA ===>", formData);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(currData => ({
      ...currData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    handleSave(formData);
    setFormData(initialFormData);
  }

  return (
    // className TodoForm
    <form className="NewTodoForm" onSubmit={handleSubmit}>

      <div className="mb-3">
        <label htmlFor={`newTodo-title-${id}`}>Title:</label>
        <input
          id={`newTodo-title-${id}`}
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
        />
      </div>

      <div className="mb-3">
        <label htmlFor={`newTodo-description-${id}`}>Description:</label>
        <textarea
          id={`newTodo-description-${id}`}
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>

      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor={`newTodo-priority-${id}`}
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id={`newTodo-priority-${id}`}
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>Ultra-Über</option>
            <option value={2}>Über</option>
            <option value={3}>Meh</option>
          </select>
        </div>
        <button className={`btn-primary rig btn btn-sm NewTodoForm-addBtn-${id}`}>
          Gø!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
