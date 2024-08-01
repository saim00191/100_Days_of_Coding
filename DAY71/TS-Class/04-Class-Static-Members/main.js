var Car = /** @class */ (function () {
    function Car(model, color) {
        this.model = model;
        this.color = color;
    }
    Car.prototype.getCarInfo = function () {
        console.log("Model : ".concat(this.model, " , Color : ").concat(this.color));
    };
    Car.manufactureYear = 2024;
    return Car;
}());
var CarInfo = new Car("Civic", "White");
console.log("Static Manufacture Year :  ".concat(Car.manufactureYear)); // way to access static property
console.log(CarInfo);
