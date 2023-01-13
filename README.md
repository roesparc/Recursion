# Recursion

## Fibonacci Exercise

This exercise creates an array of the Fibonacci sequence up to a predetermined number. It uses both iterative and recursive methods.
```javascript
// SOLUTIONS USING ITERATION

function fibs(num) {
  const fibo = [];

  for (let i = 0; i < num; i++) {
    if (i === 0) fibo.push(i);
    if (i === 1) fibo.push(i);

    if (i > 1) {
      const copy = fibo.slice();

      const fiboNum = copy.pop() + copy.pop();

      fibo.push(fiboNum);
    }
  }

  return fibo;
}

function fibs2(num) {
  const fibo = [0, 1];

  for (let i = 2; i < num; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  return fibo.slice(0, num);
}

// SOLUTIONS USING RECURSION

function fibsRec(num, array = [0, 1]) {
  if (!num) return [];

  const copy = array.slice();

  const newNum = copy.pop() + copy.pop();

  array.push(newNum);

  fibsRec(num - 1, array);

  return array.slice(0, num);
}

function fibsRec2(num, array = [0, 1]) {
  if (!num) return [];

  array.push(array[array.length - 1] + array[array.length - 2]);

  fibsRec(num - 1, array);

  return array.slice(0, num);
}
```

## Merge Sort Exercise

This exercise sorts an array of numbers using a recursive merge sort method.

```javascript
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
```
