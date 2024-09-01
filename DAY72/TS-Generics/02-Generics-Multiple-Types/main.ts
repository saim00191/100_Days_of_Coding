/***************************
 * GENERICS MULTIPLE TYPES *
 ***************************/

// Generic Function

function genericsFuncHandler<T>(val: T): T{
    return val;
}

console.log(genericsFuncHandler<number>(500)) // 500
console.log(genericsFuncHandler<string>("Hello World")) // Hello World

//Another Generic Function
function anotherGenericsFuncHandler<T>(val: T):string{
    return `The value is ${val} and type of the value is ${typeof val}`
}

console.log(anotherGenericsFuncHandler<number>(500)) // The value is 500 and type of the value is number
console.log(anotherGenericsFuncHandler<string>("Hello World")) // The value is Hello World and type of the value is string


// Arrow Function with Generics

const genericsArrowFuncHandler = <T>(val: T): T => val;

console.log(genericsArrowFuncHandler<number>(500)) // 500
console.log(genericsArrowFuncHandler<string>("Hello World")) // Hello World

// Multiple Types Function

function multiTypesFuncHandler<T,S>(val1:T , val2:S ):string{
    return `The first value is ${val1} and the second value is ${val2} and their type are ${typeof val1} and ${typeof val2}`
}

console.log(multiTypesFuncHandler<number, string>(500, "Hello World")) // The first value is 500 and the second value is Hello World and their type are number and string
