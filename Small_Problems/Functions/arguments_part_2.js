let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a);

// This will log 7 and return undefined, since the inner scope variable, the parameter a, is implicity declared and shadows the global scope variable a.