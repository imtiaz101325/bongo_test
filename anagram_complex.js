// A complex version that iterates over the words
// stored count in a map instead of an array

function anagram_complex(str1, str2) {
  if (str1.length !== str2.length) {
    // strings of different sizes cannot be an anagram
    return false;
  }

  const count = {};

  for (let i = 0; i < str1.length; i++) {
    if (!count.hasOwnProperty(str1[i])) {
      count[str1[i]] = 1;
    } else {
      count[str1[i]]++;
    }

    if (!count.hasOwnProperty(str2[i])) {
      count[str2[i]] = -1;
    } else {
      count[str2[i]]--;
    }
  }

  return Object.values(count).every((count) => count === 0);
}

module.exports = anagram_complex;
