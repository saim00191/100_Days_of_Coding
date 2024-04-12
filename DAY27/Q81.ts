
function logProperties(obj: any) {
    for (let Properties in obj) {
        console.log(`${Properties} : ${obj[Properties]}`);
    }
}
logProperties({
    make: "Toyota",
    model: "Grande",
    year: 2022
});