/***************************
 * FUNCTION REST PARAMETER *
 ***************************/

function add(...numbers : number[]) {
    return numbers.reduce((a, b) => a + b);
  }
  
  console.log(add(1, 2, 3, 4, 5)); // outputs 15