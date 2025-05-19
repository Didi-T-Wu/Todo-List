import React from "react";
import { render } from "@testing-library/react";
import Todo from "./Todo";


describe("Todo", function () {
  it("renders without crashing", function () {
    render(<Todo todo={
      {id: 3, title: "eat!", description: "eat!", priority: 2}
  } />);
  });

  it("matches snapshot", function () {
  const { container } = render(<Todo todo={
    {id: 4, title:"eat!", description: "eat!", priority: 2}
  }/>);

  expect(container).toMatchSnapshot();
});

  it("properly renders a todo", function(){

    const { queryByText, container } = render(<Todo todo={
      {id: 3, title: "eat!", description: "eat some food!", priority: 2}
    } />);

    expect(queryByText("(priority: 2)")).toBeInTheDocument();
    expect(queryByText("eat some food!")).toBeInTheDocument();

    expect(container).toContainHTML(`<div><div class="Todo"><div><b>eat!</b> <small>(priority: 2)</small>`
    + `</div><div><small>eat some food!</small></div></div></div>`);
  })
});
