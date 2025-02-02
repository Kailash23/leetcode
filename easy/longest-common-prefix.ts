// https://leetcode.com/problems/longest-common-prefix/

export function longestCommonPrefix(strs: string[]): string {
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
