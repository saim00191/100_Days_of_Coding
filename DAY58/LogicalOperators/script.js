
// //Logical operators
// There are four logical operators in JavaScript: || (OR), && (AND), ! (NOT), ?? (Nullish Coalescing). Here we cover the first three, the ?? operator is in the next article.

// Although they are called “logical”, they can be applied to values of any type, not only boolean. Their result can also be of any type.

// Let’s see the details.


// || (OR)
// The “OR” operator is represented with two vertical line symbols:

result = true || false;

// In classical programming, the logical OR is meant to manipulate boolean values only. If any of its arguments are true, it returns true, otherwise it returns false.

// In JavaScript, the operator is a little bit trickier and more powerful. But first, let’s see what happens with boolean values.

// There are four possible logical combinations:

console.log(true || false); //true
console.log(true || true);  //true
console.log(false || false); //false
console.log(false || true); //true

let time = 9

if(time < 10 || time > 18){
    console.log("The office is closed")
}

// OR "||" finds the first truthy value
// The logic described above is somewhat classical. Now, let’s bring in the “extra” features of JavaScript.

// The extended algorithm works as follows.

// Given multiple OR’ed values:

result1 = val1 || val2 || val3;

// The OR || operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to boolean. If the result is true, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were false), returns the last operand.
// A value is returned in its original form, without the conversion.

// In other words, a chain of OR || returns the first truthy value or the last one if no truthy value is found.
// In the example above, val1 is false, val2 is true, and val3 is false. The result is true.


// && (AND)
// The AND operator is represented with two ampersands &&:


result = a && b;

console.log(true  && false); //false
console.log(true  && true);  //true
console.log(false &&  false); //true
console.log(false && true); //false

let time2 = 12

if (time === 12) {
    console.log("Good Afternoon");
}

if (1 && 0) {
    console.log("Dont Work b/c the result is false");
}


// AND “&&” finds the first falsy value
// Given multiple AND’ed values:

// result3 = value1 && value2 && value3;

// The AND && operator does the following:

// Evaluates operands from left to right.
// For each operand, converts it to a boolean. If the result is false, stops and returns the original value of that operand.
// If all operands have been evaluated (i.e. all were truthy), returns the last operand.
// In other words, AND returns the first falsy value or the last value if none were found.

// The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.

console.log(1 &&  0); // 0 means false
console.log(1 && 5); // 5 means true
console.log(null && 66); // null means false
console.log("hello World " && 0); //0 means false

console.log(1 && 2 && null && 4); //null
console.log(1 && 2 && 3); 


// ! (NOT)
// The boolean NOT operator is represented with an exclamation sign !.

// The syntax is pretty simple:

result = !value;

console.log(!true);
console.log(!0);

// A double NOT !! is sometimes used for converting a value to boolean type:

console.log(!!0);