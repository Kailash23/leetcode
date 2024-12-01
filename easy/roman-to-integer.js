// https://leetcode.com/problems/roman-to-integer/

// Self

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (str) {
  const numberToRomanMap = {
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
    const attempt1 = str[i - 1] + str[i];

    if (numberToRomanMap.hasOwnProperty(attempt1)) {
      i--;
      number += numberToRomanMap[attempt1];
    } else if (numberToRomanMap.hasOwnProperty(str[i])) {
      number += numberToRomanMap[str[i]];
    }
  }

  return number;
};
