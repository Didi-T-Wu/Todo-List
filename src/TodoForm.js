import React, { useState } from "react";


/** Form for adding.
 *
 * Props:
 * - todo: todo object (optional)
 * - handleSave: function to call in parent.
 *
 * State: formData { title, description, priority }
 *
 * { TodoApp, EditableTodo } -> TodoForm
 */

// TODO: gather all date methods together

function TodoForm({ onSubmit, todo }) {

  const initialFormData = {
    title: todo? todo.title : "",
    description: todo? todo.description : "",
    priority: todo? todo.priority : "1", // Default to high priority
    deadline: todo? todo.deadline :"",
  };

  const [formData, setFormData] = useState(initialFormData);

  /** Update form input. */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(formData => ({
      ...formData,
      [name]: value,
    }));
  }

  /** Call parent function and clear form. */
  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit(formData);
    setFormData(initialFormData);

  }

  function localeDateToISO(dateString) {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
  }

  return (
    <form className="NewTodoForm" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor='newTodo-title'>Title:</label>
        <input
          id={'newTodo-title'}
          name="title"
          className="form-control"
          placeholder="Title"
          onChange={handleChange}
          value={formData.title}
          aria-label="Title"
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor='newTodo-description'>Description:</label>
        <textarea
          id='newTodo-description'
          name="description"
          className="form-control"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          aria-label="Description"
        />
      </div>
      <div className=" mb-3 w-75 d-flex justify-content-between">
          <label htmlFor='newTodo-deadline'
            className="d-inline-flex">Deadline:&nbsp;&nbsp;
          </label>
          <input id='newTodo-deadline'
            name="deadline"
            type="date"
            aria-label="Deadline"
            placeholder="Deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          />
        </div>
      <div className="mb-3 d-flex justify-content-between">
        <div className="w-75 d-flex justify-content-between">
          <label htmlFor='newTodo-priority'
            className="d-inline-flex">Priority:&nbsp;&nbsp;
          </label>
          <select id='newTodo-priority'
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            className="form-control form-control-sm d-inline-flex"
          >
            <option value={1}>High</option>
            <option value={2}>Medium</option>
            <option value={3}>Low</option>
          </select>
        </div>
        <button className='btn-primary rig btn btn-sm NewTodoForm-addBtn'>
          Go!
        </button>
      </div>

    </form>
  );
}

export default TodoForm;
