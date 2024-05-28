
// MATH OPERATORS

// Addition +,
// Subtraction -,
// Multiplication *,
// Division /,
// Remainder %,
// Exponentiation **.

let a = 100
a = -a
console.log(a); //-100

let b = 100
c = -b + b
console.log(c); //0

let d = 100
let e = 200

let f = d + e * 2
console.log(f); //500 , According to the order of operations, the multiplication is performed first. 200 * 2 = 400, then 400 + 100 = 500.

//ADDITION

let add1 = 10 + 20
console.log(add1);

let add2 = "Hello" + "World";
console.log(add2); //HelloWorld

console.log("10" + 2);  //102
console.log(2 + 2 + "2"); //42

let g = 10
let h = +g
console.log(h);

let i = -10
let j = +i
console.log(j);

let apples = "20"
let oranges = "30"
let total = apples + oranges
console.log(total); //2030

let total1 = +apples + +oranges
console.log(total1); //50


let l = 10
let m = 20

let n = 10 - (l = m + 1)
console.log(n); //-11

let a, b, c;

a = b = c = 2 + 2;

console.log( a ); // 4
console.log( b ); // 4
console.log(c); // 4

//Subtraction

let x1 = 10
let y1 = 20
let z1 = y2 - x2
console.log(z1); //10


let grapes = "10"
let apples = "20"
let total = apples  - grapes
console.log(total); //10



//Multiplication

let x2 = 10
let y2 = 20
let z2 = x2 * y2
console.log(z2); //200

let a2 = "49"
let b2 = "3"
let c2 = a2 * b2 + 5
console.log(c2); //152


//Division

let x3 = 10
let y3 = 20
let z3 = x3 / y3
console.log(z3); //0.5

let a3 = "100"
let b3 = "2"
let c3 = a3 / b3
console.log(c3); //50


//Remainder

let x4 = 10
let y4 = 20
let z4 = y4 % x4
console.log(z4); //0

let a4 = "100"
let b4 = "6"
let c4 = a4 % b4
console.log(c4); //4


// Exponentiation

let x5 = 10
let y5 = 2
let z5 = x5 ** y5
console.log(z5); //100

let a5 = "4"
let b5 = "3"
let c5 = a5 ** b5
console.log(c5); //64


//Modify-in-place

let o = 10
o = o + 20 //30
o = 2 * o + 30 //90
console.log(o);


let l = 4
l += 10
l *=  2  //28
console.log(l);

Increment & Decrement

let counter = 10
counter++
console.log(counter);

const counter2 = 10
counter2--
console.log(counter2); //Error const value never changed

let counter3 = 50
counter3--
counter3--
console.log(counter3); //48

// The operators ++ and -- can be placed either before or after a variable.
// When the operator goes after the variable, it is in “postfix form”: counter++.
// The “prefix form” is when the operator goes before the variable: ++counter.
// Both of these statements do the same thing: increase counter by 1.
// Is there any difference? Yes, but we can only see it if we use the returned value of ++/--.
// Let’s clarify. As we know, all operators return a value. Increment/decrement is no exception. The prefix form returns the new value while the postfix form returns the old value (prior to increment/decrement).
// To see the difference, here’s an example:

let counter4 = 30
let counterResult = ++counter4

console.log(counterResult);

// Now, let’s use the postfix form:
// counter++ increments counter and returns the old value, 30.
let counter5 = 30
let counterResult2 = counter5++

console.log(counterResult2);

let a9 = "10"
console.log(2 * ++a9); //22

let b9 = 20
console.log(--b9 - 2); //17


// Comma
// The comma operator , is one of the rarest and most unusual operators. Sometimes, it’s used to write shorter code, so we need to know it in order to understand what’s going on.

// The comma operator allows us to evaluate several expressions, dividing them with a comma ,. Each of them is evaluated but only the result of the last one is returned.

// For example:


let a10 = 10 + 20 - 3 + 20
console.log(a10); //47



// Bitwise operators
// Bitwise operators treat arguments as 32-bit integer numbers and work on the level of their binary representation.

// These operators are not JavaScript-specific. They are supported in most programming languages.

// The list of operators:

// AND ( & )
// OR ( | )
// XOR ( ^ )
// NOT ( ~ )
// LEFT SHIFT ( << )
// RIGHT SHIFT ( >> )
// ZERO-FILL RIGHT SHIFT ( >>> )


