/***************************
 * FUNCTION REST PARAMETER *
 ***************************/
function add() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (a, b) { return a + b; });
}
console.log(add(1, 2, 3, 4, 5)); // outputs 15
