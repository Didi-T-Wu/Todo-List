import React from "react";
import { render, fireEvent } from "@testing-library/react";
import TodoForm from "./TodoForm";

function mockSave(todo) {
  expect(todo).toEqual({
    title: "code",
    description: "code more today",
    priority: 2
  });
}

describe("Todo", function () {
  it("renders without crashing", function () {
    render(<TodoForm />);
  });

  it("matches snapshot", function () {
    const { container } = render(<TodoForm />);

    expect(container).toMatchSnapshot();
  });

  it("handles form submission on save", function () {
    const { queryByText, getByLabelText } = render(<TodoForm handleSave={(mockSave)} initialFormData={{
      title: "don't code!",
      description: "code more today",
      priority: 2
    }
    } />);

    const titleInput = getByLabelText('Title:');
    const submitBtn = queryByText('Gø!');
    fireEvent.change(titleInput, { target: { value: 'code' } });
    fireEvent.click(submitBtn);

    expect.assertions(1); //do after you type into title field and after you press save button, proves that your mockSave assertion has fired

  });

  //give initial data and function for save
});