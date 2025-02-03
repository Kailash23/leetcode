// https://leetcode.com/problems/length-of-last-word/

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
