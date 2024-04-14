//@ts-ignore
function dayUntilNewYear() {
    var today = new Date();
    var NewYear = new Date(today.getFullYear() + 1, 0);
    var difference = NewYear.getTime() - today.getTime();
    var days = Math.ceil(difference / (1000 * 60 * 60 * 24));
    return days;
}
console.log(dayUntilNewYear(), "Days Left Until New Year!");
