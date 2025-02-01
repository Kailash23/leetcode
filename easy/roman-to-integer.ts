interface RomanNumberMap {
  [key: string]: number;
}

function romanToInt(str: string): number {
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

// Test cases
function runRomanTests(): void {
  const testCases = [
    { input: "III", expected: 3 },
    { input: "LVIII", expected: 58 },
    { input: "MCMXCIV", expected: 1994 },
    { input: "IX", expected: 9 },
    { input: "XL", expected: 40 },
    { input: "IV", expected: 4 },
    { input: "CM", expected: 900 },
  ];

  testCases.forEach((test, index) => {
    const result = romanToInt(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: "${test.input}"`);
    console.log(`Expected: ${test.expected}`);
    console.log(`Output: ${result}`);
    console.log(`Result: ${result === test.expected ? "PASS" : "FAIL"}`);
    console.log("---");
  });
}

runRomanTests();
