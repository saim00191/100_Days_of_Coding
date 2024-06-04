/*********************
 * INTERSECTION TYPE *
 *********************/

type FirstType = {
    name: string;
    age: number;
  };
  
  type SecondType = {
    address: string;
    phone: string;
  };
  
  type CombinedType = FirstType & SecondType;
  
  const person: CombinedType = {
    name: "John",
    age: 20,
    address: "Street # 123 Pakistan",
    phone: "123-456-7890",
};
  
console.log(person);
  
//Output

// {
//     name: 'John',
//     age: 20,
//     address: 'Street # 123 Pakistan',
//     phone: '123-456-7890'
//   }