/********************
 * GENERICS CLASSES *
 ********************/

// Generic Class

class Human<T> {
  constructor(public value: T) {}

  // Method that takes a message of type `T` and displays it along with the `value` property
  show(msg: T): void {
    console.log(`${msg} - ${this.value}`);
  }
}

let Human1 = new Human<string>("Saim");
console.log(Human1.value); // Outputs: "Saim"
Human1.show("Hello World"); // Outputs: "Hello World - Elzero"

let Human2 = new Human<number | string>(1000);
console.log(Human2.value); // Outputs: 1000
Human2.show("Dummy Message"); // Outputs: "Dummy Message - 1000"

let Human3 = new Human<number | string>(100);
console.log(Human3.value); // Outputs: 100
Human3.show("Dummy Message 2"); // Outputs: "Dummy Message 2 - 100"
