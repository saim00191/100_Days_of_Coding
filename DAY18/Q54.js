function Cars(key, value) {
    var CarsInfo = {};
    CarsInfo[key] = value;
    return CarsInfo;
}
var CarDetails = Cars("Model", "Grande");
var CarDetails2 = Cars("Color", "White");
console.log(CarDetails);
console.log(CarDetails2);
