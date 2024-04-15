function isDivisibleByTwoAndThree(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isDivisibleByTwoAndThree(12)); //true
console.log(isDivisibleByTwoAndThree(26)); //false
