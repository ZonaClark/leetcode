const backspace_compare = function (str1, str2) {
  let p1 = str1.length - 1,
    p2 = str2.length - 1,
    skipCount1 = 0,
    skipCount2 = 0;

  while (p1 >= 0 && p2 >= 0) {
    while (str1[p1] === '#') {
      p1--;
      skipCount1++;
    }
    while (str2[p2] === '#') {
      p2--;
      skipCount2++;
    }
    while (skipCount1 > 0) {
      p1--;
      skipCount1--;
    }
    while (skipCount2 > 0) {
      p2--;
      skipCount2--;
    }

    if (str1[p1] !== str2[p2]) return false;
    p1--;
    p2--;
  }

  if (p1 === p2) return true;
  return false;
};

console.log(backspace_compare('xp#', 'xyz##'));
