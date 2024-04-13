function GreaterThenTenNumbers(num) {
    return num.filter(function (numbers) { return numbers > 10; });
}
var Numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
console.log("Original Numbers : ", Numbers);
var Result = GreaterThenTenNumbers(Numbers);
console.log("Updated Numbers : ", Result);
