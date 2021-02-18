const Heap = require('./collections/heap');

const find_Kth_smallest = function (lists, k) {
  let currPos = 0,
    nextSmallNum = -1;
  const minHeap = new Heap([], null, (a, b) => b[0] - a[0]);
  lists.forEach((list, i) => {
    minHeap.push([list.shift(), i]);
  });
  while (currPos < k && minHeap.length) {
    nextSmallNum = minHeap.pop();
    currPos++;
    minHeap.push([lists[nextSmallNum[1]].shift(), nextSmallNum[1]]);
  }
  if (!minHeap.length && currPos < k) return -1;
  return nextSmallNum[0];
};

console.log(
  `Kth smallest number is: ${find_Kth_smallest(
    [
      [5, 8, 9],
      [1, 7],
    ],
    3
  )}`
);
