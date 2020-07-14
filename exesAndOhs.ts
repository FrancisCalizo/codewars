// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean
// and be case insensitive. The string can contain any char.
// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

export function xo(str: string) {
  let oCount = str
    .split('')
    .filter((letter) => ['O', 'o'].some((el) => el === letter)).length;
  let xCount = str
    .split('')
    .filter((letter) => ['X', 'x'].some((el) => el === letter)).length;

  return oCount === 0 && xCount === 0 ? true : oCount === xCount;
}

// Better Solution
// export function xo(str: string) {
//   return str.toLowerCase().split('x').length == str.toLowerCase().split('o').length;
// }
