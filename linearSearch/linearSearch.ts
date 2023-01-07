const linearSearch = (list: number[], target: number): number => {
  // should return the position of the target if found else return -1
  for (let index = 0; index < list.length; index++) {
    if (list[index] === target) {
      return target;
    }
  }
  return -1;
};

const verify = () => {
  const theList = [1, 3, 5, 6, 7];
  const target = 7;
  const position = linearSearch(theList, target);
  if (position != -1) {
    console.log("target exists at position ", position);
  } else {
    console.log("target does not exisit in the list");
  }
};

verify();
