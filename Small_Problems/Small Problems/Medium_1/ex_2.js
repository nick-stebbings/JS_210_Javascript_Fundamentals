/*
P:
Write a function that rotates the last n digits of a number. For the rotation, rotate by one digit to the left, moving the first digit to the end.

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
  return splitDigits.join``.slice(0, -rotation).concat(rotatedArray.join``);
}

console.log( rotateRightmostDigits(735291, 1));      // 735291
console.log( rotateRightmostDigits(735291, 2));      // 735219
console.log( rotateRightmostDigits(735291, 3));      // 735912
console.log( rotateRightmostDigits(735291, 4));      // 732915
console.log( rotateRightmostDigits(735291, 5));      // 752913
console.log( rotateRightmostDigits(735291, 6));      // 352917
