// let - used to declare a block-scoped local variable
var PersonName = "Saim Raza";
//  Using if-else statement to handle alternate conditions
var age = 18;
if (age <= 18) {
    console.log("You are eligible");
}
else {
    console.log("You are not eligible");
}
//Returning a formatted message from a function
function message(name) {
    return "Hello ".concat(name);
}
console.log(message("Saim"));
