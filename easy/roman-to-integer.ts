export interface RomanNumberMap {
  [key: string]: number;
}

export function romanToInt(str: string): number {
  const numberToRomanMap: RomanNumberMap = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    XL: 40,
    L: 50,
    XC: 90,
    C: 100,
    CD: 400,
    D: 500,
    CM: 900,
    M: 1000,
  };

  let number = 0;

  for (let i = str.length - 1; i >= 0; i--) {
    const attempt1 = i > 0 ? str[i - 1] + str[i] : "";

    if (attempt1 && numberToRomanMap.hasOwnProperty(attempt1)) {
      i--;
      number += numberToRomanMap[attempt1];
    } else if (numberToRomanMap.hasOwnProperty(str[i])) {
      number += numberToRomanMap[str[i]];
    }
  }

  return number;
}

// Time Complexity: O(n) where n is the length of the input string
// We traverse the string once, potentially skipping characters when we find special pairs

// Space Complexity: O(1)
// The hash map has a fixed size regardless of input

// Example:
// Input: str = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90, IV = 4
