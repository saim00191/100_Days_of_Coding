var Car = /** @class */ (function () {
    function Car(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
    Car.prototype.getCarInfo = function () {
        console.log("NAME : ".concat(this.name, "\nMODEL : ").concat(this.model, "\nCOLOR : ").concat(this.color));
    };
    return Car;
}());
var CarInfo = new Car("Civic", 2024, "White");
console.log(CarInfo.getCarInfo());
