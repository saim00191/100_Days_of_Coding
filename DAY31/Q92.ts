
function RemovedLastElement(FruitsArr : string[]) {
    return FruitsArr.pop()
}

let Fruits: string[] = ['Strawberry' , 'Apple' , 'Banana' , 'Cherry']
let RemovedFruits = RemovedLastElement(Fruits)

console.log(`Removed Fruit : ${RemovedFruits}`);
console.log(`Updated Fruits Array : ${Fruits}`);