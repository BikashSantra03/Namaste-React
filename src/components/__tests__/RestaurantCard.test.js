import { render, screen } from "@testing-library/react";
import RestaurantCard from "../cards/RestaurantCard";
import MockDtata from "../../utils/testingMockData.json";
import "@testing-library/jest-dom";

test("should render RestaurantCard Component with proops", () => {
  render(<RestaurantCard resData={MockDtata} />);

  const resName = screen.getByText("La Pino'z Pizza".toUpperCase());

  expect(resName).toBeInTheDocument();
});
