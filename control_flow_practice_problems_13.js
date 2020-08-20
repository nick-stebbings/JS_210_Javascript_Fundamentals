/*
P:
Write a function that takes a number of rows as the argument nStars and logs a square of numbers and asterisks. For example, if nStars is 7, log the following pattern:


Rules: You may assume that nStars is greater than 1 and less than 10.

E:

generatePattern(7);

// console output
1******
12*****
123****
1234***
12345**
123456*
1234567

D:
  Input = number n
  Output = log n strings to console

A:
   - ITERATE from 1 upto n
   - SET a numbers string
   - at each iteration, concatenate the index to numbersString
   - log the numberstring concatenated to n-index times '*'
   -
   -
   -
*/
function generatePattern(n) {
  let numString = ''
  for (let i = 1; i <= n; i++) {
    numString += String(i);
    let starString = (i > 9 ? '**' : '*').repeat(n - i);
    if (i <= 9 && n > 9) {
      starString += '*'.repeat(n - 9)
    }
    console.log(numString + starString);
  }
}
generatePattern(7);
generatePattern(9);
generatePattern(11);
generatePattern(13);
