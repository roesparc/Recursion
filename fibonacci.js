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
