var obj = {
    name: "Saim",
    age: 17,
    hobbies: "coding",
    getDetails: function () {
        return "Name : ".concat(this.name, " , Age : ").concat(this.age, " , hobbies : ").concat(this.hobbies);
    }
};
console.log(obj.getDetails());
