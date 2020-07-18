// What will the following code snippets log?
// Code Snippet 1

// var counter = 5;
// var rate = 3;
// console.log('The total value is ' + String(counter * rate));

// function counter(count) {
//   // ...
// }

//  Answer:
//  15 as the variable will be hoisted above the function (i.e. first)

// // Code Snippet 2

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));

// var counter = 5;
// var rate = 3;
// Answer:
// it will raise an error as the interpreter will think that the function is being referenced. The assignment on line 23 was not hoisted.
// ACTUAL:
// It coerces the function into NaN! This makes sense as counter is still a reference to a valid object.

// Code Snippet 3

// var counter = 5;
// var rate = 3;

// function counter(count) {
//   // ...
// }

// console.log('The total value is ' + String(counter * rate));
//  Answer:
// Same as above (the hoisting of the function and function body means the counter variable points to a function and so counter * rate will be NaN again.)
// ACTUAL: 15
// Apparently the hoisting of the function does not reassign the variable.
// Upon revision and research, there is an order of precedence for assignment when a function declaration is hoisted... the function is hoisted first but the variable assignment then overrules it in this case.

// Code Snippet 4

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));
// Answer: 15 as the reassignment on line 48 overwrites the function declaration body.
// ACTUAL: SyntaxError: Identifier 'counter' has already been declared
// This means that let keywords cannot be used to redeclare a variable in the same way that a var keyword would. A var declaration here would be ignored and the code runs.
