var GuestList2 = ["Saim", "Faiz", "Junaid", "Saqib", "Qasim", "Talha"];
for (var _i = 0, GuestList2_1 = GuestList2; _i < GuestList2_1.length; _i++) {
    var MoreGuest = GuestList2_1[_i];
    console.log("Hello! ".concat(MoreGuest, " Now I Found a Bigger Table For Dinner."));
}
GuestList2.unshift("Jahanzeb");
GuestList2.splice(GuestList2.length / 2, 0, "Khursheed");
GuestList2.push("Hasan");
for (var _a = 0, GuestList2_2 = GuestList2; _a < GuestList2_2.length; _a++) {
    var Invited = GuestList2_2[_a];
    console.log("Dear ".concat(Invited, " You are Invited to Dinner on 1-April-2024 at 9:00PM"));
}
