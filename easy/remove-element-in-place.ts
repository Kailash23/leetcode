// https://leetcode.com/problems/remove-element/

function removeElement(nums: number[], val: number): number {
  let startIndex = 0;

  for (let j = 0; j < nums.length; j++) {
    if (nums[j] !== val) {
      nums[startIndex] = nums[j];
      startIndex++;
    }
  }

  return startIndex;
}

// Test cases
function runRemoveElementTests(): void {
  const testCases = [
    {
      nums: [3, 2, 2, 3],
      val: 3,
      expectedK: 2,
      expectedNums: [2, 2],
    },
    {
      nums: [0, 1, 2, 2, 3, 0, 4, 2],
      val: 2,
      expectedK: 5,
      expectedNums: [0, 1, 3, 0, 4], // Sorted will be [0, 0, 1, 3, 4]
    },
    {
      nums: [1, 2, 3],
      val: 4,
      expectedK: 3,
      expectedNums: [1, 2, 3],
    },
    {
      nums: [4, 4, 4],
      val: 4,
      expectedK: 0,
      expectedNums: [],
    },
    {
      nums: [],
      val: 1,
      expectedK: 0,
      expectedNums: [],
    },
  ];

  testCases.forEach((test, index) => {
    const numsCopy = [...test.nums]; // Create a copy since the function modifies the array in-place.
    const k = removeElement(numsCopy, test.val);

    // Since the order of the first k elements doesn't matter,
    // we sort them before comparing.
    const resultArr = numsCopy.slice(0, k).sort((a, b) => a - b);
    const expectedSorted = [...test.expectedNums].sort((a, b) => a - b);

    const pass =
      k === test.expectedK &&
      JSON.stringify(resultArr) === JSON.stringify(expectedSorted);

    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: ${JSON.stringify(test.nums)}, val = ${test.val}`);
    console.log(
      `Expected k: ${test.expectedK}, expectedNums (sorted): ${JSON.stringify(
        expectedSorted
      )}`
    );
    console.log(
      `Output k: ${k}, resulting nums (first k, sorted): ${JSON.stringify(
        resultArr
      )}`
    );
    console.log(`Result: ${pass ? "PASS" : "FAIL"}`);
    console.log("---");
  });
}

runRemoveElementTests();
