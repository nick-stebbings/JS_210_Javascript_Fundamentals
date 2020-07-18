// P: Read through the following code. Currently, it does not log the expected result. Explain why this happens, then refactor the code so that it works as expected.

const person = { name: 'Victor' };
const otherPerson = { name: 'Victor' };

// console.log(person === otherPerson);    // false -- expected: true
console.log(person.name === otherPerson.name); // true -- expected: true

//  Answer: It will log false since the strict equality operator is checking whether they are the same object. This is false.
// If we change to use == it will NOT return true as required ( I initially thought this). We need to add the property name to the operation if we wish to compare them directly. We can use either equality operator for this.
