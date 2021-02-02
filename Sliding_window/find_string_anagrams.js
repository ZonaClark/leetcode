const find_string_anagrams = function(str, pattern) {
  const result_indexes = [];
  const charsOccurenceCount = {}
  let frontPointer = 0, matched = 0

  for (l of pattern) {
    charsOccurenceCount[l] ? charsOccurenceCount[l] += 1 : charsOccurenceCount[l] = 1
  }

  for (backPointer = 0; backPointer < str.length; backPointer++) {
    const lastLetter = str[backPointer]
    if (lastLetter in charsOccurenceCount) {
      charsOccurenceCount[lastLetter] -= 1
      if (charsOccurenceCount[lastLetter] === 0) {
        matched += 1
      }
    }
    if (matched === pattern.length) {
      result_indexes.push(frontPointer)

    }

    if (backPointer >= pattern.length - 1) {
      if (str[frontPointer] in charsOccurenceCount) {
        if (charsOccurenceCount[str[frontPointer]] === 0) {
          matched -= 1
        }
        charsOccurenceCount[str[frontPointer]] += 1
      }
      frontPointer += 1
    }
  }

  return result_indexes;
};

console.log(find_string_anagrams("abbcabc", "abc"))