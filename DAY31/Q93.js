function ReplaceBananaWithMango(Fruits) {
    var BananaIndex = Fruits.indexOf("Banana");
    if (BananaIndex !== -1) {
        Fruits[BananaIndex] = "Mango";
    }
    else {
        console.log("Banana Not Found In Array");
    }
}
var FruitArr = ['Strawberry', 'Apple', 'Banana', 'Cherry'];
ReplaceBananaWithMango(FruitArr);
console.log(FruitArr); //[ 'Strawberry', 'Apple', 'Mango', 'Cherry' ]
