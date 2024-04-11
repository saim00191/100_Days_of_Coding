//@ts-ignore
function averageScore(...score: number[]) {
    let total = score.reduce((num1, num2) => num1 + num2);
    return total / score.length
}
//@ts-ignore
let result = averageScore(78, 90, 63, 29, 77)
console.log(result);