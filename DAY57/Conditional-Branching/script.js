// Conditional branching: if, '?'
// Sometimes, we need to perform different actions based on different conditions.

// To do that, we can use the if statement and the conditional operator ?, that’s also called a “question mark” operator.

//The “if” statement
// The if(...) statement evaluates a condition in parentheses and, if the result is true, executes a block of code.

// For example:

let JSDevelopedYear = prompt("Javascript was developed in??");
if (JSDevelopedYear == 1995) {
  alert("Correct!");
} else {
  alert("Wrong!");
}

//Else if
// The else if statement allows us to check multiple conditions.

// For example:
let BirthYear = prompt("Enter your Birth Year?");

if (BirthYear > 18) {
    alert("You are adult");
}else if(BirthYear >=12 && BirthYear < 18){
    alert("you are Younger");
}else{
    alert("You are a child");
}


//Conditional operator ‘?’

let result = condition ? value1 : value2;

//The condition is evaluated: if it’s truthy then value1 is returned, otherwise – value2.

// For example:

let accessAllowed = (age > 18) ? true : false;


let age = prompt('What is your age?');
if (age < 3) {
    message = 'Hi, baby!';
  } else if (age < 18) {
    message = 'Hello!';
  } else if (age < 100) {
    message = 'Greetings!';
  } else {
    message = 'What an unusual age!';
}
  
alert(message);
  

// Non-traditional use of ‘?’
// Sometimes the question mark ? is used as a replacement for if:

let company = prompt('Which company created JavaScript?', '');

(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');