/******************
 * GENERICS INTRO *
 ******************/
// Generic type declaration
var genericsFunc = function (val) {
    return val;
};
var numberVal = genericsFunc(2000);
var stringVal = genericsFunc("Hello World!");
var booleanVal = genericsFunc(false);
var arrValues = genericsFunc([10, 20, 30, 40, 50, 60, 70, 80]);
console.log(numberVal); // 2000
console.log(stringVal); // Hello World!
console.log(booleanVal); // false
console.log(arrValues); // [ 10, 20, 30, 40, 50, 60, 70, 80 ]
