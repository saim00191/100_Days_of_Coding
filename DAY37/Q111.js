function categorizeAge(Age) {
    if (Age < 13) {
        return "Child";
    }
    else if (Age < 20) {
        return "Teenager";
    }
    else {
        return "Adult";
    }
}
console.log(categorizeAge(8)); // Child
console.log(categorizeAge(33)); // Adult
console.log(categorizeAge(17)); // Teenager
