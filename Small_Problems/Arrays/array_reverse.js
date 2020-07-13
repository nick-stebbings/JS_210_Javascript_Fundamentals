
/*
P:
In this exercise, you will implement your own version of the Array.prototype.reverse method. Your implementation should differ from the built-in method in the following two ways:

    It should accept either a string or an array as an argument.
    It should return a new string or array.
E:

D:
  Input = str/arr
  Output = new str/arr

A:
   -IF input is a string, split it on the empty strgin
   IF the ary is empty return [], '' for string
   - ITERATE through the array, starting with the last index
   - SET an empty array to collect
   - FOR EACH element of the ary, add to collection
   - JOIN and return ary
   -
*/
function reverse(inputForReversal) {
  if (!inputForReversal || inputForReversal.length == 1) {
    return inputForReversal;
  }
  let isString = typeof inputForReversal === "string";
  let tempAry = []
  let inputAry = isString ? inputForReversal.split`` : inputForReversal

  for (let index = inputAry.length-1; index >= 0; index--) {
    const element = inputAry[index];
    tempAry.push(element);
  }
  return isString ? tempAry.join('') : tempAry;
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []
const array = [1, 2, 3];
console.log(reverse(array));             // [3, 2, 1]
console.log(array);                      // [1, 2, 3]