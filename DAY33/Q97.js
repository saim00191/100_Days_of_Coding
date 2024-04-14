//@ts-ignore
function getCurrentDate() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, "0");
    var Month = String(now.getMonth() + 1).padStart(2, "0");
    var Year = now.getFullYear();
    return "".concat(day, "-").concat(Month, "-").concat(Year);
}
console.log("Current Date : ", getCurrentDate());
