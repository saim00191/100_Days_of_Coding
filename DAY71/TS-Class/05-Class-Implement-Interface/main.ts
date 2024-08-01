
class Human {
    static id: number = 1
    
    id: number
    name: string
    
    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }

    static getIDMethod() {
        return Human.id++
    }

    getInfo() {
        console.log(`ID : ${this.id} NAME :${this.name}`)
    }
}

let Person1 = new Human(Human.getIDMethod() , "Saim")
let Person2 = new Human(Human.getIDMethod() , "Faiz")
let Person3 = new Human(Human.getIDMethod() , "Talha")
let Person4 = new Human(Human.getIDMethod(), "Junaid")


console.log(Person1)
console.log(Person2)
console.log(Person3)
console.log(Person4)