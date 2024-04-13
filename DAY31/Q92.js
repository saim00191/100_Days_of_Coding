function RemovedLastElement(FruitsArr) {
    return FruitsArr.pop();
}
var Fruits = ['Strawberry', 'Apple', 'Banana', 'Cherry'];
var RemovedFruits = RemovedLastElement(Fruits);
console.log("Removed Fruit : ".concat(RemovedFruits));
console.log("Updated Fruits Array : ".concat(Fruits));
