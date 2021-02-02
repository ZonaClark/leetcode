const fruits_into_baskets = function(fruits) {
  let types = {}
  let frontPointer = 0, maxNumFruits = 0
  for (endPointer = 0; endPointer < fruits.length; endPointer++) {
    if (!types[fruits[endPointer]]) {
      types[fruits[endPointer]] = 0
    }
    types[fruits[endPointer]] += 1
    while (Object.keys(types).length > 2) {
      types[fruits[frontPointer]] -= 1
      if (types[fruits[frontPointer]] === 0) {
        delete types[fruits[frontPointer]]
      }
      frontPointer += 1
    }
    maxNumFruits = Math.max(maxNumFruits, endPointer - frontPointer + 1)
  }
  return maxNumFruits;
};