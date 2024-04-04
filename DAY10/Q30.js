var UserNames = ["Admin", "Saim", "Faiz", "Talha", " Junaid"];
for (var _i = 0, UserNames_1 = UserNames; _i < UserNames_1.length; _i++) {
    var UserName = UserNames_1[_i];
    if (UserName === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(UserName, ", thank you for logging in again."));
    }
}
