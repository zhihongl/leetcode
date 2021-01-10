/**
 * @param {number[]} prices
 * @return {number}
 */
// Recursion O(n^2)
maxProfit = function (prices) {
  // this will cover one test case
  let profit = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] < prices[j]) {
        profit = Math.max(profit, prices[j] - prices[i]);
      } else {
        i = j;
      }
    }
  }

  return profit;
};

// O(n) Greedy solution
maxProfit = function (prices) {
  let profit = 0,
    min = Infinity;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i - 1]);
    profit = Math.max(profit, prices[i] - min);
  }

  return profit;
};

console.log("maxProfit(5)", maxProfit([7, 1, 5, 3, 6, 4]));
console.log("maxProfit(0)", maxProfit([7, 6, 4, 3, 1]));
