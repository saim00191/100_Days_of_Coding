var Numbers = [49, 48.5, 39, 44, 37, 43, 50];
var averageGrade = Numbers.reduce(function (num, grades) { return num + grades; }) / Numbers.length;
console.log(averageGrade);
