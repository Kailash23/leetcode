// https://leetcode.com/problems/length-of-last-word/

// Time Complexity: O(n), where n is the length of the input string.
// We iterate through the string once, checking each character.
// Space Complexity: O(1), as we are using a constant amount of extra space.

export function lengthOfLastWord(inputString: string): number {
  let lastWordLength = 0;
  let spaceCount = 0;
  let isLetterOccurred = false;

  for (let i = inputString.length - 1; i >= 0; i--) {
    if (inputString[i] !== " ") {
      lastWordLength++;
      isLetterOccurred = true;
      if (inputString.length - spaceCount === lastWordLength) {
        return lastWordLength;
      }
    } else if (inputString[i] === " ") {
      spaceCount++;
      if (isLetterOccurred) {
        return lastWordLength;
      }
    }
  }
  return lastWordLength;
}

// Example 1:
// Input: s = "Hello World"
// Output: 5

// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
