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
    Human.generateNextId = function () {
        return Human.nextId++;
    };
    Human.nextId = 1;
    return Human;
}());
var Entpity = /** @class */ (function (_super) {
    __extends(Entpity, _super);
    function Entpity(id, name) {
        return _super.call(this, id, name) || this;
    }
    Entpity.prototype.getHumanInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name);
    };
    return Entpity;
}(Human));
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(id, name) {
        return _super.call(this, id, name) || this;
    }
    Person.prototype.getHumanInfo = function () {
        return "ID: ".concat(this.id, ", Name: ").concat(this.name, " ");
    };
    return Person;
}(Human));
var entity1 = new Person(Human.generateNextId(), "Saim");
var entity2 = new Person(Human.generateNextId(), "Faiz");
var entity3 = new Person(Human.generateNextId(), "Talha");
console.log(entity1.getHumanInfo());
console.log(entity2.getHumanInfo());
console.log(entity3.getHumanInfo());
