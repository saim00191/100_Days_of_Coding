function ReduceCalculate(numbers) {
    return numbers.reduce(function (Val1Number, Val2Number) { return Val1Number + Val2Number; });
}
var NumbersList = [2, 4, 6, 8, 10, 12];
var Sum = ReduceCalculate(NumbersList);
console.log("Sum of All Numbers : ".concat(Sum));
