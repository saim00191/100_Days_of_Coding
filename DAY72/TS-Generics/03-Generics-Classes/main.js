/********************
 * GENERICS CLASSES *
 ********************/
// Generic Class
var Human = /** @class */ (function () {
    function Human(value) {
        this.value = value;
    }
    // Method that takes a message of type `T` and displays it along with the `value` property
    Human.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return Human;
}());
var Human1 = new Human("Saim");
console.log(Human1.value); // Outputs: "Saim"
Human1.show("Hello World"); // Outputs: "Hello World - Elzero"
var Human2 = new Human(1000);
console.log(Human2.value); // Outputs: 1000
Human2.show("Dummy Message"); // Outputs: "Dummy Message - 1000"
var Human3 = new Human(100);
console.log(Human3.value); // Outputs: 100
Human3.show("Dummy Message 2"); // Outputs: "Dummy Message 2 - 100"
