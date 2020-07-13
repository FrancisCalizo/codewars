// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or entirely
// comprised of even integers except for a single integer N. Write a method that takes the
// array as an argument and returns this "outlier" N.
// Examples
// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)
// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

export function findOutlier(integers: number[]): number {
  let isEven: boolean;

  // Get first three integers of array
  let firstThree = integers.slice(0, 3);

  // Check whether first three integers are odd or even
  let moduleThree = firstThree.map((num) => num % 2);

  // Check if whole array is majority Odd or Even
  let count = moduleThree.filter((num) => num === 0);

  count.length > 1 ? (isEven = true) : (isEven = false);

  if (isEven) {
    return integers.find((num) => num % 2 !== 0) as number;
  } else {
    return integers.find((num) => num % 2 === 0) as number;
  }
}

// Better Solution # 1
// export function findOutlier(integers: number[]): number {
//   if (integers.slice(0, 3).filter(i => i % 2 !== 0).length > 1) {
//     return integers.find(v => v % 2 === 0) || 0;
//   } else {
//     return integers.find(v => v % 2 !== 0) || 0;
//   }
// }

// Better Solution #2
// export function findOutlier(integers: number[]): number {
//   const odds = integers.filter(v => v % 2);
//   const evens = integers.filter(v => !(v % 2));

//   return odds.length === 1 ? odds[0] : evens[0];
// }
