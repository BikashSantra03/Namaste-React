import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../cards/RestaurantMenu";
import ResItemsMockData from "../../utils/ResItemsMockData.json";
import { Provider } from "react-redux";
import appStore from "../../utils/store/appStore";
import Header from "../Header";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import CartPage from "../pages/CartPage";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(ResItemsMockData),
  });
});

test("should add items to the Cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
          <CartPage />
        </Provider>
      </BrowserRouter>
    )
  );

  const accorduanHeader = screen.getByText("Recommended (3)"); //confirmed accordian is loaded
  fireEvent.click(accorduanHeader); //clicked accordian Header

  const resitems = screen.getAllByTestId("resitems"); //confirmed restaurant foods are loaded in accordian body
  expect(resitems.length).toBe(3); // confirmed 3 food items in recomended section

  const addBtns = screen.getAllByRole("button", { name: "ADD" });
  expect(addBtns.length).toBe(3); // confirmed ADD buttons for each food items loaded

  fireEvent.click(addBtns[0]); // clickd ADD button of first Food Item

  const span = screen.getByTestId("numberOfItemsInCart"); // confirmed Cart button and span tag loaded in Header
  expect(span.textContent).toBe("1"); // confirmed 1 food item is added to cart

  {
    /*fireEvent.click(addBtns[1]);
  expect(span.textContent).toBe("1");   // now gives error because expect 2 items in the cart
  */
  }

  //Checking Items really loaded in the Cart pages or not
  const totalItemsinCartPage = screen.getByTestId("totalItems"); // confirmed Paragraph in Cart page is loaded
  expect(totalItemsinCartPage.textContent).toBe("Total Items: 1"); // confirmed total items in the cart page
});
