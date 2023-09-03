function* fibonacciGenerator(n, alt = false) {
  let num1 = 0;
  let num2 = 1;

  while ((alt && num1 <= n) || (!alt && n > 0)) {
    yield num1;
    [num1, num2] = [num2, num1 + num2];
    if (!alt) n--;
  }
}

const generator = fibonacciGenerator(10);
for (const num of generator) {
  console.log(num);
}
