/*********************************
 * TYPE ANNOTATIONS WITH OBJECTS *
 *********************************/

let PersonExample : {
    name: string,
    age: number,
    email: string
    adress: {
        country: string,
        city: string,
    },
    monthlyIncome? : number
}

PersonExample = {
    name: "Tom",
    age: 30,
    email: "example@gmail.com",
    adress: {
        country: "Pakistan",
        city : "Hyderabad"
    }
}
console.log(PersonExample);