import React from "react";
import { render, fireEvent } from "@testing-library/react";
import EditableTodo from "./EditableTodo";


it("can update existing todo", function () {
  const { queryByText, getByLabelText, container } = render(<EditableTodo todo={[
    {
      id: 2,
      title: "Code again!",
      description: "write some code",
      priority: 3,
    }
  ]} />);

  expect(queryByText("write some code")).toBeInTheDocument();

  const editBtn = container.querySelector(".EditableTodo-toggle");
  const descriptionInput = getByLabelText("Description:");
  const submitBtn = queryByText("Gø!");

  fireEvent.click(editBtn);
  fireEvent.change(descriptionInput, { target: { value: 'write all the code you can' } });
  fireEvent.click(submitBtn);

  expect(queryByText("write some code")).not.toBeInTheDocument();
  expect(queryByText("write all the code you can")).toBeInTheDocument();

});

