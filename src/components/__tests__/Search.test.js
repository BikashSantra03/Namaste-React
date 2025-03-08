import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import SWIGGY_MOCK_DATA from "../../utils/SwiggyMockData.json";
import { act } from "react";
import { BrowserRouter } from "react-router";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(SWIGGY_MOCK_DATA),
  });
});

test("should search Res list for PIZZA text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const CardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(CardsBeforeSearch.length).toBe(7);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "PIZZA" } });
  fireEvent.click(searchBtn);

  //now screen should load 3 card having PIZZA
  const CardsAfterSearch = screen.getAllByTestId("resCard");

  expect(CardsAfterSearch.length).toBe(3);
});

test("should show Top rated Restaurants list", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const CardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(CardsBeforeSearch.length).toBe(7);

  const searchBtn = screen.getByRole("button", {
    name: "Top Rated Restaurants",
  });

  fireEvent.click(searchBtn);

  //now screen should load 2 card having star>4.3
  const CardsAfterSearch = screen.getAllByTestId("resCard");

  expect(CardsAfterSearch.length).toBe(3);
});
