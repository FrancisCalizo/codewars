// Given an array, find the int that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {

  // Count how many instances occur of a value in the array
  let counted = A.reduce(function (allInt, int) {
    int in allInt ? allInt[int]++ : allInt[int] = 1;

    return allInt;
  }, {});

  // Use ES6 method to get the key in which the value is an odd number
  return parseInt(Object.keys(counted).find(key => (counted[key] % 2) != 0))
}
