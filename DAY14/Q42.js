//@ts-ignore
var magicianArr2 = ["David Copperfied", "Merlin", "Penn and teller", "David Abbot", "Simo Aalto"];
//@ts-ignore
function make_Great(GreatMagicians) {
    for (var i = 0; i < GreatMagicians.length; i++) {
        magicianArr2[i] = GreatMagicians[i] + " The Great";
    }
}
//@ts-ignore
function show_Magicians(magician) {
    for (var _i = 0, magician_1 = magician; _i < magician_1.length; _i++) {
        var magicians = magician_1[_i];
        console.log(magicians);
    }
}
make_Great(magicianArr2);
show_Magicians(magicianArr2);
