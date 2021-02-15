const find_range = function (arr, key) {
  result = [-1, -1];
  let start = 0,
    end = arr.length - 1,
    startIndex = -1,
    endIndex = -1;
  while (start <= end) {
    const middle = Math.floor((end - start) / 2 + start);
    if (arr[middle] === key) {
      startIndex = middle;
      break;
    }
    if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  if (startIndex !== -1) {
    endIndex = startIndex;
    while (startIndex > 0 && arr[startIndex - 1] === key) {
      startIndex--;
    }
    while (endIndex < arr.length - 2 && arr[endIndex + 1] === key) {
      endIndex++;
    }
  }
  return [startIndex, endIndex];
};

console.log(find_range([4, 6, 6, 6, 9], 6));
console.log(find_range([1, 3, 8, 10, 15], 10));
console.log(find_range([1, 3, 8, 10, 15], 12));
