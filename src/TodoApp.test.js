import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoApp from "./TodoApp";

describe("productiv app", function () {


  // it("renders without crashing", function () {
  //   render(<TodoApp initialTodos={[
  //     {
  //       id: 1,
  //       title: "Code!",
  //       description: "Write some code",
  //       priority: 2,
  //     }
  //   ]} />);
  // });

  // it("it can add new todo", function () {
  //   const { queryByText, getByLabelText, debug, container } = render(<TodoApp initialTodos={[
  //     {
  //       id: 1,
  //       title: "Code!",
  //       description: "Write some code",
  //       priority: 2,
  //     }
  //   ]} />);

  //   debug(container);

  //   expect(queryByText("make dinner")).not.toBeInTheDocument();

  //   const titleInput = getByLabelText("Title:");
  //   const descriptionInput = getByLabelText("Description:");
  //   const priorityInput = getByLabelText("Priority:");
  //   const submitBtn = queryByText("Gø!");

  //   fireEvent.change(titleInput, { target: { value: 'make dinner' } });
  //   fireEvent.change(descriptionInput, { target: { value: 'make big dinner' } });
  //   fireEvent.change(priorityInput, { target: { value: '3' } });
  //   fireEvent.click(submitBtn);

  //   expect(queryByText("make dinner")).toBeInTheDocument();

  // });


  it("it can update a todo", function () {
    const { queryByText, debug, container } = render(<TodoApp initialTodos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 1,
      },
      {
        id: 2,
        title: "Make dinner!",
        description: "make big dinner",
        priority: 2,
      }
    ]} />);

    // debug(container);

    expect(queryByText("Make dinner!")).toBeInTheDocument();

    // TODO: click edit button
    const editBtn = container.querySelector('.EditableTodo-toggle-2');
    fireEvent.click(editBtn);
    const titleInput = container.querySelector('#newTodo-title-2');

    const descriptionInput = container.querySelector("#newTodo-description-2");
    const priorityInput = container.querySelector("#newTodo-priority-2");
    const submitBtn = container.querySelector(".NewTodoForm-addBtn-2");


    console.log('titleInput=', titleInput);
    debug(container);
    console.log('editBtn=', editBtn);

    fireEvent.change(titleInput, { target: { value: 'make lunch' } });
    fireEvent.change(descriptionInput, { target: { value: 'make big lunch' } });
    fireEvent.change(priorityInput, { target: { value: 3 } });
    fireEvent.click(submitBtn);

    expect(queryByText("make lunch")).toBeInTheDocument();
    expect(queryByText("make big lunch")).toBeInTheDocument();
    expect(queryByText("(priority: 3)")).toBeInTheDocument();

    expect(queryByText("Make dinner!")).not.toBeInTheDocument();


  });


  //.EditableTodo-toggle:nth-of-type(2)
  // it("contains expected title", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Prøductïv")).toBeInTheDocument();
  // });

  // it("rendered quotes app", function () {
  //   const result = render(<App />);
  //   expect(result.queryByText("Click here for an inspirational quøte!")).toBeInTheDocument();
  // });
});