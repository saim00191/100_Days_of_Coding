
abstract class Human {
    static id: number = 1 
    name: string
    id: number
    
    constructor(id:number , name : string) {
        this.id = id
        this.name = name
    }

    static getNextID() {
        return Human.id++
    }

    abstract getInfo(): string
}

class Person extends Human{
    constructor(id: number, name: string) {
        super(id , name)
    }

    getInfo(): string {
        return `ID : ${this.id} , NAME : ${this.name}`
    }
}
const item1: Human = new Person(Human.getNextID(), "Saim");
const item2: Human = new Person(Human.getNextID(), "Faiz");

console.log(item1.getInfo()); // ID: 1, Name: Widget
console.log(item2.getInfo()); 