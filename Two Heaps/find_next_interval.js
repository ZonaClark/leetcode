const Heap = require('../node_modules/collections/heap');

class Interval {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }
}

const find_next_interval = function (intervals) {
  const result = Array(intervals.length).fill(-1);
  const maxHeapForStartTime = new Heap([], null, (a, b) => a[0] - b[0]);
  const maxHeapForEndTime = new Heap([], null, (a, b) => a[0] - b[0]);
  intervals.forEach((interval, index) => {
    maxHeapForStartTime.push([interval.start, index]);
    maxHeapForEndTime.push([interval.end, index]);
  });

  while (maxHeapForEndTime.length) {
    const interval = maxHeapForEndTime.pop();
    let nextInterval = null;
    while (
      maxHeapForStartTime.length &&
      maxHeapForStartTime.peek()[0] >= interval[0]
    ) {
      nextInterval = maxHeapForStartTime.pop();
    }
    if (nextInterval !== null) {
      result[interval[1]] = nextInterval[1];
    }
  }
  return result;
};

result = find_next_interval([
  new Interval(2, 3),
  new Interval(3, 4),
  new Interval(5, 6),
]);
console.log(`Next interval indices are: ${result}`);

result = find_next_interval([
  new Interval(3, 4),
  new Interval(1, 5),
  new Interval(4, 6),
]);
console.log(`Next interval indices are: ${result}`);
