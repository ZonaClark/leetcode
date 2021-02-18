const Heap = require('../node_modules/collections/heap');

const reorganize_string = function (str, k) {
  let charFrequencyMap = new Map();
  for (let i = 0; i < str.length; i++) {
    if (!charFrequencyMap[str[i]]) {
      charFrequencyMap[str[i]] = 1;
    } else {
      charFrequencyMap[str[i]] += 1;
    }
  }

  const maxHeap = new Heap([], null, (a, b) => a[0] - b[0]);
  Object.keys(charFrequencyMap).forEach((char) => {
    maxHeap.push([charFrequencyMap[char], char]);
  });

  let result = '',
    buffer = [];
  while (maxHeap.length) {
    if (buffer.length === k - 1) {
      const prevNum = buffer.shift();
      if (prevNum[0] > 0) {
        maxHeap.push(prevNum);
      }
    }
    const next = maxHeap.pop();
    result += next[1];
    buffer.push([next[0] - 1, next[1]]);
  }
  if (result.length === str.length) {
    return result;
  }
  return '';
};

console.log(`Reorganized string: ${reorganize_string('Programming', 3)}`);
console.log(`Reorganized string: ${reorganize_string('mmpp', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aab', 2)}`);
console.log(`Reorganized string: ${reorganize_string('aapa', 3)}`);
