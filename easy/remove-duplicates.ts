//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

export function removeDuplicates(numbers: number[]): number {
  if (numbers.length === 0) return 0;

  let i = 0; // For tracking unique
  let j = 1;

  while (j < numbers.length) {
    if (numbers[j] !== numbers[i]) {
      i++;
      numbers[i] = numbers[j];
    }
    j++;
  }

  return i + 1;
}
