// The calculateBonus function calculates the bonus for a given salary. It makes use of two arguments for determining the bonus: a salary amount and a boolean switch. If the boolean is true, the bonus should be half of the salary; otherwise the bonus should be 0. Fill in the blanks in the function so that it will work, then explain why it works.

// Answer:
// This works because any passed arguments are collected in an array referenced by the variable arguments. The ternary operation on line 7 accesses this array and returns a value based upon the first and second elements, which are the first and second arguments to the function. Arity is lenient in JS meaning it will allow you to pass more args than are defined in the function and this is where they can be found.

function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}

calculateBonus(2800, true); // 1400
calculateBonus(1000, false); // 0
calculateBonus(50000, true); // 25000
