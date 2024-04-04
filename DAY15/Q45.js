function Car(maker, modelName) {
    var otherFeatures = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        otherFeatures[_i - 2] = arguments[_i];
    }
    var CarInformation = {
        maker: maker,
        modelName: modelName
    };
    for (var _a = 0, otherFeatures_1 = otherFeatures; _a < otherFeatures_1.length; _a++) {
        var _b = otherFeatures_1[_a], key = _b[0], value = _b[1];
        CarInformation[key] = value;
    }
    return CarInformation;
}
var CarDetails = Car("Toyota", "Grande", ["additionalFeatures", "Sunroof"], ["Speed", "280"]);
console.log(CarDetails);
