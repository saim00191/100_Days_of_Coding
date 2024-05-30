
//WHILE LOOOP

// The while loop has the following syntax:

while (condition) {
    // code to be executed
}

let condition = 0
while (condition < 5) {
    console.log(condition) 
    condition++      // 0 1 2 3 4
}

let condition2 = 5
while (condition2) {
    console.log(condition2) //5 4 3 2 1
    condition2 --  
}

// Curly braces are not required for a single-line body
// If the loop body has a single statement, we can omit the curly braces {…}:

do {
    // loop body
} while (condition3);


let i = 0

do {
    console.log(i)
    i++
}while (i < 5)

// The “for” loop
// The for loop is more complex, but it’s also the most commonly used loop.

// It looks like this:

for (begin; condition; step) {
    // ... loop body ...
}

for(let a = 0; a <= 5; a++) {
    console.log(a)  // 0 1 2 3 4 5
}

for (let b = 0; b <= 5; b++) {
    console.log(b * 2)  // 0 2 4 6 8 10
}
