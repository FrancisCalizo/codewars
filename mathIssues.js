// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions?
// We can assure, that only non-negative numbers are passed as arguments.
// So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:
// Math.round() - returns the value of a number rounded to the nearest integer
// Math.ceil() - rounded a number up to the next largest integer
// Math.floor() - returns the largest integrer less than or equal to a given number

Math.round = function (number) {
  let low = parseInt(number);
  let high = low + 1;

  return high - number > 0.5 ? low : high;
};

Math.ceil = function (number) {
  return parseInt(number) === number ? number : parseInt(number) + 1;
};

Math.floor = function (number) {
  return parseInt(number);
};
