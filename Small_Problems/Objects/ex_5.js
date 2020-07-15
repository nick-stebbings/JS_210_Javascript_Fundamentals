// Answer:

const myArray = ['a', 'b', 'c'];

console.log(myArray[0]); //'a'
console.log(myArray[-1]); // ref error (actually undefined)

myArray[-1] = 'd'; // defining properties on the object with names -1, 'e' and 3
myArray['e'] = 5;
myArray[3] = 'f';

console.log(myArray[-1]); // 'd'
console.log(myArray['e']); // 5
console.log(myArray); // { 0: 'a', 1: 'b', 2: 'c', -1: 'd', 'e': 5, 3: 'f' ]
// Actually [ 'a', 'b', 'c', 'f', '-1': 'd', e: 5 ]
// The behaviour is to add elements with non sequential indices/property names to the end, display them with prop names and values rather than just values.
