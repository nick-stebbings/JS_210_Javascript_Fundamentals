// In the following code, a user creates a person object literal and defines two methods for returning the person's first and last names. What is the result when the user tries out the code on the last line?

// Answer: The resulting string will be something like '[Function] [Function]', since the methods are not being invoked, just referenced. The string interpolation will try to coerce them into a string.

// Solution: It actually prints out the body of the functions!
const person = {
  firstName() {
    return 'Victor';
  },
  lastName() {
    return 'Reyes';
  },
};

console.log(`${person.firstName} ${person.lastName}`);
