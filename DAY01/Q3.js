//To UpperCase
var Person = "Saim Raza From MirpurKhas";
console.log(Person.toUpperCase());
// To LowerCase
console.log(Person.toLowerCase());
// To TitleCase
var Person2 = "saim raza from mirpurkhas";
var TitleCase = Person2.split(" ");
var TitleCaseName = "";
for (var i = 0; i < TitleCase.length; i++) {
    TitleCaseName += TitleCase[i].charAt(0).toUpperCase() + TitleCase[i].slice(1).toLowerCase() + " ";
}
console.log(TitleCaseName);
