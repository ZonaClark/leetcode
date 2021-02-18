const Heap = require('./collections/heap');

const find_maximum_distinct_elements = function (nums, k) {
  let nonDupCount = 0,
    dupMap = new Map();
  nums.forEach((num) => {
    if (!dupMap[num]) {
      dupMap[num] = 1;
    } else {
      dupMap[num] += 1;
    }
  });
  const minHeap = new Heap([], null, (a, b) => b - a);
  Object.keys(dupMap).forEach((input) => {
    if (dupMap[input] === 1) {
      nonDupCount++;
      dupMap.delete(input);
    } else {
      minHeap.push(dupMap[input] - 1);
    }
  });
  while (k > 0) {
    if (minHeap.length) {
      const nextNum = minHeap.pop();
      if (nextNum <= k) {
        nonDupCount++;
      }
      k -= nextNum;
    } else {
      nonDupCount--;
      k -= 1;
    }
  }
  return nonDupCount;
};

console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [7, 3, 5, 8, 5, 3, 3],
    2
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [3, 5, 12, 11, 12],
    3
  )}`
);
console.log(
  `Maximum distinct numbers after removing K numbers: ${find_maximum_distinct_elements(
    [1, 2, 3, 3, 3, 3, 4, 4, 5, 5, 5],
    2
  )}`
);
