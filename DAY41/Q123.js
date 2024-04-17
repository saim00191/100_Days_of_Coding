function logUntilVowels(str) {
    var vowels = "aeiouAEIOU";
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var characters = str_1[_i];
        if (vowels.includes(characters)) {
            console.log("First vowels Found : ".concat(characters));
            break;
        }
        console.log(str);
    }
}
logUntilVowels("Hollo World");
