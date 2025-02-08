export function mySqrt(number: number): number {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  let lowerBound = 0,
    upperBound = number;

  while (lowerBound < upperBound) {
    let midPoint = Math.floor((lowerBound + upperBound) / 2);

    if (lowerBound === midPoint || midPoint * midPoint === number) {
      return midPoint;
    } else if (midPoint * midPoint > number) {
      upperBound = midPoint;
    } else {
      lowerBound = midPoint;
    }
  }

  return lowerBound;
}
