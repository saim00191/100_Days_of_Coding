let UserLists : any = []

if(UserLists.length > 0){
    for(let UserList of UserLists){
        if(UserList === "Admin"){
            console.log("Hello Admin, would you like to see a status report?")
        }else{
            console.log(`Hello ${UserList}, thank you for logging in again.`)
        }
    }
}else{
    console.log("We need to find some users!")
}