import React from "react";
import { render } from "@testing-library/react";
import TopTodo from "./TopTodo";

describe("TopTodo", function () {
  it("renders without crashing", function () {
    render(<TopTodo todos={[
      {id: 3, title: "eat!", description: "eat!", priority: 2}
  ]} />);
  });

  it("matches snapshot", function () {
  const { container } = render(<TopTodo todos={[
    {id: 4, title:"eat!", description: "eat!", priority: 2}
  ]}/>);

  expect(container).toMatchSnapshot();
});

  it("renders the correct top todo from list of todos", function(){
    const { queryByText } = render(<TopTodo todos={[
      {
        id: 1,
        title: "Code!",
        description: "Write some code",
        priority: 2,
      },
      {
        id: 2,
        title: "Make dinner",
        description: "Cook something healthy",
        priority: 1,
      }
    ]}/>);

    expect(queryByText("(priority: 1)")).toBeInTheDocument();
    expect(queryByText("Make dinner")).toBeInTheDocument();
  });

  });

