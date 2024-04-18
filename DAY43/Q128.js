var multipleParametres = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a * b; });
};
console.log(multipleParametres(2, 4, 6, 2));
