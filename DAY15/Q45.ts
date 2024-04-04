
function Car(maker: string, modelName: string, ...otherFeatures : [string , any][]):any {
    let CarInformation = {
        maker,
        modelName
    };

    for (const [key, value] of otherFeatures) {
        CarInformation [key] = value
    }
    return CarInformation
}
 
const CarDetails = Car("Toyota", "Grande", ["additionalFeatures", "Sunroof"], ["Speed", "280"])

console.log(CarDetails);