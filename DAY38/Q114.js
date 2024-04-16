var Student = new Map();
Student.set(123, "Saim");
Student.set(456, "Faiz");
Student.set(789, "Talha");
Student.set(100, "Junaid");
Student.forEach(function (name, id) {
    console.log("Name : ".concat(name, " , Student Id : ").concat(id, " "));
});
