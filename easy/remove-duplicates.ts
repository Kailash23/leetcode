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

// Time Complexity: O(n) where n is the length of the input array
// We traverse the array once with the j pointer

// Space Complexity: O(1)
// We modify the array in-place and only use two pointer variables

// Example:
// Input: numbers = [1,1,2,2,3]
// Output: 3, with numbers array modified to [1,2,3,...]
// Explanation: The first 3 elements contain the unique elements
