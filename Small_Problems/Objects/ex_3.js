// What will the following code log and why:

// Answer: The first for loop will try to copy the first array into the second. Since constants are allowed to be mutated only if their constituent elements are, it will succeed and make a copy.

// On lines 14-17 the first array is iterated through once more. The program then reassigns elements of array1 to their uppercase forms if they start with C. ['Moe', 'Larry', 'CURLY', 'Shemp', 'Harpo', 'CHICO', 'Groucho', 'Zeppo'];
// It then logs array 2 which is still the same without the second mutation.

const array1 = ['Moe', 'Larry', 'Curly', 'Shemp', 'Harpo', 'Chico', 'Groucho', 'Zeppo'];
const array2 = [];

for (let i = 0; i < array1.length; i += 1) {
  array2.push(array1[i]);
}

for (let i = 0; i < array1.length; i += 1) {
  if (array1[i].startsWith('C')) {
    array1[i] = array1[i].toUpperCase();
  }
}

console.log(array2);
// console.log(array1);
