//In TypeScript, an interface can define not only the structure of an object but also the
//signature of functions or methods that objects adhering to the interface should have.
// This allows you to specify not just the properties but also the methods and their parameters
// and return types that should be present in objects implementing the interface.
// Create an object that adheres to the 'Person' interface
var User = {
    name: "Saim Raza",
    age: 19,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
User.greet("Hello, TypeScript!");
