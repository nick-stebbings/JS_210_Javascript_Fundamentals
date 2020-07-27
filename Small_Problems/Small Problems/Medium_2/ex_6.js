/*
P:

Write a function that computes the difference between the square of the sum of the first n positive integers and the sum of the squares of the first n positive integers.

D:
  Input =
  Output =

A:
   -
   -
   -
   -
   -
   -
*/
function sumOfSquares(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let square = i ** 2;
    sum += square;
  }
  return sum;
}
function squareOfSums(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum ** 2;
}

function sumSquareDifference(n) {
  return squareOfSums(n) - sumOfSquares(n);
}

console.log(sumSquareDifference(3)); // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10)); // 2640
console.log(sumSquareDifference(1)); // 0
console.log(sumSquareDifference(100)); // 25164150
