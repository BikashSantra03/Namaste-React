import { Provider } from "react-redux";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import appStore from "../../utils/store/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

describe("Header Component Test Cases", () => {
  test("should load Header component with a Login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    // const loginbtn = screen.getByText("Login");
    const loginbtn = screen.getByRole("button", { name: "Login" });

    //Assertion
    expect(loginbtn).toBeInTheDocument();
  });

  test("should change Login button to logout button onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );

    const loginbtn = screen.getByRole("button", { name: "Login" });
    fireEvent.click(loginbtn);

    const logoutbtn = screen.getByRole("button", { name: "LogOut" });

    //Assertion
    expect(logoutbtn).toBeInTheDocument();
  });
});
