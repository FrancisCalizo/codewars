// In this Kata, you will remove the left-most duplicates from a list of integers and return the result.

// Remove the 3's at indices 0 and 3
// followed by removing a 4 at index 1
// solve([3, 4, 4, 3, 6, 3]); // => [4, 6, 3]
// solve([1,2,1,2,1,2,3]); // =>[1,2,3]);

function solve(arr) {
  let res = [];

  arr.forEach((num) => {
    res.includes(num) ? res.splice(res.indexOf(num), 1) : null;
    res.push(num);
  });

  return res;
}
