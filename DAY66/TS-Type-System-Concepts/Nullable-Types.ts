/******************
 * NULLABLE TYPES *
 ******************/

let userName: string | null;

function greet(name: string | null) {
  if (name) {
    console.log(`Hello ${name}`);
  } else {
    console.log("Hello guest!");
  }
}

greet("Tom"); //Hello Tom
greet(null);  //Hello guest!