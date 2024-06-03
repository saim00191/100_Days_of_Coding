
// Functions
// Quite often we need to perform a similar action in many places of the script.

// For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

// Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

// We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.

// Function Declaration
// To create a function we can use a function declaration.

// It looks like this:

function showMessage() {
  console.log( 'Hello everyone!' );
}
// The function declaration creates a function object and assigns it to the showMessage variable.

// To call the function we just need to write its name followed by parentheses:

showMessage();
showMessage()

function name (p1 , p2) {
    return p1 * p2;
}
console.log(name(2, 3)) //6

// Local variables
// A variable declared inside a function is only visible inside that function.

// For example:

function showMessage2() {
    let message = 'Hello everyone!';
    console.log( message );
}
showMessage2();

// Outer variables
// A function can access an outer variable as well, for example:

let username = "John"
function showMessage3() {
    console.log(`Hello ${username}`);
}
showMessage3();

// The function has full access to the outer variable. It can modify it as well.

// For instance:

let username2 = "John";
function showMessage4() {
    username2 = "Bob";
    console.log(`Hello ${username2}`);
}

showMessage4() //value changed to Bob

// Parameters
// We can pass arbitrary data to functions using parameters.

// In the example below, the function has two parameters: from and text.

function showMessage5(name, seatNo) {
    console.log( name + ': ' + seatNo);
}
showMessage5('John', '1');
showMessage5('Bob', '2');
showMessage5('Alice', '3');

function showMessage6(name, message) {
    console.log(name + message);
}

let message = "Hello"
showMessage6("Tom ", message);
showMessage6("John ",message);

// Default values
// If a function is called, but an argument is not provided, then the corresponding value becomes undefined.

// For instance, the aforementioned function showMessage(from, text) can be called with a single argument:

function showMessage7(from, text = "no text given") {
    console.log(from + ": " + text);
}
showMessage7("John");
showMessage7("Bob", "Hello");

// Returning a value
// A function can return a value back into the calling code as the result.

// The simplest example would be a function that sums two values:
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
console.log(result);


function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i == 0) {
            return false
        }
        return true
    }
}
console.log(isPrime(10)) //true
console.log(isPrime(11)) //false
console.log(isPrime(5))  //false
