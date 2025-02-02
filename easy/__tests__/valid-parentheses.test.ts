import { isValid } from "../valid-parentheses";

describe("isValid", () => {
  it("should return true for an empty string", () => {
    expect(isValid("")).toBe(true);
  });

  it("should return true for valid parentheses", () => {
    expect(isValid("()")).toBe(true);
    expect(isValid("()[]{}")).toBe(true);
    expect(isValid("{[]}")).toBe(true);
    expect(isValid("({[]})")).toBe(true);
  });

  it("should return false for invalid parentheses", () => {
    expect(isValid("(]")).toBe(false);
    expect(isValid("([)]")).toBe(false);
    expect(isValid("{[}]")).toBe(false);
    expect(isValid("((())")).toBe(false);
  });

  it("should return false for a single opening bracket", () => {
    expect(isValid("(")).toBe(false);
  });
});
