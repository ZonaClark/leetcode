class Job {
  constructor(start, end, cpu_load) {
    this.start = start;
    this.end = end;
    this.cpu_load = cpu_load;
  }
}

const find_max_cpu_load = function (jobs) {
  const timeMap = new Map();
  jobs.forEach((job, index) => {
    for (let i = job.start; i <= job.end; i++) {
      if (!timeMap.has(i)) {
        timeMap.set(i, []);
      }
      const newArr = timeMap.get(i);
      newArr.push(index);
      timeMap.set(i, newArr);
    }
  });
  // console.log(timeMap);
  let maxCPU = 0;
  for (let [_, indexes] of timeMap) {
    let totalTime = 0;
    indexes.forEach((index) => {
      totalTime += jobs[index].cpu_load;
    });
    maxCPU = Math.max(maxCPU, totalTime);
  }
  return maxCPU;
};

console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 3),
    new Job(2, 5, 4),
    new Job(7, 9, 6),
  ])}`
);
console.log(
  `Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(6, 7, 10),
    new Job(2, 4, 11),
    new Job(8, 12, 15),
  ])}`
);
console.log(
  `"Maximum CPU load at any time: ${find_max_cpu_load([
    new Job(1, 4, 2),
    new Job(2, 4, 1),
    new Job(3, 6, 5),
  ])}`
);
