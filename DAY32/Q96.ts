function ReduceCalculate (numbers : number[]) {
    return numbers.reduce((Val1Number , Val2Number) => Val1Number + Val2Number)
}

const NumbersList : number[] = [2,4,6,8,10,12]

let Sum = ReduceCalculate(NumbersList)

console.log(`Sum of All Numbers : ${Sum}`)