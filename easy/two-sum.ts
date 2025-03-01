// https://leetcode.com/problems/two-sum/

export function twoSum(numbers: number[], target: number): number[] {
  const numIndices = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    numIndices.set(numbers[i], i);
  }
  return [];
}

// Time Complexity: O(n) where n is the length of the input array
// We traverse the array once, with O(1) lookups in the hash map

// Space Complexity: O(n)
// In the worst case, we store almost all elements in the hash map

// Example:
// Input: numbers = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: numbers[0] + numbers[1] = 2 + 7 = 9
