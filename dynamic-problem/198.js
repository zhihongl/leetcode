/**
 * @param {number[]} nums
 * @return {number}
 */
// Recursion
// This one cannot pass because it runs out resource which gives TLE(Time Limit Exceeded) error
var rob = function (nums) {
  const dp = (nums) => {
    if (!nums.length) return 0;
    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return Math.max(nums[0], nums[1]);
    return Math.max(dp(nums.slice(2)) + nums[0], dp(nums.slice(1)));
  };

  return dp(nums);
};

// Recursion with array/dp table from top to bottom
rob = function (nums) {
  let meno = {};
  const dp = (index) => {
    if (index in meno) return meno[index];
    if (index < 0) return 0;
    if (index < 2) return Math.max(...nums.slice(0, index + 1));
    meno[index] = Math.max(dp(index - 2) + nums[index], dp(index - 1));
    return meno[index];
  };
  return dp(nums.length - 1);
};

// Iteration from bottom to top
rob = function (nums) {
  const size = nums.length;
  if (size < 1) return 0;
  if (size <= 2) return Math.max(...nums);
  let pre2 = nums[0],
    pre1 = Math.max(nums[0], nums[1]),
    max = 0;
  for (let i = 2; i < size; i++) {
    max = Math.max(pre2 + nums[i], pre1);
    pre2 = pre1;
    pre1 = max;
  }
  return max;
};
console.time("EXEC");
console.log("rob([1,2,3,1])", rob([1, 2, 3, 1]));

console.log(
  "rob(FINAL)",
  rob([
    114,
    117,
    207,
    117,
    235,
    82,
    90,
    67,
    143,
    146,
    53,
    108,
    200,
    91,
    80,
    223,
    58,
    170,
    110,
    236,
    81,
    90,
    222,
    160,
    165,
    195,
    187,
    199,
    114,
    235,
    197,
    187,
    69,
    129,
    64,
    214,
    228,
    78,
    188,
    67,
    205,
    94,
    205,
    169,
    241,
    202,
    144,
    240,
  ])
);
console.log("rob([2,7,9,3,1])", rob([2, 7, 9, 3, 1]));
console.timeEnd("EXEC");
