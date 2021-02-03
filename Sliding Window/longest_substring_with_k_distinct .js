const longest_substring_with_k_distinct = function(str, k) {
  let maxDistinct = 0, frontPointer = 0
  let distinctChars = {}
  for (backPointer = 0; backPointer < str.length; backPointer++) {
    const newChar = str[backPointer]
    // Not another distinct char
    if (distinctChars[newChar]) {
      distinctChars[newChar] += 1
    } else {
      // Is a distinct char and current distinct char count is already k
      if (Object.keys(distinctChars).length == k) {
        maxDistinct = Math.max(maxDistinct, backPointer-frontPointer)
        distinctChars[newChar] = 1
        while (Object.keys(distinctChars).length >= k) {
          const oldChar = str[frontPointer]
          if (distinctChars[oldChar] == 1) {
            delete distinctChars[oldChar]
          } else {
            distinctChars[oldChar] -= 1
          }
          frontPointer += 1
        }
      } else {
        // Is a distinct char and current distinct char count is less than k
        distinctChars[newChar] = 1
      }
    }
  }
  return maxDistinct;
};

function longest_substring_with_k_distinct_2(str, k) {
  let windowStart = 0,
    maxLength = 0,
    charFrequency = {};

  // in the following loop we'll try to extend the range [window_start, window_end]
  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in charFrequency)) {
      charFrequency[rightChar] = 0;
    }
    charFrequency[rightChar] += 1;
    // shrink the sliding window, until we are left with 'k' distinct characters in the char_frequency
    while (Object.keys(charFrequency).length > k) {
      const leftChar = str[windowStart];
      charFrequency[leftChar] -= 1;
      if (charFrequency[leftChar] === 0) {
        delete charFrequency[leftChar];
      }
      windowStart += 1; // shrink the window
    }
    // remember the maximum length so far
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1);
  }

  return maxLength;
}