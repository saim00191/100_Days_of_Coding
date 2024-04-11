//@ts-ignore
function averageScore() {
    var score = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        score[_i] = arguments[_i];
    }
    var total = score.reduce(function (num1, num2) { return num1 + num2; });
    return total / score.length;
}
//@ts-ignore
var result = averageScore(78, 90, 63, 29, 77);
console.log(result);
