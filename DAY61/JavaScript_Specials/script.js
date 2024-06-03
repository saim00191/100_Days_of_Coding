
// JavaScript specials
// This chapter briefly recaps the features of JavaScript that we’ve learned by now, paying special attention to subtle moments.

// Code structure
// Statements are delimited with a semicolon:

console.log("Hello"); console.log("World");

// Usually, a line-break is also treated as a delimiter, so that would also work:

console.log("Hello");
console.log("World");

// Most codestyle guides agree that we should put a semicolon after each statement.
// Semicolons are not required after code blocks {...} and syntax constructs with them like loops:

function FuncName() {
    //body
}

// Strict mode
// To fully enable all features of modern JavaScript, we should start scripts with "use strict".

'use strict';
// The directive must be at the top of a script or at the beginning of a function body.

// Without "use strict", everything still works, but some features behave in the old-fashioned, “compatible” way. We’d generally prefer the modern behavior.

// Some modern features of the language (like classes that we’ll study in the future) enable strict mode implicitly.

// Can be declared using:

// let
// const (constant, can’t be changed)
// var (old-style, will see later)
// A variable name can include:

// Letters and digits, but the first character may not be a digit.
// Characters $ and _ are normal, on par with letters.
// Non-Latin alphabets and hieroglyphs are also allowed, but commonly not used.
// Variables are dynamically typed. They can store any value:

let a = 5
a = "Tom" //value change to Tom

console.log(a);

// There are 8 data types:

// number for both floating-point and integer numbers,
// bigint for integer numbers of arbitrary length,
// string for strings,
// boolean for logical values: true/false,
// null – a type with a single value null, meaning “empty” or “does not exist”,
// undefined – a type with a single value undefined, meaning “not assigned”,
// object and symbol – for complex data structures and unique identifiers, we haven’t learnt them yet.

// The typeof operator returns the type for a value

console.log(typeof a); //string
console.log(typeof 5); //number

// Interaction
// We’re using a browser as a working environment, so basic UI functions will be:

// prompt(question, [default])
// Ask a question, and return either what the visitor entered or null if they clicked “cancel”.
// confirm(question)
// Ask a question and suggest to choose between Ok and Cancel. The choice is returned as true/false.
// alert(message)
// Output a message.
// All these functions are modal, they pause the code execution and prevent the visitor from interacting with the page until they answer.

// For instance:

let userName = prompt("What is your name?", "John");
let learnJavaScript = confirm("Do you like to learn JavaScript?");

alert("Visitor " + userName)
alert("Learn JavaScript : " + learnJavaScript)

// Operators
// JavaScript supports the following operators:

// Arithmetical
// Regular: * + - /, also % for the remainder and ** for power of a number.

// The binary plus + concatenates strings. And if any of the operands is a string, the other one is converted to string too:

console.log('1' + 3); //14
console.log(1 + '3'); //13
console.log(1 + 3 + '4'); //44
console.log(2 * 9 + 6 - 5 / 2); //21.5

// Assignments
// There is a simple assignment: a = b and combined ones like a *= 2.

// Bitwise
// Bitwise operators work with 32-bit integers at the lowest, bit-level: see the docs when they are needed.

// Conditional
// The only operator with three parameters: cond ? resultA : resultB. If cond is truthy, returns resultA, otherwise resultB.

// Logical operators
// Logical AND && and OR || perform short-circuit evaluation and then return the value where it stopped (not necessary true/false). Logical NOT ! converts the operand to boolean type and returns the inverse value.

// Nullish coalescing operator
// The ?? operator provides a way to choose a defined value from a list of variables. The result of a ?? b is a unless it’s null/undefined, then b.

// Comparisons
// Equality check == for values of different types converts them to a number (except null and undefined that equal each other and nothing else), so these are equal:

console.log(0 == false);
console.log(0 == true);

// Other comparisons convert to a number as well.

// The strict equality operator === doesn’t do the conversion: different types always mean different values for it.

// Values null and undefined are special: they equal == each other and don’t equal anything else.

// Greater/less comparisons compare strings character-by-character, other types are converted to a number.

// Other operators
// There are few others, like a comma operator.


//LOOPS

// We covered 3 types of loops:

for (let i = 0; i < 5; i++) {
    //body
}

// While loop

let i = 0;
while (i < 5) {
    //body
    i++;
}

// do-while

do {
    //body
} while (true)
    
// The “switch” construct
// The “switch” construct can replace multiple if checks. It uses === (strict equality) for comparisons.

// For instance:


let age = prompt("How old are you?", 18);

switch (age) {
    case '18':
        alert('You are 18');
        break;
    case '19':
        alert('You are 19');
        break;
    default:
        alert('You are not 18 or 19');
}

// Functions
// We covered three ways to create a function in JavaScript:

// Function Declaration: the function in the main code flow

function FuncName(a,b) {
    return a + b;
}
console.log(FuncName(5, 7));

// Function Expression: the function is stored in a variable
let FuncName2 = function (a, b) {
    return a + b;
}
console.log(FuncName2(5, 7));

//Arrow Function
let arrowFunc = (a, b) => a + b
console.log(arrowFunc(5, 7));