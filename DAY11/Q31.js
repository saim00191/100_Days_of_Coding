var UserLists = [];
if (UserLists.length > 0) {
    for (var _i = 0, UserLists_1 = UserLists; _i < UserLists_1.length; _i++) {
        var UserList = UserLists_1[_i];
        if (UserList === "Admin") {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(UserList, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
