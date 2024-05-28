
//Comparison
// We know many comparison operators from maths.

// In JavaScript they are written like this:

// Greater/less than: a > b, a < b.
// Greater/less than or equals: a >= b, a <= b.
// Equals: a == b, please note the double equality sign == means the equality test, while a single one a = b means an assignment.
// Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.

// All comparison operators return a boolean value:

// true – means “yes”, “correct” or “the truth”.
// false – means “no”, “wrong” or “not the truth”.

console.log(5 < 3); //false
console.log(2 == "2"); //true
console.log(2 === "2"); //false Because === operator check datatype also
console.log(2 != 1); //true;

// String comparison
// To see whether a string is greater than another, JavaScript uses the so-called “dictionary” or “lexicographical” order.

// In other words, strings are compared letter-by-letter.

// For example:

console.log("A" < "B"); //true
console.log("Zia" < "Daniyal"); //false
console.log("Zia" === "ZIA"); //false

// The algorithm to compare two strings is simple:

// Compare the first character of both strings.
// If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
// Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
// Repeat until the end of either string.
// If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
// In the first example above, the comparison 'Z' > 'A' gets to a result at the first step.

// The second comparison 'Glow' and 'Glee' needs more steps as strings are compared character-by-character:

// G is the same as G.
// l is the same as l.
// o is greater than e. Stop here. The first string is greater.


// Comparison of different types

// When comparing values of different types, JavaScript converts the values to numbers.

// For example:


console.log("2" < 4); //true "2" become number
console.log(2 == '2');  //true


// For boolean values, true becomes 1 and false becomes 0.

// For example:

console.log(true === 1); //true
console.log(false === 0); //true

// Comparison with null and undefined
// There’s a non-intuitive behavior when null or undefined are compared to other values.

// For a strict equality check ===
// These values are different, because each of them is a different type.

console.log(null == undefined); //true
console.log(null === undefined); //false

// For a loose equality check ==
// These values are the same, because they are both null. undefined;


// Strange result: null vs 0
// Let’s compare null with a zero:

console.log(null > 0);  //false
console.log(null == 0);//false
console.log(null >= 0);//true