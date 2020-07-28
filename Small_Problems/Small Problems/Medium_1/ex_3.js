/*
P:


Take the number 735291 and rotate it by one digit to the left, getting 352917. 

Next, keep the first digit fixed in place and rotate the remaining digits to get 329175.

Keep the first two digits fixed in place and rotate again to get 321759.

Keep the first three digits fixed in place and rotate again to get 321597.

Finally, keep the first four digits fixed in place and rotate the final two digits to get 321579. The resulting number is called the maximum rotation of the original number.

Write a function that takes an integer as an argument, and returns the maximum rotation of that integer. You can (and probably should) use the rotateRightmostDigits function from the previous exercise.

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
function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr == 0) {
    return [];
  }
  return arr.slice(1).concat(arr[0]);
}

function rotateRightmostDigits(num, rotation) {
  if (String(num).length < rotation) {
    return undefined;
  }
  let splitDigits = [...String(num)];
  let rotatedArray = rotateArray(splitDigits.slice(-rotation));
  return +splitDigits.join``.slice(0, -rotation).concat(rotatedArray.join``);
}

function maxRotation(num) {
  let length = String(num).length
  for (length; length > 0; length--) {
    num = rotateRightmostDigits(num, length);
  }
  return num;
}

console.log(maxRotation(735291));           // 321579
console.log(maxRotation(3));                // 3
console.log(maxRotation(35));               // 53
console.log(maxRotation(105));              // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));       // 7321609845

