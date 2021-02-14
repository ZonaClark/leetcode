const find_letter_case_string_permutations = function (str) {
  const categories = [str];
  findPermutationIterative(str, 0, categories);
  return categories;
};

const findPermutationIterative = (str, index, arr) => {
  if (index >= str.length) return;
  if (isLetter(str[index])) {
    const next = str.replaceAt(index, alterCase(str[index]));
    arr.push(next);
    findPermutationIterative(next, index + 1, arr);
    findPermutationIterative(str, index + 1, arr);
  } else {
    findPermutationIterative(str, index + 1, arr);
  }
};

const isLetter = (c) => {
  return /[a-zA-Z]/.test(c);
};

const alterCase = (c) => {
  if (c === c.toUpperCase()) return c.toLowerCase();
  else return c.toUpperCase();
};

String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

console.log(
  `String permutations are: ${find_letter_case_string_permutations('ad52')}`
);
console.log(
  `String permutations are: ${find_letter_case_string_permutations('ab7c')}`
);
