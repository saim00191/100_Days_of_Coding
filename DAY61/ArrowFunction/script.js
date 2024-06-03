// Arrow functions, the basics
// There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.

// It’s called “arrow functions”, because it looks like this:

let arrowFunc = (a, b) => a + b
// In other words, it’s the shorter version

let arrowFunc2 = (arg1 , arg2 ) => {
   // body
}
// It’s called “arrow functions”, because it looks like this:

let arrowFunc3 = (a, b) => a + b
// In other words, it’s the shorter version

console.log(arrowFunc3(5 , 7));
 
// As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.


// If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.
// For example:

let arrowFunc4 = a => a * 2

console.log(arrowFunc4(5));

let sayHello = () => console.log('Hello!');
sayHello();



