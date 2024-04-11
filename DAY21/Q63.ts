
type Shape = {
    Kind: "Circle" | "Rectangle"
    radius?: number
    height? : number
    width? : number
}

let Circle : Shape = {
    Kind: "Circle",
    radius : 5
}

let Rectangle: Shape = {
    Kind: "Rectangle",
    width: 10,
    height : 10
}

console.log(Rectangle);
console.log(Circle);