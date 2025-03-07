import { sum } from "../sum";


test("This is sum of two numbers", () => {
  const result = sum(9, 2);

  //Assertion
  expect(result).toBe(11);
});
