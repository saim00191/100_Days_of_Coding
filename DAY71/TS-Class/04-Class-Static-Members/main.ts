
class Car{
    static manufactureYear: number = 2024
    model: string
    color: string
    
    constructor(model: string, color: string) {
        this.model = model
        this.color = color
    }

    getCarInfo() {
        console.log(`Model : ${this.model} , Color : ${this.color}`)
    }
}

let CarInfo = new Car("Civic", "White")
console.log(`Static Manufacture Year :  ${Car.manufactureYear}`)  // way to access static property

console.log(CarInfo)