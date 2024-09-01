
/*******************
 * TYPE ASSERTIONS *
 *******************/

let data: any = "Hello Typescript"

let datalenght: number = (data as string).length;

console.log("Data Length: ", datalenght);


