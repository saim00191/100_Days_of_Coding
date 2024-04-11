function makeAdder(numtoAdd) {
    return function (number) {
        return number + numtoAdd;
    };
}
var addTen = makeAdder(10);
console.log(addTen(25));
