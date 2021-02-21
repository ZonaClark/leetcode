const Deque = require('../node_modules/collections/deque');

const is_scheduling_possible = function (tasks, prerequisites) {
  const incomingCount = Array(tasks).fill(0),
    taskMap = {};
  for ([pre, task] of prerequisites) {
    incomingCount[task] += 1;
    taskMap[pre] ? taskMap[pre].push(task) : (taskMap[pre] = [task]);
  }

  const q = new Deque(),
    tasklist = [];
  incomingCount.forEach((count, taskNum) => {
    if (count === 0) q.push(taskNum);
  });

  while (q.length) {
    const next = q.shift();
    tasklist.push(next);
    const afterTasks = taskMap[next];
    if (afterTasks) {
      afterTasks.forEach((task) => {
        incomingCount[task] -= 1;
        if (incomingCount[task] === 0) {
          q.push(task);
        }
      });
    }
  }
  return tasklist.length === tasks;
};

console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(3, [
    [0, 1],
    [1, 2],
    [2, 0],
  ])}`
);
console.log(
  `Is scheduling possible: ${is_scheduling_possible(6, [
    [0, 4],
    [1, 4],
    [3, 2],
    [1, 3],
  ])}`
);
