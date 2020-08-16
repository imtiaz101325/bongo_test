// A simple version of the solution that sorts and compares the two strings
// the function does not account for whitespace or disregard letter case

function anagram_simple(str1, str2) {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

module.exports = anagram_simple;
