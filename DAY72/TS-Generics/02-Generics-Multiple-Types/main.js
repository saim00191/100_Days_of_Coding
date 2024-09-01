/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/
// Generic Function
function genericsFuncHandler(val) {
    return val;
}
console.log(genericsFuncHandler(500)); // 500
console.log(genericsFuncHandler("Hello World")); // Hello World
//Another Generic Function
function anotherGenericsFuncHandler(val) {
    return "The value is ".concat(val, " and type of the value is ").concat(typeof val);
}
console.log(anotherGenericsFuncHandler(500)); // The value is 500 and type of the value is number
console.log(anotherGenericsFuncHandler("Hello World")); // The value is Hello World and type of the value is string
// Arrow Function with Generics
var genericsArrowFuncHandler = function (val) { return val; };
console.log(genericsArrowFuncHandler(500)); // 500
console.log(genericsArrowFuncHandler("Hello World")); // Hello World
// Multiple Types Function
function multiTypesFuncHandler(val1, val2) {
    return "The first value is ".concat(val1, " and the second value is ").concat(val2, " and their type are ").concat(typeof val1, " and ").concat(typeof val2);
}
console.log(multiTypesFuncHandler(500, "Hello World")); // The first value is 500 and the second value is Hello World and their type are number and string
