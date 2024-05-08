// Synchronous example
console.log("Before synchronous operation");
for (var i = 0; i < 9; i++) { }
console.log("After synchronous operation");
console.log("----------------------------");
// Asynchronous example
console.log("Before asynchronous operation");
setTimeout(function () {
    console.log("Asynchronous operation completed");
}, 2000);
console.log("After asynchronous operation setup");
