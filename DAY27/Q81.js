function logProperties(obj) {
    for (var Properties in obj) {
        console.log("".concat(Properties, " : ").concat(obj[Properties]));
    }
}
logProperties({
    make: "Toyota",
    model: "Grande",
    year: 2022
});
