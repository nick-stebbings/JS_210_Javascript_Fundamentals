let a = 7;

function myValue(b) {
  b += 10;
}

myValue(a);
console.log(a);

// This will log 7, since variable reassignment from within a function body only affects the local variable, the parameter b.
