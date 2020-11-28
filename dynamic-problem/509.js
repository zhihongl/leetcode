/**
 * @param {number} N
 * @return {number}
 */
// Recursion
// This one cannot pass because it runs out resource which gives running time error
var fib = function (N) {
  if (N === 1 || N === 2) return 1;
  return fib(N - 1) + fib(N - 2);
};

// Recursion with array/dp table
fib = function (N) {
  // this will cover one test case
  if (N < 1) return 0;
  let arr = Array(N).fill(0);

  function rec(n) {
    if (n === 1 || n === 2) return 1;
    if (arr[n] > 0) return arr[n];
    arr[n] = rec(n - 1) + rec(n - 2);
    return arr[n];
  }

  return rec(N);
};

// Iteration from bottom to top
fib = function (N) {
  if (N < 1) return 0;
  if (N === 1 || N === 2) return 1;
  let pre = 1,
    cur = 1,
    sum = 0;
  for (let i = 3; i <= N; i++) {
    sum = pre + cur;
    pre = cur;
    cur = sum;
  }
  return cur;
};

console.log("fib(25)", fib(25));
