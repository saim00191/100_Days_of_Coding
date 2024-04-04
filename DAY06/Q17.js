var GuestList2 = ["Saim", "Faiz", "Junaid", "Saqib", "Qasim", "Talha"];
console.log("Great news! I found a bigger dinner table!");
GuestList2.unshift("Khursheed");
GuestList2.splice(GuestList2.length / 2, 0, "Fahad");
GuestList2.push("Nadir");
for (var _i = 0, GuestList2_1 = GuestList2; _i < GuestList2_1.length; _i++) {
    var Guest = GuestList2_1[_i];
    console.log("Dear ".concat(Guest, " You are Invited to Dinner on 1-April-2024 at 9:00PM"));
}
console.log("Unfortunately, I can only invite two people for dinner.");
while (GuestList2.length > 2) {
    var removedGuest = GuestList2.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
for (var _a = 0, GuestList2_2 = GuestList2; _a < GuestList2_2.length; _a++) {
    var RemainingGuest = GuestList2_2[_a];
    console.log("Dear ".concat(RemainingGuest, " You are still invited to Dinner"));
}
GuestList2.splice(0, GuestList2.length);
console.log(GuestList2);
