import { MathCalculation } from "./math-calculation";

describe("math-calculation test", () => {
  it("should add numbers", () => {
    const result = new MathCalculation().add(1, 2);

    expect(result).toBe(3);
  });

  it("should return 1 when pass 3 and 2 as parameter on subtract function", () => {
    const result = new MathCalculation().subtract(3, 2);
    expect(result).toBe(1);
  });

  it("should return 20 when pass 10 and 2 on multiply function", () => {
    const result = new MathCalculation().multiply(10, 2);

    expect(result).toBe(20);
  });

  it("should return 5 when pass 10 and 2 on divisor function", () => {
    const result = new MathCalculation().divide(10, 5);

    expect(result).toBe(2);
  });

  it("should throw a error when the divisor is 0", () => {
    expect(() => new MathCalculation().divide(10, 0)).toThrow();
  });

  it("should throw a error with 'Divisor can't be 0' message when the divisor is 0", () => {
    expect(() => new MathCalculation().divide(10, 0)).toThrow(
      "Divisor can't be 0"
    );
  });
});
