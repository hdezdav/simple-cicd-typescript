/**
 * Unit tests for multiply()
 * Loads the compiled multiply.js so window.multiply is available (same as in the browser).
 */
declare global {
  interface Window {
    multiply: (a: number, b: number) => number;
  }
}

beforeAll(() => {
  // Load the built script that attaches multiply to window (non-module)
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require("./multiply.js");
});

describe("multiply", () => {
  describe("positive integers", () => {
    it("multiplies two positive numbers", () => {
      expect(window.multiply(2, 3)).toBe(6);
    });
  });

  describe("cases with zero", () => {
    it("multiplies a positive number by zero", () => {
      expect(window.multiply(5, 0)).toBe(0);
    });

    it("multiplies zero by a positive number", () => {
      expect(window.multiply(0, 5)).toBe(0);
    });

    it("returns 0 when both are 0", () => {
      expect(window.multiply(0, 0)).toBe(0);
    });
  });

  describe("negative numbers", () => {
    it("multiplies a negative number and a positive number", () => {
      expect(window.multiply(-2, 3)).toBe(-6);
    });

    it("multiplies a positive number and a negative number", () => {
      expect(window.multiply(2, -3)).toBe(-6);
    });

    it("multiplies two negative numbers", () => {
      expect(window.multiply(-2, -3)).toBe(6);
    });
  });
});

export {};
