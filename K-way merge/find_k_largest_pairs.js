const Heap = require('../node_modules/collections/heap');

const find_k_largest_pairs = function (nums1, nums2, k) {
  const result = [],
    maxHeap = new Heap([], null, (a, b) => a[1] - b[1]);
  let pt1 = 0,
    pt2 = 0,
    count = k;
  maxHeap.push([[nums1[pt1], nums2[pt2]], nums1[pt1] + nums2[pt2]]);
  while (count !== 0) {
    const next = maxHeap.pop();
    result.push(next[0]);
    pt1 += 1;
    maxHeap.push([[nums1[pt1], nums2[pt2]], nums1[pt1] + nums2[pt2]]);
    pt2 += 1;
    pt1 -= 1;
    maxHeap.push([[nums1[pt1], nums2[pt2]], nums1[pt1] + nums2[pt2]]);
    pt1 += 1;
    count -= 1;
  }
  return result;
};

console.log(
  `Pairs with largest sum are: ${find_k_largest_pairs([9, 8, 2], [6, 3, 1], 3)}`
);
console.log(
  `Pairs with largest sum are: ${find_k_largest_pairs([5, 2, 1], [2, -1], 3)}`
);
