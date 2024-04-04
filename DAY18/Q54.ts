
function Cars(key: string, value: string) {
    let CarsInfo = {}

    CarsInfo[key] = value
    
    return CarsInfo
}

let CarDetails = Cars("Model", "Grande" )
let CarDetails2 = Cars("Color", "White")

console.log(CarDetails);
console.log(CarDetails2);


