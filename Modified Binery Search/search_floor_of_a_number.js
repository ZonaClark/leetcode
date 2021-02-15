function search_floor_of_a_number(arr, key) {
  if (arr[0] > key) return -1;
  let start = 0,
    end = arr.length - 1;
  while (start <= end) {
    const mid = Math.floor((end - start) / 2 + start);
    if (arr[mid] === key) return mid;
    if (arr[mid] > key) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return end;
}

console.log(search_floor_of_a_number([4, 6, 10], 6));
console.log(search_floor_of_a_number([1, 3, 8, 10, 15], 12));
console.log(search_floor_of_a_number([4, 6, 10], 17));
console.log(search_floor_of_a_number([4, 6, 10], -1));
