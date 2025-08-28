import { sum } from "./math-calculation/math-calculation";

test("adds 1 + 2 to equal 3", () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
});

it("should return true when I 2 == 2", () => {
  expect(2 === 2).toBeTruthy();
});
