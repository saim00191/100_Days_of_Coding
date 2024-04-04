
let Age : number = 3

if(Age < 2){
    console.log("The person is a baby.");
}else if(Age > 2 && Age < 4){
    console.log("The person is a toddler.");
}else if(Age > 4 && Age < 13){
    console.log("The person is a kid");
}else if(Age > 13 && Age < 20){
    console.log("The person is a teenager.");
}else if(Age > 20 && Age < 65 ){
    console.log("The person is adult.");
}else{
    console.log("The Person is Older")
}