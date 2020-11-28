var orangesRotting = function (grid) {
  let count = 0;
  let result = nextTick(grid);
  console.log("great");
  while (result && count < 5) {
    console.log("loop", count, result);
    count += 1;
    result = nextTick(grid);
  }
  return count;
};

var nextTick = function (grid) {
  let isAnyTurned = false;

  let xLeft = 0;
  let xRight = 0;
  let yTop = 0;
  let yBottom = 0;
  let rowIndex = 0;
  let itemIndex = 0;

  for (let rowIndexOrigin in grid) {
    for (let itemIndexOrigin in grid[rowIndexOrigin]) {
      rowIndex = +rowIndexOrigin;
      itemIndex = +itemIndexOrigin;
      xLeft = itemIndex > 0 ? itemIndex - 1 : 0;
      xRight =
        itemIndex < grid[rowIndex].length - 1
          ? itemIndex + 1
          : grid[rowIndex].length;
      yTop = rowIndex > 0 ? rowIndex - 1 : 0;
      yBottom = rowIndex < grid.length - 1 ? rowIndex + 1 : grid.length;
      if (grid[rowIndex][itemIndex] === 2) {
        if (xLeft !== itemIndex && grid[rowIndex][xLeft] === 1) {
          grid[rowIndex][xLeft] === 2;
          isAnyTurned = true;
          console.log("xleft");
        }
        if (xRight !== itemIndex && grid[rowIndex][xRight] === 1) {
          grid[rowIndex][xRight] === 2;
          isAnyTurned = true;
          console.log("xright");
        }

        if (yTop !== rowIndex && grid[yTop][itemIndex] === 1) {
          grid[yTop][itemIndex] === 2;
          isAnyTurned = true;
          console.log("ytop");
        }
        // console.log("yBottom", typeof rowIndex, typeof itemIndex);
        if (yBottom !== rowIndex && grid[yBottom][itemIndex] === 1) {
          grid[yBottom][itemIndex] === 2;
          isAnyTurned = true;
          console.log("yBottom");
        }
      }
    }
  }

  return isAnyTurned;
};

var main = orangesRotting;

const testCases = [
  {
    input: [
      [2, 1, 1],
      [1, 1, 0],
      [0, 1, 1],
    ],
    assertion: 4,
  },
  {
    input: [
      [2, 1, 1],
      [0, 1, 1],
      [1, 0, 1],
    ],
    assertion: -1,
  },
];

// run each test case
// @ts-ignore
console.log("\n\n");
for (let item of testCases) {
  console.log("result");
  const result = main(item.input);
  if (result === item.assertion) {
    console.log("PASSED");
  } else {
    console.error(">>FAILED", "Result=", result, "Assertion=", item.assertion);
  }
}
console.log("\n\n");
