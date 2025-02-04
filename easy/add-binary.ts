// https://leetcode.com/problems/add-binary/

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
