let a = [1, 2, 3];

function myValue(b) {
  b[2] += 7;
}

myValue(a);
console.log(a);

// This will log [1,2,10] and return undefined, since arrays are mutable from within a function by reassigning their elements (which are really object properties.)