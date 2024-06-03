// Function expressions
// In JavaScript, a function is not a “magical language structure”, but a special kind of value.

// The syntax that we used before is called a Function Declaration:

function Hello1() {
    console.log("Hello World");
}

// There is another syntax for creating a function that is called a Function Expression.

// It allows us to create a new function in the middle of any expression.

// For example:
let Hello2 = function () {
    console.log("Hello World");
}

// Function is a value
// Let’s reiterate: no matter how the function is created, a function is a value. Both examples above store a function in the Hello variable.

// We can even print out that value using console.log:

function Hello3() {
    return "Hello World from Hello3 Function";
}
console.log(Hello3());

function Hello4() {
    return "Hello World from Hello4 Function";
}

let func = Hello4();
console.log(func);
console.log(Hello4());

// Callback functions
// Let’s look at more examples of passing functions as values and using function expressions.

let randomNum = Math.floor(Math.random() * 2);

function Number1() {
    console.log("The Number is One");
}
function Number0() {
    console.log("The Number is Zero");
}

function Callback (Number) {
    if (randomNum === 1) {
        Number1();
    } else {
        Number0();
    }
}
Callback(randomNum);


// Function Expression vs Function Declaration
// Let’s formulate the key differences between Function Declarations and Expressions.

// First, the syntax: how to differentiate between them in the code.

// Function Declaration: a function, declared as a separate statement, in the main code flow:

// Function Declaration
function sum(a, b) {
    return a + b;
}
  
// Function Expression
let sum2 = function(a, b) {
    return a + b;
};
  
sayHi("John"); // Hello, John

function sayHi(name) {
  console.log( `Hello, ${name}` );
}


sayHi2("John"); // error!

let sayHi2 = function(name) {  // (*) no magic any more
  console.log( `Hello, ${name}` );
};

let age = 19

if (age < 18) {
    function welcome() {
        console.log("Hello");
    }
} else {
    function welcome() {
        console.log("Greetings");
    }
}
welcome()