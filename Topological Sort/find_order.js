const Deque = require('../node_modules/collections/deque');

const find_order = function (tasks, prerequisites) {
  const sortedOrder = [];
  const indegrees = Array(tasks).fill(0),
    orderMap = Array(tasks).fill([]);
  for ([first, second] of prerequisites) {
    indegrees[second] += 1;
    orderMap[first].push(second);
  }
  const q = new Deque();
  indegrees.forEach((count, i) => {
    if (count === 0) {
      q.push(i);
    }
  });
  while (q.length) {
    const next = q.shift();
    sortedOrder.push(next);
    const subsequents = orderMap[next];
    subsequents.forEach((task) => {
      indegrees[task] -= 1;
      if (indegrees[task] === 0) {
        q.push(task);
      }
    });
  }
  return sortedOrder.length === tasks ? sortedOrder : [];
};

console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
  ])}`
);
console.log(
  `Is scheduling possible: ${find_order(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
);
console.log(
  `Is scheduling possible: ${find_order(6, [
    [2, 5],
    [0, 5],
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
);
