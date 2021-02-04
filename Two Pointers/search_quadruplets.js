const search_quadruplets = function(arr, target) {
  const quadruplets = [];
  arr.sort((a, b) => a - b)
  for (firstPick = 0; firstPick < arr.length - 3; firstPick++) {
    const firstNum = arr[firstPick]
    if (firstPick > 0 && firstNum === arr[firstPick - 1]) continue
    for (secondPick = firstPick + 1; secondPick < arr.length - 2; secondPick++) {
      const secondNum = arr[secondPick]
      if (secondPick > 1 && secondNum === arr[secondPick - 1]) continue
      const pairSum = target - firstNum - secondNum
      const pairResult = searchPair(arr, secondPick + 1, pairSum)
      if (pairResult !== null) {
        const sumArr = [firstNum, secondNum, pairResult[0], pairResult[1]]
        quadruplets.push(sumArr)
      }
    }
  }

  return quadruplets;
};

const searchPair = (arr, startIndex, sum) => {
  let endPointer = arr.length - 1
  while (startIndex < endPointer) {
    if (arr[startIndex] + arr[endPointer] === sum) {
      return [arr[startIndex], arr[endPointer]]
    } else if (arr[startIndex] + arr[endPointer] < sum) {
      startIndex++
    } else if (arr[startIndex] + arr[endPointer] > sum) {
      endPointer--
    }
  }
  return null
}

// -3, -1, 1, 1, 2, 4
console.log(search_quadruplets([4, 1, 2, -1, 1, -3], 1))