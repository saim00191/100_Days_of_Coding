var numberList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var Ending;
for (var _i = 0, numberList_1 = numberList; _i < numberList_1.length; _i++) {
    var Number_1 = numberList_1[_i];
    if (Number_1 === 1) {
        Ending = "st";
    }
    else if (Number_1 === 2) {
        Ending = "nd";
    }
    else if (Number_1 === 3) {
        Ending = "rd";
    }
    else {
        Ending = "th";
    }
    console.log(Number_1 + Ending);
}
