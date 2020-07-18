/*
P: What does this log and why?
*/
let startingBalance = 1;
const chicken = 5;
const chickenQuantity = 7;

function totalPayable(item, quantity) {
  return startingBalance + item * quantity;
}

startingBalance = 5;
console.log(totalPayable(chicken, chickenQuantity));

startingBalance = 10;
console.log(totalPayable(chicken, chickenQuantity));

// Answer:
// Line 13 will log 40 since when it is executed the startingBalance variable has been assigned to the number 5. This variable is enclosed by the function totalPayable.
// By the time the function is called again on line 16 the startingBalance variable has been reassigned. Thus it logs 45.

// I was actually not sure about this as I didn't know if the function body being hoisted above the  let variable would mean it was not enclosing it. The let variable declaration was still
