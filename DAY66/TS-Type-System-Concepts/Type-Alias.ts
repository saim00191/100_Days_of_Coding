/**************
 * TYPE ALIAS *
 **************/

type UserDetails = {
    name: string;
    age: number;
}

type User = {
    id: string;
    details: UserDetails;
}

const user: User = {
    id: "123",
    details: {
        name: "John",
        age: 30
    }
}

console.log(user); //{ id: '123', details: { name: 'John', age: 30 } }