var myVar = "This is global";

function someFunction() {
  myVar = "This is local";
}

someFunction();
console.log(myVar);

//  This code will log 'This is local', since now without variable shadowing by a variable initialised in the inner scope, the function body can see the global variable and reassign it on line 4.  