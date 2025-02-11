export function strStr(haystack: string, needle: string): number {
  const haystackLength = haystack.length;
  const needleLength = needle.length;

  if (haystackLength < needleLength) return -1;

  if (needleLength === 0) return 0;

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
