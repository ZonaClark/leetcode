const find_subarrays = function(arr, target) {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    if (arr[i] < target) {
      result.push([arr[i]])
    }
    let backPointer = i + 1
    let productResult = arr[i] * arr[backPointer]
    while (productResult < target && backPointer < arr.length) {
      const outputInnerArray = [arr[i]]
      for (j = i + 1; j < backPointer + 1; j++) {
        outputInnerArray.push(arr[j])
      }
      result.push(outputInnerArray)
      backPointer++
      productResult *= arr[backPointer]
    }
  }
  return result;
};