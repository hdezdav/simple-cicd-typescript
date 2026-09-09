/**
 * Unit tests for subtract()
 * Loads the compiled subtract.js so window.subtract is available.
 */
declare global {
  interface Window {
    subtract: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches subtract to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./subtract.js");
});

describe("subtract", () => {
  describe("positive integers", () => {
    it("subtracts a smaller positive number from a larger positive number", () => {
      expect(window.subtract(5, 3)).toBe(2);
    });

    it("subtracts a larger positive number from a smaller positive number", () => {
      expect(window.subtract(3, 5)).toBe(-2);
    });
  });

  describe("cases with zero", () => {
    it("subtracts zero from a number", () => {
      expect(window.subtract(5, 0)).toBe(5);
    });

    it("subtracts a number from zero", () => {
      expect(window.subtract(0, 5)).toBe(-5);
    });

    it("returns 0 when both numbers are 0", () => {
      expect(window.subtract(0, 0)).toBe(0);
    });
  });

  describe("negative numbers", () => {
    it("subtracts two negative numbers", () => {
      expect(window.subtract(-5, -3)).toBe(-2);
    });

    it("subtracts a positive number from a negative number", () => {
      expect(window.subtract(-5, 3)).toBe(-8);
    });

    it("subtracts a negative number from a positive number", () => {
      expect(window.subtract(5, -3)).toBe(8);
    });
  });
});

export {};
