
class Car {
    name: string
    model: number
    color: string
    
    constructor(name: string, model: number, color: string) {
        this.name = name
        this.model = model
        this.color = color
    }

    getCarInfo() {
        console.log(`NAME : ${this.name}\nMODEL : ${this.model}\nCOLOR : ${this.color}`)
    }
}

let CarInfo = new Car("Civic", 2024, "White")

console.log(CarInfo.getCarInfo())