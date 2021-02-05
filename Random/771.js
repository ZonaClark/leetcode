var numJewelsInStones = function(J, S) {
  const sArr = S.split('')
  const jArr = J.split('')
  let result = 0
  sArr.forEach(c => {
    if (jArr.includes(c)) {
      result += 1
    }
  });
  return result
};

console.log(numJewelsInStones("aA", "aAAbbbb"))