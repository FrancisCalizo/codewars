// Given an unsorted array of integers, find the smallest number in the array, the largest number in the array, and the smallest number between the two array bounds that is not in the array.
// For instance, given the array [-1, 4, 5, -23, 24], the smallest number is -23, the largest number is 24, and the smallest number between the array bounds is -22. You may assume the input is well-formed.
// You solution should return an array [smallest, minimumAbsent, largest]

function minMinMax(array) {
  let result = [];
  let minAbsent = null;

  // Array Sort Ascending
  const sorted = array.sort((a, b) => a - b);

  // Find MinAbsent
  let test = sorted[0];
  while (minAbsent === null) {
    if (sorted.includes(test)) {
      test++;
    } else {
      minAbsent = test;
    }
  }

  // Populate Resulting Array
  result.push(sorted[0]);
  result.push(minAbsent);
  result.push(sorted.slice(-1)[0]);

  return result;
}

// Cool Solution
minMinMax = array => {
  b = Math.min(...array);
  while (array.includes(b) == true) {
    b += 1;
  }
  return [Math.min(...array), b, Math.max(...array)];
};
