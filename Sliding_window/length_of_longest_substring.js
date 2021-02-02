var length_of_longest_substring = function(s, k) {
  let charCountMap = {}
  let startPointer = 0, maxCharCount = 0, longest = 0
  
  for (endPointer = 0; endPointer < s.length; endPointer++) {
    const endChar = s[endPointer]
    if (!charCountMap[endChar]) {
      charCountMap[endChar] = 0
    }
    charCountMap[endChar] += 1
    maxCharCount = Math.max(maxCharCount, charCountMap[endChar])

    if (endPointer - startPointer + 1 - maxCharCount > k) {
      const startChar = s[startPointer]
      charCountMap[startChar] -= 1
      startPointer += 1
    }

    longest = Math.max(longest, endPointer - startPointer + 1)
  }

  return longest
};

console.log(characterReplacement("abccde", 1))


// aaababbaaacc
// 3
// a - 7
// a - 6