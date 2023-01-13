function mergeSort(array) {
  if (array.length <= 1) return array;

  const leftSide = array.slice(0, Math.floor(array.length / 2));
  const rightSide = array.slice(Math.floor(array.length / 2));

  return merge(mergeSort(leftSide), mergeSort(rightSide));
}

function merge(leftSide, rightSide) {
  let ordered = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < leftSide.length && rightIndex < rightSide.length) {
    if (leftSide[leftIndex] < rightSide[rightIndex]) {
      ordered.push(leftSide[leftIndex]);

      leftIndex += 1;
    } else {
      ordered.push(rightSide[rightIndex]);

      rightIndex += 1;
    }
  }

  return [
    ...ordered,
    ...leftSide.slice(leftIndex),
    ...rightSide.slice(rightIndex),
  ];
}
