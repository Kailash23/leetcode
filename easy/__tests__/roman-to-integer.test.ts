import { romanToInt } from "../roman-to-integer";

describe("romanToInt", () => {
  it("should convert basic roman numerals", () => {
    expect(romanToInt("III")).toBe(3);
    expect(romanToInt("LVIII")).toBe(58);
  });

  it("should handle subtractive combinations", () => {
    expect(romanToInt("MCMXCIV")).toBe(1994);
    expect(romanToInt("IX")).toBe(9);
    expect(romanToInt("XL")).toBe(40);
    expect(romanToInt("IV")).toBe(4);
    expect(romanToInt("CM")).toBe(900);
  });

  // New test cases:
  it("should handle empty string", () => {
    expect(romanToInt("")).toBe(0);
  });

  it("should convert 'CDXLIV' to 444", () => {
    expect(romanToInt("CDXLIV")).toBe(444);
  });
});
