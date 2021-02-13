const find_subsets = function (nums) {
  const subsets = [[]];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    let startIndex = 0;
    const setLength = subsets.length;
    if (i > 0 && nums[i] === nums[i - 1]) {
      i === 1 ? (startIndex = 1) : (startIndex = setLength - 2);
    }

    for (start = startIndex; start < setLength; start++) {
      const subset = JSON.parse(JSON.stringify(subsets[start]));
      subset.push(nums[i]);
      subsets.push(subset);
    }
  }

  subsets.forEach((set) => {
    console.log(`[${set}]`);
  });
};

console.log(`Here is the list of subsets: ${find_subsets([1, 3, 3])}`);
console.log(`Here is the list of subsets: ${find_subsets([1, 5, 3, 3])}`);
