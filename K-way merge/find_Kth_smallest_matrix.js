const Heap = require('./collections/heap');

const find_Kth_smallest = function (matrix, k) {
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  matrix.forEach((row, i) => {
    minHeap.push([row[0], 0, i]);
  });
  let nthSmallestCount = 0,
    currNum = 0;
  while (nthSmallestCount < k) {
    const [smallNum, indexInRow, rowIndex] = minHeap.pop();
    nthSmallestCount++;
    currNum = smallNum;
    minHeap.push([matrix[rowIndex][indexInRow + 1], indexInRow + 1, rowIndex]);
  }
  return currNum;
};

console.log(
  `Kth smallest number is: ${find_Kth_smallest(
    [
      [2, 6, 8],
      [3, 7, 10],
      [5, 8, 11],
    ],
    5
  )}`
);
