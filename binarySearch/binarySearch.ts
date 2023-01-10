const binarySearch = (list: Array<number>, target: number): number => {
  let firstPosition = 0;
  let lastPosition = list.length - 1;

  while (firstPosition <= lastPosition) {
    const midpoint = Math.floor((firstPosition + lastPosition) / 2);
    if (list[midpoint] === target) {
      return midpoint;
    } else if (list[midpoint] > target) {
      lastPosition = midpoint - 1;
    } else {
      firstPosition = midpoint + 1;
    }
  }
  return -1;
};

const verifyBinarySearch = () => {
  const theList = [1, 3, 5, 6, 7, 8, 10, 12, 13];
  const target = 5;
  const position = binarySearch(theList, target);
  if (position != -1) {
    console.log("target exists at position ", position);
  } else {
    console.log("target does not exisit in the list");
  }
};

verifyBinarySearch();
