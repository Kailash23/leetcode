// https://leetcode.com/problems/add-binary/

// Time Complexity: O(max(n, m)), where n and m are the lengths of strings a and b respectively.
// This is because we iterate through each string once, from the end to the beginning.
// Space Complexity: O(max(n, m)), as the result string can be at most one character longer than the longer input string.

export function addBinary(a: string, b: string): string {
  let i = a.length - 1;
  let j = b.length - 1;
  let result = "";
  let isCarry = false;

  while (i >= 0 || j >= 0) {
    let bitA = a[i] || "0"; // Treat missing digits as '0'
    let bitB = b[j] || "0";

    if (bitA === "1" && bitB === "1") {
      if (isCarry) {
        result = "1" + result;
      } else {
        result = "0" + result;
      }
      isCarry = true; // Carry must be set
    } else if (bitA === "0" && bitB === "1") {
      if (isCarry) {
        result = "0" + result;
      } else {
        result = "1" + result;
      }
    } else if (bitA === "1" && bitB === "0") {
      if (isCarry) {
        result = "0" + result;
      } else {
        result = "1" + result;
      }
    } else if (bitA === "0" && bitB === "0") {
      if (isCarry) {
        result = "1" + result;
        isCarry = false; // Reset carry when adding 1+0
      } else {
        result = "0" + result;
      }
    }

    i--;
    j--;
  }

  return isCarry ? "1" + result : result;
}

// Example 1:
// Input: a = "11", b = "1"
// Output: "100"

// Example 2:
// Input: a = "1010", b = "1011"
// Output: "10101"
