// Word Break II

var wordBreak = function(s, wordDict) {
  let mem = {};
  function concatAns(list, w) {
    let newList = [];
    for (l of list) newList.push(l + ' ' + w);
    return newList;
  }
  function wordBreak(s) {
    if (mem[s]) return mem[s];
    let ans = [];

    if (wordDict.includes(s)) ans.push(s);

    for (var i = 1; i < s.length; i++) {
      const right = s.substring(i);
      let subAns;
      if (wordDict.includes(right)) {
        subAns = concatAns(wordBreak(s.substring(0, i), wordDict), right);
        subAns.map((subString) => ans.push(subString));
      }
    }
    mem[s] = ans;
    return mem[s];
  }
  return wordBreak(s);
};


console.log(wordBreak("pineapplepenapple", ["apple", "pen", "applepen", "pine", "pineapple"]));