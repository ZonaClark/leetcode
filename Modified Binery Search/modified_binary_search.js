class ArrayReader {
  constructor(arr) {
    this.arr = arr;
  }

  get(index) {
    if (index >= this.arr.length) return Number.MAX_SAFE_INTEGER;
    return this.arr[index];
  }
}

const search_in_infinite_array = function (reader, key) {
  if (reader.get[0] > key) return -1;
  let end = key;
  while (reader.get(end) < key) {
    end += key;
  }
  let front = end - key;
  while (front <= end) {
    const middle = Math.floor((end - front) / 2 + front);
    const midVal = reader.get(middle);
    if (midVal === key) return middle;
    if (midVal < key) {
      front = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  if (front === end && reader.get(front) === key) return front;
  return -1;
};

var reader = new ArrayReader([
  4,
  6,
  8,
  10,
  12,
  14,
  16,
  18,
  20,
  22,
  24,
  26,
  28,
  30,
]);
console.log(search_in_infinite_array(reader, 16));
console.log(search_in_infinite_array(reader, 11));
reader = new ArrayReader([1, 3, 8, 10, 15]);
console.log(search_in_infinite_array(reader, 15));
console.log(search_in_infinite_array(reader, 200));
