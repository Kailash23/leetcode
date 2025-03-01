// https://leetcode.com/problems/search-insert-position/

export function searchInsert(nums: number[], target: number): number {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
}

// Time Complexity: O(n) where n is the length of the input array
// In the worst case, we traverse the entire array

// Space Complexity: O(1)
// We only use a single variable regardless of input size

// Example:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Explanation: 5 is found at index 2

// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Explanation: 2 should be inserted at index 1 to maintain sorted order
