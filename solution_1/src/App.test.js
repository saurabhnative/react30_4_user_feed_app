import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, getByTestId} from "@testing-library/react";
import App from "./App.js";
import Header from "./components/Header";
it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
it("App loads with initial title as empty string", () => {
  const { container } = render(<Header />);
  const title = getByTestId(container, "title");
  expect(title.textContent).toBe("");
});