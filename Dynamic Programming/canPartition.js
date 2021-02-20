const canPartition = function (num, sum) {
  const mem = new Array(sum + 1).fill(false);
  mem.forEach((_, i) => {
    if (num[0] === i) mem[i] = true;
  });
  for (let i = 1; i < num.length; i++) {
    for (let j = sum; j >= 0; j--) {
      let first = false;
      if (j >= num[i]) {
        first = mem[j - num[i]];
      }
      mem[j] = mem[j] || first;
    }
  }
  return mem[sum];
};

console.log(`Can partitioning be done: ---> ${canPartition([1, 2, 3, 4], 6)}`);
console.log(
  `Can partitioning be done: ---> ${canPartition([1, 2, 7, 1, 5], 10)}`
);
console.log(`Can partitioning be done: ---> ${canPartition([1, 3, 4, 8], 6)}`);
