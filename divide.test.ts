/**
 * Unit tests for divide()
 * Loads the compiled divide.js so window.divide is available (same as in the browser).
 */
declare global {
  interface Window {
    divide: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches divide to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./divide.js");
});

describe("divide", () => {
  describe("positive integers", () => {
    it("divides two positive numbers", () => {
      expect(window.divide(6, 3)).toBe(2);
    });

    it("divides numbers resulting in a decimal", () => {
      expect(window.divide(5, 2)).toBe(2.5);
    });
  });

  describe("cases with zero", () => {
    it("divides zero by a positive number", () => {
      expect(window.divide(0, 2)).toBe(0);
    });
  });

  describe("negative numbers", () => {
    it("divides a negative number by a positive number", () => {
      expect(window.divide(-6, 3)).toBe(-2);
    });

    it("divides a positive number by a negative number", () => {
      expect(window.divide(6, -3)).toBe(-2);
    });

    it("divides two negative numbers", () => {
      expect(window.divide(-6, -3)).toBe(2);
    });
  });

  describe("division by zero", () => {
    it("throws an error when dividing a number by zero", () => {
      expect(() => window.divide(2, 0)).toThrow("Division by zero");
    });

    it("throws an error when dividing zero by zero", () => {
      expect(() => window.divide(0, 0)).toThrow("Division by zero");
    });
  });
});

export {};
