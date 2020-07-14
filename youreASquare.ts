// Given an integral number, determine if it's a square number:
// In mathematics, a square number or perfect square is an integer that is the square of an integer;
// in other words, it is the product of some integer with itself.

export default function isSquare(n: number): boolean {
  if (n < 0) return false;

  for (let i = 0; i <= n; i++) {
    if (i * i === n) return true;
  }

  return false;
}
