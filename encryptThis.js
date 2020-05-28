// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter needs to be converted to its ASCII code.
// The second letter needs to be switched with the last letter
// Keepin' it simple: There are no special characters in input.

// Examples
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function (text) {
  let result = '';

  // Form string Text into an array
  const words = text.split(' ');

  // Loop over each word to create the encryption
  words.forEach((word) => {
    // Split letters of each word into an array
    let letters = [...word];
    let lastIdx = letters.length - 1;

    // Loop over each letter of each word and encrypt
    letters.forEach((letter, idx) => {
      switch (idx) {
        case 0:
          result += ` ${letter.charCodeAt(0)}`;
          break;
        case 1:
          result += letters[lastIdx];
          break;
        case lastIdx:
          result += letters[1];
          break;
        default:
          result += letter;
      }
    });
  });

  // Trim the Result from leading space
  return result.trim();
};

console.log(encryptThis('A wise'));
