function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLeapYear(2024)); //true
console.log(isLeapYear(2007)); //false
console.log(isLeapYear(2000)); //true
