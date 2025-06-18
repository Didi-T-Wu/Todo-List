import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

/** Modal Form for adding.
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

function ModalForm({ onSubmit, todo }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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
    setShow(false); // Close modal

  }

  function localeDateToISO(dateString) {
    const date = new Date(dateString);
    return date.toISOString().slice(0, 10);
  }

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="fs-6 w-100 shadow-sm">
       + Add New
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter task title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDescription">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter task description"
                name="description"
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formDeadline">
              <Form.Label>Deadline</Form.Label>
              <Form.Control
                 name="deadline"
                 type="date"
                 aria-label="Deadline"
                 placeholder="Deadline"
                 value={formData.deadline}
                 onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formPriority">
              <Form.Label>Priority</Form.Label>
              <Form.Select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
              >
                <option value={1}>High</option>
                <option value={2}>Medium</option>
                <option value={3}>Low</option>
              </Form.Select>
            </Form.Group>
            <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" type="submit" >
            Save Task
          </Button>
        </Modal.Footer>
          </Form>
        </Modal.Body>

      </Modal>
    </>
  );
}

export default ModalForm;