let myArray = [1, 2, 3, 4];
const myOtherArray = myArray;

myArray.pop();
console.log(myArray);
console.log(myOtherArray);

myArray = [1, 2];
console.log(myArray);
console.log(myOtherArray);

// Lines 5 and 6 both log [1,2,3] since the variables point to the same object.

// Line 9 logs [1,2] and line 10 logs [1,2,3] again since the reassignment of variable myArray on line 8
// does not affect the other variable.