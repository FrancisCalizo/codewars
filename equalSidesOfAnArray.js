// You are going to be given an array of integers. Your job is to take that array
// and find an index N where the sum of the integers to the left of N is equal to the sum
// of the integers to the right of N. If there is no index that would make this happen, return -1.

function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    let sumLeft = 0;
    let sumRight = 0;

    for (let j = 0; j < i; j++) {
      sumLeft += arr[j];
    }

    for (let k = i + 1; k < arr.length; k++) {
      sumRight += arr[k];
    }

    if (sumLeft === sumRight) return i;
  }

  return -1;
}

// Cool Solution using array Reduce Method
function findEvenIndex(arr) {
  for (var i = 1; i < arr.length - 1; i++) {
    if (
      arr.slice(0, i).reduce((a, b) => a + b) ===
      arr.slice(i + 1).reduce((a, b) => a + b)
    ) {
      return i;
    }
  }
  return -1;
}
