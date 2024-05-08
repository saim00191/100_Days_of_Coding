// Synchronous example
console.log("Before synchronous operation");

for (let i = 0; i < 9; i++) {}
console.log("After synchronous operation");

console.log("----------------------------");

// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(() => {
  console.log("Asynchronous operation completed"); //Executed after 2 seconds
}, 2000);
console.log("After asynchronous operation setup");
