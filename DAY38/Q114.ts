
const Student = new Map<number , string>()

Student.set(123, "Saim")
Student.set(456, "Faiz")
Student.set(789, "Talha")
Student.set(100, "Junaid")

Student.forEach((name , id) => {
    console.log(`Name : ${name} , Student Id : ${id} `);
});
