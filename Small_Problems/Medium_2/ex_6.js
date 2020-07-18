// P: Read through the code below. What values will be logged to the console? Can you explain these results?

const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); // 'JavaScript', 'Ruby', 'Python' since this is an array coerced into string X
// Actually it is logged differently depending on environment but not coerced.
console.log(languages.length); // '3'

languages.length = 4;
console.log(languages); // Same as 4 (ACTUALLY it also logs an 'empty slot' value at the end)

console.log(languages.length); // 4, since the property value has been reassigned

languages.length = 1;
console.log(languages); //['JavaScript'] since the changing of length has truncated the array
console.log(languages.length); //1

languages.length = 3;
console.log(languages); // ['JavaScript', 2 empty slots]
console.log(languages.length); //3

languages.length = 1;
languages[2] = 'Python'; // This is adding a property not assigning a value at the end of the array X
console.log(languages); //['JavaScript', 2: 'Python']; X
console.log(languages[1]); //undefined  (correct)
console.log(languages.length); //1 X ACTUAL 3!
//  This result surprised me. It turns out that you can assign elements to indices that are not currently linked sequentially with existing elements. JS will fill in the interim values with undefined and include them in the length.
