
let Numbers = [49, 48.5, 39, 44, 37, 43, 50]

let averageGrade = Numbers.reduce((num, grades) => num + grades) / Numbers.length;

console.log(averageGrade);