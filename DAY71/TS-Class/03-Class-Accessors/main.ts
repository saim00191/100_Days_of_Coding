class Human {
    name : string

    constructor(name : string){
        this.name = name
    }

    get Human(){
        return this.name
    }

    set Human(val : string){
        this.name = val
    }
}

let a = new Human("Saim")
console.log(a)

a.name = "Faiz"
console.log(a)