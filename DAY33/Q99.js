function getNextBirthDay(day, month) {
    var today = new Date();
    var year = today.getFullYear();
    var BirthDay = new Date(year, month - 1, day);
    if (BirthDay < today) {
        BirthDay.setFullYear(year + 1);
    }
    return BirthDay;
}
var NextBirthDay = getNextBirthDay(9, 10);
console.log("Next BirthDay is on : ", NextBirthDay.toLocaleDateString());
