// In your class, you have started lessons about geometric progression.
// Since you are also a programmer, you have decided to write a function
// that will print first n elements of the sequence with the given constant r and first element a.

// Result should be separated by comma and space.

function geometricSequenceElements(a, r, n) {
  let arr = [a];
  let res = a;

  for (let i = 1; i < n; i++) {
    res *= r;
    arr.push(res);
  }

  return arr.join(', ');
}
