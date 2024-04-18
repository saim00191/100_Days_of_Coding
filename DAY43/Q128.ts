
const multipleParametres = (...numbers: number[]) =>
    numbers.reduce((a, b) => a * b)


console.log(multipleParametres(2,4,6 ,2)); //96