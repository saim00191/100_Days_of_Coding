//@ts-ignore
const countries = new Map<string , string>()

countries.set("Pakistan" , "Islamabad")
countries.set("USA" , "Washington")
countries.set("New Zealand" , "Wellington")
countries.set("Bangladesh", "Dhaka")

console.log(countries); 

function checkForCanada(map: Map<string , string>) : void {
    if (map.has("Canada")) {
        console.log(`The Capital of Canada is ${map.get("Canada")} `);
    } else {
        console.log(`Canada is not Found in the Map.`);
    }
}

checkForCanada(countries)