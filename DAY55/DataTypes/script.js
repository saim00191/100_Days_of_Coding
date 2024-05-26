// A value in JavaScript is always of a certain type. For example, a string or a number.
// There are eight basic data types in JavaScript. Here, we’ll cover them in general and in the next chapters we’ll talk about each of them in detail.
// We can put any type in a variable. For example, a variable can at one moment be a string and then store a number:

//Numberss
//BigInt
//Strings
//Boolean
//Undefined
//Null
//Symbol
// Object


// Numbers

let a = 145
a = 14.5  //14.5

console.log(9 / 0); //Infinity

console.log("Tom" / 2); // NaN, such division is erroneous

console.log( NaN + 1 ); // NaN
console.log( 3 * NaN ); // NaN
console.log("not a number" / 2 - 1); // NaN

// //BigInt
let bigInt = 1234567890123456789012345678901234567890n

console.log(9007199254740991 + 1); // 9007199254740992
console.log(9007199254740991 + 5); // 9007199254740996

// //Strings

let name1 = "Tom" //Tom
let name2 = 'Tom' //Tom
let name3 = `Tom` //Tom

// Double quotes  = "Tom"
//Single quotes = 'Tom'
//Backticks     = `Tom`

let name = "Tom"

console.log(`Hello ${name}`);


console.log(`the addition of 10 and 20 is ${10 + 20}`); //the addition of 10 and 20 is 30

console.log("the result is ${1 + 2}"); // the result is ${1 + 2} Double quote do nothing in this method


// //Boolean

let isFeePaid = true; // Yes,
let Pass = false; // No

let age = 4 == 4 //true

let types = "7" === 7 //false


//Null

// The special null value does not belong to any of the types described above.
// It forms a separate type of its own which contains only the null value:

let lunch = null; //null

// The special value undefined also stands apart. It makes a type of its own, just like null.
// The meaning of undefined is “value is not assigned”.
// If a variable is declared, but not assigned, then its value is undefined:

let FeePaid; //undefind

// Objects and Symbols

// The object type is special.
// All other types are called “primitive” because their values can contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store collections of data and more complex entities.
// Being that important, objects deserve a special treatment. We’ll deal with them later in the chapter Objects, after we learn more about primitives.
// The symbol type is used to create unique identifiers for objects. We have to mention it here for the sake of completeness, but also postpone the details till we know objects.
// The typeof operator
// The typeof operator returns the type of the operand. It’s useful when we want to process values of different types differently or just want to do a quick check.
// A call to typeof x returns a string with the type name:


console.log(typeof undefined) //undefined
console.log(typeof 10) //number
console.log(typeof 2001n) //bigint
console.log(typeof "Tom") //string
console.log(typeof Symbol("id") );// "symbol"
console.log(typeof Math); // "object"
console.log(typeof null); //object
console.log(typeof alert ); //function