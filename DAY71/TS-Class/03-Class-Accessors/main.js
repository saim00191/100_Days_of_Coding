var Human = /** @class */ (function () {
    function Human(name) {
        this.name = name;
    }
    Object.defineProperty(Human.prototype, "Human", {
        get: function () {
            return this.name;
        },
        set: function (val) {
            this.name = val;
        },
        enumerable: false,
        configurable: true
    });
    return Human;
}());
var a = new Human("Saim");
console.log(a);
a.name = "Faiz";
console.log(a);
