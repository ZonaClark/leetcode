const can_partition = function (num) {
  if (num.length < 2) return false;
  const prevResultSet = [[num[0], 0]];
  for (i = 1; i < num.length; i++) {
    const prevSetSize = prevResultSet.length;
    for (j = 0; j < prevSetSize; j++) {
      const [leftNum, rightNum] = prevResultSet.shift();
      prevResultSet.push([leftNum + num[i], rightNum]);
      prevResultSet.push([leftNum, rightNum + num[i]]);
    }
  }
  let result = false;
  prevResultSet.forEach((partition) => {
    if (partition[0] === partition[1]) result = true;
  });
  return result;
};

console.log(`Can partition: ${can_partition([1, 2, 3, 4])}`);
console.log(`Can partition: ${can_partition([1, 1, 3, 4, 7])}`);
console.log(`Can partition: ${can_partition([2, 3, 4, 6])}`);
