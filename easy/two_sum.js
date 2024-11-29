// https://leetcode.com/problems/two-sum/

var twoSum = (numbers, target) => {
  const numIndices = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    numIndices.set(numbers[i], i);
  }
};
