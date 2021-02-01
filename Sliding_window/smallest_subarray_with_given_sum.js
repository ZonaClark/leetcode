const smallest_subarray_with_given_sum = function(s, arr) {
  let smallestLenth = Infinity, windowStart = 0, windowSum = 0
  for (windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd]
    while (windowSum >= s) {
      smallestLenth = Math.min(smallestLenth, windowEnd - windowStart + 1)
      windowSum -= arr[windowStart]
      windowStart += 1
    }
  }
  if (smallestLenth === Infinity) {
    return 0;
  }
  return smallestLenth;
};


console.log(smallest_subarray_with_given_sum(7, [2,1,5,2,3,2]))
console.log(smallest_subarray_with_given_sum(7, [2,1,5,2,8]))