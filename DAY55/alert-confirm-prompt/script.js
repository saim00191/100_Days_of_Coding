
//shows a message.
let a = "Hello World"
alert(a)

// Syntax Prompt
// result = prompt(title, [default]);

//shows a message asking the user to input text. It returns the text or, if Cancel button or Esc is clicked, null.
let age = prompt('How old are you?', 35);

alert(`You are ${age} years old!`); // You are 100 years old!

let test = prompt('Enter your Name' , "Anonymous");
alert("Welcome", test)


//Syntax Confirm
// result = confirm(question);

//shows a message and waits for the user to press “OK” or “Cancel”. It returns true for OK and false for Cancel/Esc.
let isBoss = confirm("Are you the boss?");

alert( isBoss )