// https://leetcode.com/problems/remove-element/

export function removeElement(nums: number[], val: number): number {
  let k = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[k] = nums[i];
      k++;
    }
  }

  return k;
}

// Time Complexity: O(n) where n is the length of the input array
// We traverse the array once

// Space Complexity: O(1)
// We modify the array in-place and only use two variables

// Example:
// Input: nums = [3,2,2,3], val = 3
// Output: 2, with nums array modified to [2,2,...]
// Explanation: The first 2 elements contain the values that aren't equal to 3
