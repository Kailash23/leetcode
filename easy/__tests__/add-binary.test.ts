import { addBinary } from "../add-binary";

describe("addBinary", () => {
  it("should handle basic binary addition", () => {
    expect(addBinary("11", "1")).toBe("100");
    expect(addBinary("1010", "1011")).toBe("10101");
  });

  it("should handle strings of different lengths", () => {
    expect(addBinary("1", "111")).toBe("1000");
    expect(addBinary("1111", "1")).toBe("10000");
  });

  it("should handle strings with only zeros", () => {
    expect(addBinary("0", "0")).toBe("0");
    expect(addBinary("000", "000")).toBe("000");
  });

  it("should handle strings with only ones", () => {
    expect(addBinary("1", "1")).toBe("10");
    expect(addBinary("111", "111")).toBe("1110");
  });

  it("should handle empty strings", () => {
    expect(addBinary("", "1")).toBe("1");
    expect(addBinary("0", "")).toBe("0");
    expect(addBinary("", "")).toBe("");
  });

  it("should handle large binary numbers", () => {
    expect(addBinary("11111111", "11111111")).toBe("111111110");
    expect(addBinary("10000000", "10000000")).toBe("100000000");
  });

  it("should handle carry over through multiple positions", () => {
    expect(addBinary("1111", "1111")).toBe("11110");
    expect(addBinary("11111", "1")).toBe("100000");
  });
});
