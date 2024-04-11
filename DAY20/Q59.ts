
function makeAdder(numtoAdd: number): (number) => number{
    return function (number: number) {
        return number + numtoAdd
    }
}

let addTen = makeAdder(10);
console.log(addTen(25));