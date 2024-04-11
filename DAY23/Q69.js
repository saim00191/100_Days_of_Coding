function divideAndRemainder(divident, divisor) {
    var quotient = Math.floor(divident / divisor);
    var Remainder = divident % divisor;
    return { quotient: quotient, Remainder: Remainder };
}
console.log(divideAndRemainder(10, 4));
