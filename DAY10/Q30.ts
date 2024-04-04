let UserNames = ["Admin" , "Saim" , "Faiz" , "Talha" , " Junaid"]

for(let UserName of UserNames){
    if(UserName === "Admin"){
        console.log("Hello Admin, would you like to see a status report?")
    }else{
        console.log(`Hello ${UserName}, thank you for logging in again.`)
    }
}