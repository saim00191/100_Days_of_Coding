var Vehicle;
(function (Vehicle) {
    Vehicle[Vehicle["Car"] = 0] = "Car";
    Vehicle[Vehicle["Bike"] = 1] = "Bike";
    Vehicle[Vehicle["Truck"] = 2] = "Truck";
})(Vehicle || (Vehicle = {}));
console.log(Vehicle.Bike); //1
