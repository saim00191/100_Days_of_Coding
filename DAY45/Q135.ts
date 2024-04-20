
// @ts-ignore
const person = {
    name: 'John Doe',
    age: 30,
    city: 'New York'
};

const result = JSON.stringify(person , null , 2);  // The '2' specifies the number of spaces to use as white space


console.log(result);
