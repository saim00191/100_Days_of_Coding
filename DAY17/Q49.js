function Hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    for (var _a = 0, hobbies_1 = hobbies; _a < hobbies_1.length; _a++) {
        var FavouriteHobbies = hobbies_1[_a];
        console.log("I Love ".concat(FavouriteHobbies, "."));
    }
}
Hobbies("Coding", "Cricket", "Reading", "Drawing");
