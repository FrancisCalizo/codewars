// Complete the solution so that the function will break up camel casing, using a space between words.
function solution(string) {
  const letters = Array.from(string);

  for (let i = 0; i < letters.length; i ++) {
    if (letters[i] == letters[i].toUpperCase()){
      letters.splice(i, 0, ' ');
      i+=2;
    }
  }

  return letters.join('');
}
