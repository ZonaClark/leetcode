const non_repeat_substring = function(str) {
  let strArray = str.split("")
  let startPointer = 0, longest = 0
  let uniqueChars = new Set()
  for (endPointer = 0; endPointer < str.length; endPointer++) {
    if (uniqueChars.has(strArray[endPointer])) {
      // Repeated char
      longest = Math.max(longest, endPointer - startPointer)
      while (uniqueChars.has(strArray[endPointer])) {
        uniqueChars.delete(strArray[startPointer])
        startPointer += 1
      }
      uniqueChars.add(strArray[endPointer])
    } else {
      uniqueChars.add(strArray[endPointer])
    }
  }
  return longest;
};
