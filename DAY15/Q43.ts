let magicianArr = ["David Copperfied", "Merlin", "Penn and teller", "David Abbot", "Simo Aalto"]

function make_Great(Great: string[]) {
    return Great.map(magician => magician + " The Great")
}

function show_Magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

const GreatMagicians = make_Great(magicianArr)

console.log('\n Original Magicians');
show_Magicians(magicianArr)

console.log('\n Great Magician');
show_Magicians(GreatMagicians)