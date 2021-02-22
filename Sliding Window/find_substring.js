const find_substring = function (str, pattern) {
  // 'abdbca', 'abc'
  const patternLettersCount = new Map();
  let front = 0,
    end = 0,
    smallestSubstr = '';
  while (end < str.length) {
    const char = str[end];
    if (pattern.includes(char)) {
      if (patternLettersCount.has(char)) {
        const newCount = patternLettersCount.get(char) + 1;
        patternLettersCount.set(char, newCount);
      } else {
        patternLettersCount.set(char, 1);
      }
    }
    if (patternLettersCount.size === pattern.length) {
      // Move front pointer if there are duplicated chars
      let temp = front;
      while (temp <= end) {
        const oldCount = patternLettersCount.get(str[temp]);
        if (oldCount > 1) {
          patternLettersCount.set(str[temp], oldCount - 1);
          front = temp + 1;
        } else if (oldCount === 1) {
          front = temp;
          break;
        }
        temp++;
      }
      // Update result
      if (smallestSubstr.length && smallestSubstr.length > end - front + 1) {
        smallestSubstr = str.substring(front, end + 1);
      } else if (!smallestSubstr.length) {
        smallestSubstr = str.substring(front, end + 1);
      }
    }

    end++;
  }
  return smallestSubstr;
};

console.log(find_substring('aabdec', 'abc'));
