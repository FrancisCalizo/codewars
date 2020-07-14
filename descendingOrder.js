// Your task is to make a function that can take any non-negative integer
// as a argument and return it with its digits in descending order.
// Essentially, rearrange the digits to create the highest possible number.
// Examples:
// Input: 42145 Output: 54421
// Input: 145263 Output: 654321
// Input: 123456789 Output: 987654321

function descendingOrder(n) {
  // Convert Number into an Array of string digits
  let numArr = n.toString().split('');
  // Sort Array by Descending
  let res = numArr.sort((a, b) => b - a);
  // Convert Array back to number
  return parseInt(res.join(''));
}
