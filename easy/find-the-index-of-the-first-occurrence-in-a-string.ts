// https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/

// Time Complexity: O((n - m + 1) * m), where n is the length of the haystack and m is the length of the needle.
// In the worst case, for each position in the haystack, we might need to check all characters of the needle.
// Space Complexity: O(1), as we are using a constant amount of space for variables.

export function strStr(haystack: string, needle: string): number {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (haystackLength < needleLength) {
    return -1;
  }

  if (needleLength === 0) {
    return 0;
  }

  for (let i = 0; i <= haystackLength - needleLength; i++) {
    let matchCount = 0;
    while (
      matchCount < needleLength &&
      haystack[i + matchCount] === needle[matchCount]
    ) {
      matchCount++;
    }
    if (matchCount === needleLength) {
      return i;
    }
  }
  return -1;
}

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1
