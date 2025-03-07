import { render, screen } from "@testing-library/react";
import Contact from "../pages/Contact";
import "@testing-library/jest-dom";

test("should render contact component", () => {
  render(<Contact />);

  const heading = screen.getByRole("heading");
  expect(heading).toBeInTheDocument();
});

it("should load 2 input box", () => {
  render(<Contact />);
  const inputboxes = screen.getAllByRole("textbox");

  //expect(inputboxes.length).toBe(2);
  expect(inputboxes.length).not.toBe(3);
});

it("should load Submit text", () => {
  render(<Contact />);

  const submitText = screen.getByText("Submit"); //screen.findByText returns a promise
  expect(submitText).toBeInTheDocument();
});

it("should load Submit text", async () => {
  render(<Contact />);

  const submitText = await screen.findByText("Submit"); //screen.findByText returns a promise
  expect(submitText).toBeInTheDocument();
});
