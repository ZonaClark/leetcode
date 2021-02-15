const generate_generalized_abbreviation = function (word) {
  result = [[]];
  for (charIndex in word) {
    const resultSize = result.length;
    for (i = 0; i < resultSize; i++) {
      const newArr = result[i].slice(0);
      newArr.push(charIndex);
      result.push(newArr);
    }
  }
  const words = [];
  for (arr of result) {
    let newWord = '',
      count = 0;
    for (index in word) {
      if (arr.includes(index)) {
        if (count !== 0) {
          newWord += count.toString();
          count = 0;
        }
        newWord += word[index];
      } else {
        count++;
      }
    }
    if (count > 0) {
      newWord += count;
    }
    words.push(newWord);
  }
  return words.toString();
};

console.log(
  `Generalized abbreviation are: ${generate_generalized_abbreviation('BAT')}`
);
console.log(
  `Generalized abbreviation are: ${generate_generalized_abbreviation('code')}`
);

const Deque = require('./collections/deque'); //http://www.collectionsjs.com

class AbbreviatedWord {
  constructor(str, start, count) {
    this.str = str;
    this.start = start;
    this.count = count;
  }
}

function generate_generalized_abbreviation2(word) {
  let wordLen = word.length,
    result = [];
  const queue = new Deque();
  queue.push(new AbbreviatedWord('', 0, 0));
  while (queue.length > 0) {
    const abWord = queue.shift();
    if (abWord.start === wordLen) {
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }
      result.push(abWord.str);
    } else {
      // continue abbreviating by incrementing the current abbreviation count
      queue.push(
        new AbbreviatedWord(abWord.str, abWord.start + 1, abWord.count + 1)
      );

      // restart abbreviating, append the count and the current character to the string
      if (abWord.count !== 0) {
        abWord.str += abWord.count;
      }

      let newWord = abWord.str + word[abWord.start];
      queue.push(new AbbreviatedWord(newWord, abWord.start + 1, 0));
    }
  }
  return result;
}

function generate_generalized_abbreviation3(word) {
  const result = [];
  generate_abbreviation_recursive(word, '', 0, 0, result);
  return result;
}

function generate_abbreviation_recursive(word, abWord, start, count, result) {
  if (start === word.length) {
    if (count !== 0) {
      abWord += count;
    }
    result.push(abWord);
  } else {
    // continue abbreviating by incrementing the current abbreviation count
    generate_abbreviation_recursive(word, abWord, start + 1, count + 1, result);

    // restart abbreviating, append the count and the current character to the string
    if (count !== 0) {
      abWord += count;
    }
    const newWord = abWord + word[start];
    generate_abbreviation_recursive(word, newWord, start + 1, 0, result);
  }
}
