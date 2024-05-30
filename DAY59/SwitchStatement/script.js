// The "switch" statement
// A switch statement can replace multiple if checks.

// It gives a more descriptive way to compare a value with multiple variants.

// The syntax
// The switch has one or more case blocks and an optional default.

// It looks like this:

switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:
      ...
      [break]
}

let a = 2 

switch (a) {
    case 1:
        console.log('a is 1')
        break
    case 2:
        console.log('a is 2')   // a is 2
        break
    case 3:
        console.log('a is 3')
        break

    case 4:
        console.log('a is 4')
        break

    case 5:
        console.log('a is 5')
        break

    default:
        console.log('Invalid')
}

let x = 1
let y = 0

switch(x) {
    case y + 1:
        console.log('x is y')
        break
    default:
        console.log('x is not y')
}

let j = 3;

switch (j) {
    case 4:
    console.log('Right!');
    break;

    case 3: // (*) grouped two cases
     case 5:
    console.log('Wrong!');
    console.log("Why don't you take a math class?");
    break;

  default:
    console.log('The result is strange. Really.');
}
