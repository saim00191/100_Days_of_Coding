var CurrentUsers = ["Saim", "Faiz", "Talha", "Ali", "Junaid", "Nadir"];
var newUsers = ["Faisal", "Talha", "Saqib", "Ali", "Waseem", "Nadir"];
var _loop_1 = function (Users) {
    if (CurrentUsers.some(function (username) { return username === Users; })) {
        console.log("Sorry ".concat(Users, " Name is already taken."));
    }
    else {
        console.log("Great ".concat(Users, " Name is available"));
    }
};
for (var _i = 0, newUsers_1 = newUsers; _i < newUsers_1.length; _i++) {
    var Users = newUsers_1[_i];
    _loop_1(Users);
}
