
function getSeason(Month: number) {
    switch (Month) {
        case 12: 
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3: 
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6: 
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9: 
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default: 
            console.log("Invalid Month.");
    }
}

getSeason(8) // Summer
getSeason(2) // Winter
getSeason(22)// Invalid Month.