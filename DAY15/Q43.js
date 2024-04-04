var magicianArr = ["David Copperfied", "Merlin", "Penn and teller", "David Abbot", "Simo Aalto"];
function make_Great(Great) {
    return Great.map(function (magician) { return magician + " The Great"; });
}
function show_Magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
var GreatMagicians = make_Great(magicianArr);
console.log('\n Original Magicians');
show_Magicians(magicianArr);
console.log('\n Great Magician');
show_Magicians(GreatMagicians);
