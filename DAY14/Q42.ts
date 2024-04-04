//@ts-ignore
let magicianArr2 = ["David Copperfied", "Merlin", "Penn and teller", "David Abbot", "Simo Aalto"]

//@ts-ignore
function make_Great(GreatMagicians: string[]) {
    for (let i = 0; i < GreatMagicians.length; i++){
     magicianArr2[i] =  GreatMagicians[i] + " The Great"
    }
}

//@ts-ignore
function show_Magicians(magician: string[]) {
    for (let magicians of magician) {
        console.log(magicians);        
    }
}

make_Great(magicianArr2)
show_Magicians(magicianArr2)
