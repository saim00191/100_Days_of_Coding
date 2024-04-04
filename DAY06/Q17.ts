var GuestList2 = ["Saim", "Faiz", "Junaid", "Saqib", "Qasim", "Talha"];
console.log("Great news! I found a bigger dinner table!");


GuestList2.unshift("Khursheed");
GuestList2.splice(GuestList2.length / 2, 0, "Fahad");
GuestList2.push("Nadir");

for(let Guest of GuestList2){
    console.log(`Dear ${Guest} You are Invited to Dinner on 1-April-2024 at 9:00PM`);
}

console.log("Unfortunately, I can only invite two people for dinner.");

while (GuestList2.length > 2) {
    let removedGuest = GuestList2.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

for (let RemainingGuest of GuestList2) {
    console.log(`Dear ${RemainingGuest} You are still invited to Dinner`);
}
GuestList2.splice(0, GuestList2.length);
console.log(GuestList2); 