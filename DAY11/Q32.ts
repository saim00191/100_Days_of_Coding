
const CurrentUsers : string[] = ["Saim" , "Faiz" , "Talha" , "Ali", "Junaid" , "Nadir"]
const newUsers : string[]= ["Faisal" , "Talha" ,"Saqib" , "Ali" , "Waseem" , "Nadir"]

for(let Users of newUsers){
    if(CurrentUsers.some(username => username === Users)){
        console.log(`Sorry ${Users} Name is already taken.`)
    }else{
        console.log(`Great ${Users} Name is available`)
    }
}



