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
// PUBLIC CLASS
var myPublicClass = /** @class */ (function () {
    function myPublicClass(name) {
        this.name = name;
    }
    return myPublicClass;
}());
var a = new myPublicClass("Saim");
console.log(a);
//PROTECTED CLASS
var myProtectedClass = /** @class */ (function () {
    function myProtectedClass(name) {
        this.name = name;
    }
    return myProtectedClass;
}());
var myExtendClass = /** @class */ (function (_super) {
    __extends(myExtendClass, _super);
    function myExtendClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    myExtendClass.prototype.getprotectedClassInfo = function () {
        console.log("My Name is ".concat(this.name));
    };
    return myExtendClass;
}(myProtectedClass));
var b = new myExtendClass("Saim");
console.log(b);
//PRIVATE CLASS
var myPrivateClass = /** @class */ (function () {
    function myPrivateClass(name) {
        this.name = name;
    }
    myPrivateClass.prototype.getPrivateName = function () {
        console.log("Private Name : ".concat(this.name)); //way to access private name
    };
    return myPrivateClass;
}());
var c = new myPrivateClass("Saim");
console.log(c.getPrivateName());
