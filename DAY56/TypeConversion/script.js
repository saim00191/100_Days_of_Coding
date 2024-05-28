
let a = "Saim"
console.log(typeof a); // string

let b = true
console.log(typeof b); //boolean

let c = String(b)
console.log(typeof c); // Now b become string

console.log("10" / "2"); //Answer 5 , string are converted to numbers

let d = "123456"
console.log(typeof d); //string

let e = Number(d)
console.log(typeof e); //Now d become number

let f = Number("Hello")
console.log(f); //NaN

console.log("    1234   "); //    1234
console.log("    1234   ".trim()); //1234

console.log(Boolean(1)); //true
console.log(Boolean(0)); //false

console.log(Boolean("Hello")); //true
console.log(Boolean("   ")); //true