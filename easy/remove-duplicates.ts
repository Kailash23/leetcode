//https://leetcode.com/problems/remove-duplicates-from-sorted-array/

function removeDuplicates(numbers: number[]): number {
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

// Test cases
function runRemoveDuplicatesTests() {
  const testCases = [
    [1, 1, 2],
    [0, 0, 1, 1, 1, 2, 2, 3, 3, 4],
    [1, 2, 3], // No duplicates
    [], // Empty array
  ];

  testCases.forEach((test, index) => {
    const numbers = [...test]; // Create a copy of the array
    const result = removeDuplicates(numbers);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${test.join(", ")}]`);
    console.log(`Output length: ${result}`);
    console.log(
      `Modified array (first ${result} elements): [${numbers
        .slice(0, result)
        .join(", ")}]`
    );
    console.log("---");
  });
}

runRemoveDuplicatesTests();
