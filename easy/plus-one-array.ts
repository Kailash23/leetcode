// https://leetcode.com/problems/plus-one/

export function plusOne(digits: number[]): number[] {
  let needsCarryOver = false;

  for (
    let currentIndex = digits.length - 1;
    currentIndex >= 0;
    currentIndex--
  ) {
    if (digits[currentIndex] === 9) {
      digits[currentIndex] = 0;
      needsCarryOver = true;
    } else {
      digits[currentIndex] = digits[currentIndex] + 1;
      needsCarryOver = false;
      break;
    }
  }

  if (needsCarryOver) {
    return [1, ...digits];
  }

  return digits;
}
