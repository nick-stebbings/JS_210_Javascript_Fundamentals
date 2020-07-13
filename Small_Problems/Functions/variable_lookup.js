var myVar = "This is global";

function someFunction() {
  console.log(myVar);
}

someFunction();

// This will log 'This is global'. The variable initialised on line 1 is available to the inner function and is part of the closure created by the function definition.