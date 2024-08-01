// PUBLIC CLASS
class myPublicClass{
    public name: string
    
    constructor(name: string) {
        this.name = name
    }
}

let a = new myPublicClass("Saim")

console.log(a)

//PROTECTED CLASS

class myProtectedClass{
    protected name: string
    
    constructor(name: string) {
        this.name = name
    }
}

class myExtendClass extends myProtectedClass{
    
    getprotectedClassInfo() {
        console.log(`My Name is ${this.name}`)
    }
}

let b = new myExtendClass("Saim")
console.log(b)

//PRIVATE CLASS

class myPrivateClass{
    private name: string
    
    constructor(name: string) {
        this.name = name
    }

    getPrivateName() {
        console.log(`Private Name : ${this.name}`) //way to access private name
    }
}

let c = new myPrivateClass("Saim")

console.log(c.getPrivateName())