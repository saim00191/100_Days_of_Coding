
let Guest = ["Saim","Faiz","Junaid","Saqib","Qasim","Talha"]

for (let GuestName of Guest){
    console.log("Hello! " + GuestName + " You are Invited to Dinner on 1-April-2024 at 9:00PM")
}

let GuestCantMake = Guest[2]
console.log(`${GuestCantMake} Cant Make it to Dinner.`);

Guest[2] = "Jahanzeb"

for(let InvitedGuest of Guest){
    console.log(`Hello! ${InvitedGuest} You are Invited to Dinner on 1-April-2024 at 9:00PM`);
}