/*
P:
Write a function that computes the sum of all numbers between 1 and some other number, inclusive, that are multiples of 3 or 5. For instance, if the supplied number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1.


D:
  Input = integer > 1
  Output = number

A:
   -
   -
   -
   -
   -
   -
*/

function multisum(num) {
  let answer = 0;
  for (let index = 0; index <= num; index++) {
    if (!(index % 3 == 0 || index % 5 == 0)) { continue };
    answer += index;
  }
  return answer;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168
