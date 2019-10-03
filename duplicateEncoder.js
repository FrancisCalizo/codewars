// The goal of this exercise is to convert a string to a new string where
// each character in the new string is "(" if that character appears only
// once in the original string, or ")" if that character appears more than
// once in the original string. Ignore capitalization when determining if
// a character is a duplicate.

function duplicateEncode(word) {
  let result = "";

  let obj = word
    .toLowerCase()
    .split("")
    .reduce((allLetters, letter) => {
      if (letter in allLetters) {
        allLetters[letter]++;
      } else {
        allLetters[letter] = 1;
      }
      return allLetters;
    }, {});

  word
    .toLowerCase()
    .split("")
    .forEach(letter => {
      if (obj[letter] === 1) {
        result += "(";
      } else {
        result += ")";
      }
    });

  return result;
}

// Cool Solution
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map(function(a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
    })
    .join("");
}
