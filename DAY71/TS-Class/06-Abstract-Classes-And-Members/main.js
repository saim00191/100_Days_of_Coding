var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Human = /** @class */ (function () {
    function Human(id, name) {
        this.id = id;
        this.name = name;
    }
    Human.getNextID = function () {
        return Human.id++;
    };
    Human.id = 1;
    return Human;
}());
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, name) {
        return _super.call(this, id, name) || this;
    }
    Person.prototype.getInfo = function () {
        return "ID : ".concat(this.id, " , NAME : ").concat(this.name);
    };
    return Person;
}(Human));
var item1 = new Person(Human.getNextID(), "Saim");
var item2 = new Person(Human.getNextID(), "Faiz");
console.log(item1.getInfo()); // ID: 1, Name: Widget
console.log(item2.getInfo());
