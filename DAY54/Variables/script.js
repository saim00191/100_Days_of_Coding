
let message;
message = "Hello World"

console.log(message);

//We can also declare multiple variables in one line:
let name = "Saim", age = 18, gender = "Male";

// The multiline variant is a bit longer, but easier to read

let name = "Saim",
age = 18,
gender = "Male";

// In older scripts, you may also find another keyword: var instead of let:
var message2 = "Hello World";

// The var keyword is almost the same as let. It also declares a variable but in a slightly different, “old-school” way.
// There are subtle differences between let and var, but they do not matter to us yet. We’ll cover them in detail in the chapter The old "var"

let message3 = "Hello World";

// We can put any value in the box.
// We can also change it as many times as we want:

let a = "Hello";
a = "World"; //value changed to "World"

a = "JavaScript"; //value again changed

// We can also declare two variables and copy data from one into the other.
let b = "Hello World";
let c = b;
console.log(b) //Hello World
console.log(c); //Hello World

// A variable should be declared only once.
// A repeated declaration of the same variable is an error:

let d = "Hello";
console.log(d)

let d = "World";

console.log(d) // SyntaxError: 'd' has already been declared


// There are two limitations on variable names in JavaScript:

// The name must contain only letters, digits, or the symbols $ and _.
// The first character must not be a digit.

// Examples of valid names:
let name = "John";
let $name = "Tom";
let _nun123 = 123;

// When the name contains multiple words, camelCase is commonly used. That is: words go one after another, each word except first starting with a capital letter: myVeryLongName.

// What’s interesting – the dollar sign '$' and the underscore '_' can also be used in names. They are regular symbols, just like letters, without any special meaning.

// These names are valid

let $ = 10; // declared a variable with the name "$"
let _ = 20; // and now a variable with the name "_"

console.log($ + _); // 30


//Examples of incorrect variable names:
let 1a = "John"; // cannot start with a digit
let a-b = "Tom"; // hyphens '-' aren't allowed in the name

// Variables named a and A are two different variables.

let a = "John"
console.log(A); //Error

There is a list of reserved words, which cannot be used as variable names because they are used by the language itself.

// The code below gives a syntax error:
let if = "John"
let return = "Tom"
let var = "Saim"

//To declare a constant (unchanging) variable, use const instead of let:

const name1 = "John";
name1 = "Tom"; // constant not reassign


