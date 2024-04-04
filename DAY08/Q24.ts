
let FirstName = "Saim"
let LastName = "Raza"


// Tests for equality and inequality with strings


console.log(FirstName === 'Saim'); //true
console.log(LastName !== FirstName); // true


// Tests using the lower case function


var FullName = "Saim Raza"

console.log(FullName.toLowerCase() === FullName); //false
console.log(FullName.toLowerCase() === "saim raza") //true

//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

let num1 = 5
let num2 = 9

console.log(num1 === num2) //false
console.log(num1 < num2)  // true
console.log(num1 !== num2); // true
console.log(num1 > num2); //false
console.log(num1 <= num2); //true



let a = 10
let b = 25
let c = 40


var result1 = a < b && b > c
console.log(result1); // false


var result2 = a < c && b < c
console.log(result2); //true


var result3 = a >= b && c <=b
console.log(result3); //false


var result4 = a > b || b < c
console.log(result4) //true


var result5 = b < a || c < b
console.log(result5); // false


var result6 = a > b || c < a 
console.log(result6); // false



let Numbers = [10,20,30,40,50,60,70,80]


console.log(Numbers.includes(80)); // true
console.log(Numbers.includes(12)); // false
console.log(Numbers.includes(40)); // true






