
/******************
 * GENERICS INTRO *
 ******************/

// Generic type declaration

const genericsFunc = <T>(val: T): T => {
    return val;
}

let numberVal : number = genericsFunc<number> (2000)
let stringVal : string = genericsFunc<string> ("Hello World!")
let booleanVal : boolean = genericsFunc<boolean> (false)
let arrValues: number[] = genericsFunc<number[]>([10, 20, 30, 40, 50, 60, 70, 80])

console.log(numberVal) // 2000
console.log(stringVal) // Hello World!
console.log(booleanVal) // false
console.log(arrValues) // [ 10, 20, 30, 40, 50, 60, 70, 80 ]