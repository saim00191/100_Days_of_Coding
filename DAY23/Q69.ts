
function divideAndRemainder(divident: number, divisor: number): { quotient: number, Remainder: number } {
    
    let quotient = Math.floor(divident / divisor)
    
    let Remainder = divident % divisor

    return { quotient, Remainder }
    
}

console.log(divideAndRemainder(10 , 4));