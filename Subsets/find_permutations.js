const find_permutations = function (nums) {
  let result = [[]];
  nums.forEach((num) => {
    const newResult = [];
    result.forEach((permutation) => {
      for (
        insertIndex = 0;
        insertIndex < permutation.length + 1;
        insertIndex++
      ) {
        const newPermutation = permutation.slice(0);
        newPermutation.splice(insertIndex, 0, num);
        newResult.push(newPermutation);
      }
    });
    result = newResult;
  });

  result.forEach((result) => {
    console.log(`[${result}]`);
  });
};

console.log(`Here are all the permutations: ${find_permutations([1, 3, 5])}`);

const Deque = require('./collections/deque'); //http://www.collectionsjs.com

function find_permutations2(nums) {
  let numsLength = nums.length,
    result = [],
    permutations = new Deque();
  permutations.push([]);
  for (let i = 0; i < nums.length; i++) {
    const currentNumber = nums[i];
    // we will take all existing permutations and add the current number to create new permutations
    const n = permutations.length;
    for (let p = 0; p < n; p++) {
      const oldPermutation = permutations.shift();
      // create a new permutation by adding the current number at every position
      for (let j = 0; j < oldPermutation.length + 1; j++) {
        const newPermutation = oldPermutation.slice(0); // clone the permutation
        newPermutation.splice(j, 0, currentNumber); // insert currentNumber at index 'j'
        if (newPermutation.length === numsLength) {
          result.push(newPermutation);
        } else {
          permutations.push(newPermutation);
        }
      }
    }
  }

  return result;
}

console.log('Here are all the permutations:');
const result = find_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});

function generate_permutations(nums) {
  const result = [];
  generate_permutations_recursive(nums, 0, [], result);
  return result;
}

function generate_permutations_recursive(
  nums,
  index,
  currentPermutation,
  result
) {
  if (index === nums.length) {
    result.push(currentPermutation);
  } else {
    // create a new permutation by adding the current number at every position
    for (let i = 0; i < currentPermutation.length + 1; i++) {
      newPermutation = currentPermutation.slice(0); // clone the permutation
      newPermutation.splice(i, 0, nums[index]); // insert nums[index] at index 'i'
      generate_permutations_recursive(nums, index + 1, newPermutation, result);
    }
  }
}

console.log('Here are all the permutations:');
const result = generate_permutations([1, 3, 5]);
result.forEach((permutation) => {
  console.log(permutation);
});
