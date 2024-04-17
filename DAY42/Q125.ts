
const obj = {
    name: "Saim",
    age: 17,
    hobbies: "coding",

    getDetails: function () {
        return `Name : ${this.name} , Age : ${this.age} , hobbies : ${this.hobbies}`
    }
}

console.log(obj.getDetails());