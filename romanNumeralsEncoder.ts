// Create a function taking a positive integer as its parameter and
// returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and
// skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC;
//  resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

// Symbol    Value
// I          1
// V          5
// X          10
// L          50
// C          100
// D          500
// M          1,000

export function solution(number: number): string {
  let res = '';
  let numStr = String(number);

  switch (numStr.length) {
    case 4:
      res +=
        getFirstDigit(numStr[0]) +
        getSecondDigit(numStr[1]) +
        getThirdDigit(numStr[2]) +
        getFourthDigit(numStr[3]);
      return res;
    case 3:
      res +=
        getSecondDigit(numStr[0]) +
        getThirdDigit(numStr[1]) +
        getFourthDigit(numStr[2]);
      return res;
    case 2:
      res += getThirdDigit(numStr[0]) + getFourthDigit(numStr[1]);
      return res;
    case 1:
      return getFourthDigit(numStr);
    default:
  }
}

function getFourthDigit(x) {
  let res = '';
  let y = parseInt(x);

  switch (y) {
    case 1:
    case 2:
    case 3:
      for (let i = 1; i <= y; i++) {
        res += 'I';
      }
      break;
    case 4:
      res = 'IV';
      break;
    case 5:
      res = 'V';
      break;
    case 6:
    case 7:
    case 8:
      res = 'V';
      for (let i = 6; i <= y; i++) {
        res += 'I';
      }
      break;
    case 9:
      res = 'IX';
  }
  return res;
}

function getThirdDigit(x) {
  let res = '';
  let y = parseInt(x);

  switch (y) {
    case 1:
    case 2:
    case 3:
      for (let i = 1; i <= y; i++) {
        res += 'X';
      }
      break;
    case 4:
      res = 'XL';
      break;
    case 5:
      res = 'L';
      break;
    case 6:
    case 7:
    case 8:
      res = 'L';
      for (let i = 6; i <= y; i++) {
        res += 'X';
      }
      break;
    case 9:
      res = 'XC';
  }
  return res;
}

function getSecondDigit(x) {
  let res = '';
  let y = parseInt(x);

  switch (y) {
    case 1:
    case 2:
    case 3:
      for (let i = 1; i <= y; i++) {
        res += 'C';
      }
      break;
    case 4:
      res = 'CD';
      break;
    case 5:
      res = 'D';
      break;
    case 6:
    case 7:
    case 8:
      res = 'D';
      for (let i = 6; i <= y; i++) {
        res += 'C';
      }
      break;
    case 9:
      res = 'CM';
  }
  return res;
}

function getFirstDigit(x) {
  let res = '';
  let y = parseInt(x);

  switch (y) {
    case 1:
    case 2:
    case 3:
      for (let i = 1; i <= y; i++) {
        res += 'M';
      }
      break;
  }
  return res;
}
