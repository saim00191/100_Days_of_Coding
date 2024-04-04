
//To UpperCase
let Person = "Saim Raza From MirpurKhas"

console.log(Person.toUpperCase())

// To LowerCase

console.log(Person.toLowerCase());

// To TitleCase

let Person2 = "saim raza from mirpurkhas"

let TitleCase = Person2.split(" ")

let TitleCaseName = "";

for(let i = 0 ; i < TitleCase.length ; i++){
    TitleCaseName += TitleCase[i].charAt(0).toUpperCase() + TitleCase[i].slice(1).toLowerCase() + " "
}
console.log(TitleCaseName);

