var twoSum = (numbers: number[], target: number): number[] => {
  const numIndices = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let complement = target - numbers[i];
    if (numIndices.has(complement)) {
      return [numIndices.get(complement), i];
    }
    numIndices.set(numbers[i], i);
  }
  return [];
};

// Test cases
function runTwoSumTests(): void {
  const testCases = [
    { nums: [2, 7, 11, 15], target: 9, expected: [0, 1] },
    { nums: [3, 2, 4], target: 6, expected: [1, 2] },
    { nums: [3, 3], target: 6, expected: [0, 1] },
  ];

  testCases.forEach((test, index) => {
    const result = twoSum(test.nums, test.target);
    console.log(`Test Case ${index + 1}:`);
    console.log(
      `Input: nums = [${test.nums.join(", ")}], target = ${test.target}`
    );
    console.log(`Expected: [${test.expected.join(", ")}]`);
    console.log(`Output: [${result.join(", ")}]`);
    console.log(
      `Result: ${
        JSON.stringify(result) === JSON.stringify(test.expected)
          ? "PASS"
          : "FAIL"
      }`
    );
    console.log("---");
  });
}

runTwoSumTests();
