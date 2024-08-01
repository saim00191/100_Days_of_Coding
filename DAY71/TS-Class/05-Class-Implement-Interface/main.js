var Human = /** @class */ (function () {
    function Human(id, name) {
        this.id = id;
        this.name = name;
    }
    Human.getIDMethod = function () {
        return Human.id++;
    };
    Human.prototype.getInfo = function () {
        console.log("ID : ".concat(this.id, " NAME :").concat(this.name));
    };
    Human.id = 1;
    return Human;
}());
var Person1 = new Human(Human.getIDMethod(), "Saim");
var Person2 = new Human(Human.getIDMethod(), "Faiz");
var Person3 = new Human(Human.getIDMethod(), "Talha");
var Person4 = new Human(Human.getIDMethod(), "Junaid");
console.log(Person1);
console.log(Person2);
console.log(Person3);
console.log(Person4);
