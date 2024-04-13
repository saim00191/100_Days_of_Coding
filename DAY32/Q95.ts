function GreaterThenTenNumbers (num : number[]) {
    return num.filter(numbers => numbers > 10)
}

let Numbers = [3,6,9,12,15,18,21,24,27,30]

console.log("Original Numbers : " , Numbers)

let Result = GreaterThenTenNumbers(Numbers)

console.log("Updated Numbers : ",Result)