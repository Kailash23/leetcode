// https://leetcode.com/problems/longest-common-prefix/

function longestCommonPrefix(strs: string[]): string {
  let commonPrefix = "";
  const firstStringIndex = 0;
  let charIndex = 0;

  for (let i = 0; i < strs[firstStringIndex].length; i++) {
    const currentChar = strs[firstStringIndex][i];

    for (let strIndex = 0; strIndex < strs.length; strIndex++) {
      if (strs[strIndex][charIndex] === currentChar) {
        if (strIndex === strs.length - 1) {
          commonPrefix += currentChar;
          charIndex += 1;
        }
      } else {
        return commonPrefix;
      }
    }
  }
  return commonPrefix;
}

// Test cases
function runPrefixTests(): void {
  const testCases = [
    {
      input: ["flower", "flow", "flight"],
      expected: "fl",
    },
    {
      input: ["dog", "racecar", "car"],
      expected: "",
    },
    {
      input: ["interspecies", "interstellar", "interstate"],
      expected: "inters",
    },
    {
      input: ["throne", "throne"],
      expected: "throne",
    },
    {
      input: [""],
      expected: "",
    },
    {
      input: ["a"],
      expected: "a",
    },
    {
      input: ["", "b"],
      expected: "",
    },
  ];

  testCases.forEach((test, index) => {
    const result = longestCommonPrefix(test.input);
    console.log(`Test Case ${index + 1}:`);
    console.log(`Input: [${test.input.map((s) => `"${s}"`).join(", ")}]`);
    console.log(`Expected: "${test.expected}"`);
    console.log(`Output: "${result}"`);
    console.log(`Result: ${result === test.expected ? "PASS" : "FAIL"}`);
    console.log("---");
  });
}

runPrefixTests();
