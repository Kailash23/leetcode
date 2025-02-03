import { lengthOfLastWord } from "../length-of-last-word";

describe("lengthOfLastWord", () => {
  it("should handle basic cases", () => {
    expect(lengthOfLastWord("Hello World")).toBe(5);
    expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
  });

  it("should handle single character cases", () => {
    expect(lengthOfLastWord("a")).toBe(1);
    expect(lengthOfLastWord(" a")).toBe(1);
    expect(lengthOfLastWord("a ")).toBe(1);
  });

  it("should handle repeated characters", () => {
    expect(lengthOfLastWord("aaaaa")).toBe(5);
    expect(lengthOfLastWord("  aaaaa  ")).toBe(5);
  });

  it("should handle edge cases", () => {
    expect(lengthOfLastWord("")).toBe(0);
    expect(lengthOfLastWord(" ")).toBe(0);
    expect(lengthOfLastWord("     ")).toBe(0);
  });

  it("should handle multiple spaces between words", () => {
    expect(lengthOfLastWord("hello    world")).toBe(5);
    expect(lengthOfLastWord("hello    world   ")).toBe(5);
  });
});
