/*
P:

E:

D:
  Input = str
  Output = object 

A:
   - calculate number of chars (split into chars array)
   - filter by uppercase using regex, find length
   - also filter by lowercase, find length
   - work out number of 'neither's by subtracting above
   - return an object with interpolated property values with above
   -
Write a function that takes a string, and returns an object containing the following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character.

*/

function letterPercentages(str) {
  let charsArray = [...str];
  let totalChars = charsArray.length;
  let uppers = charsArray.filter((c) => /[A-Z]/.test(c)).length;
  let lowers = charsArray.filter((c) => /[a-z]/.test(c)).length;
  let neitherPercent = (((totalChars - uppers - lowers) / totalChars) * 100).toFixed(2);
  return {
    lowercase: ((lowers / totalChars) * 100).toFixed(2),
    uppercase: ((uppers / totalChars) * 100).toFixed(2),
    neither: neitherPercent,
  };
}
console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }
