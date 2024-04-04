var Guest = ["Saim", "Faiz", "Junaid", "Saqib", "Qasim", "Talha"];
for (var _i = 0, Guest_1 = Guest; _i < Guest_1.length; _i++) {
    var GuestName = Guest_1[_i];
    console.log("Hello! " + GuestName + " You are Invited to Dinner on 1-April-2024 at 9:00PM");
}
var GuestCantMake = Guest[2];
console.log("".concat(GuestCantMake, " Cant Make it to Dinner."));
Guest[2] = "Jahanzeb";
for (var _a = 0, Guest_2 = Guest; _a < Guest_2.length; _a++) {
    var InvitedGuest = Guest_2[_a];
    console.log("Hello! ".concat(InvitedGuest, " You are Invited to Dinner on 1-April-2024 at 9:00PM"));
}
