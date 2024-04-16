//@ts-ignore
var countries = new Map();
countries.set("Pakistan", "Islamabad");
countries.set("USA", "Washington");
countries.set("New Zealand", "Wellington");
countries.set("Bangladesh", "Dhaka");
console.log(countries);
function checkForCanada(map) {
    if (map.has("Canada")) {
        console.log("The Capital of Canada is ".concat(map.get("Canada"), " "));
    }
    else {
        console.log("Canada is not Found in the Map.");
    }
}
checkForCanada(countries);
