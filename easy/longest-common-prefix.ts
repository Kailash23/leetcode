// https://leetcode.com/problems/longest-common-prefix/

// Time Complexity: O(n * m), where n is the number of strings and m is the length of the shortest string.
// We iterate through each character of the shortest string and compare it with the characters of all other strings.

// Space Complexity: O(1), as we are using a constant amount of extra space.

export function longestCommonPrefix(strings: string[]): string {
  let commonPrefix = "";
  const firstStringIndex = 0;
  let charIndex = 0;

  for (let i = 0; i < strings[firstStringIndex].length; i++) {
    const currentChar = strings[firstStringIndex][i];

    for (let strIndex = 0; strIndex < strings.length; strIndex++) {
      if (strings[strIndex][charIndex] === currentChar) {
        if (strIndex === strings.length - 1) {
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

// Example 1:
// Input: strings = ["flower","flow","flight"]
// Output: "fl"

// Example 2:
// Input: strings = ["dog","racecar","car"]
// Output: ""
