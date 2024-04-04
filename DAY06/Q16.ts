
var GuestList2 = ["Saim", "Faiz", "Junaid", "Saqib", "Qasim", "Talha"];

for(let MoreGuest of GuestList2){
    console.log(`Hello! ${MoreGuest} Now I Found a Bigger Table For Dinner.`)
}


GuestList2.unshift("Jahanzeb")
GuestList2.splice(GuestList2.length / 2 , 0 ,"Khursheed" )
GuestList2.push("Hasan")

for (let Invited of GuestList2){
    console.log(`Dear ${Invited} You are Invited to Dinner on 1-April-2024 at 9:00PM`)
}


